import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import { createClient, WagmiConfig } from 'wagmi';
import { metaMaskConnector, provider } from './connectors';

test('full app rendering/navigating', async () => {
  const client = createClient({
    autoConnect: true,
    connectors: [metaMaskConnector],
    provider,
  });
  render(
    <WagmiConfig client={client}>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </WagmiConfig>,
  );
  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/count/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/about/i));
  expect(screen.getByText(/About P12/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>,
  );

  // verify navigation to "no match" route
  expect(screen.getByText(/404 - Page Not Found/i)).toBeInTheDocument();
});
