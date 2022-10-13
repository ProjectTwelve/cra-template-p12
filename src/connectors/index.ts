import { configureChains, chain, Chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const p12testnet: Chain = {
  id: 44010,
  name: 'P12 Testnet',
  network: 'p12 testnet',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: 'https://testnet.p12.games/',
  },
  blockExplorers: {
    default: { name: 'P12scan', url: 'https://blockscout.p12.games/' },
  },
  multicall: {
    address: '0xb516171cf4648496d29F9c59Eb2Ee9B9f6CF2Ad8',
    blockCreated: 1017715,
  },
  testnet: false,
};

export const { chains, provider } = configureChains([chain.rinkeby, p12testnet], [publicProvider()], {
  pollingInterval: 15000,
});

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimChainChangedDisconnect: false,
  },
});
