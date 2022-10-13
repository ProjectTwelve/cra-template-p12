import { chainId, useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import WalletConnect from './WalletConnect';
import { shortenAddress } from '../../utils';

export default function Web3Status() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork({ chainId: chainId.rinkeby });

  if (address) {
    if (chain?.unsupported) {
      return (
        <button className="px-4 py-2 ml-4 text-white bg-red-500 rounded hover:bg-red-600" onClick={() => switchNetwork?.()}>
          Wrong Network
        </button>
      );
    }
    return (
      <button className="px-4 py-2 ml-4 text-xs text-white bg-indigo-500 rounded hover:bg-indigo-600">
        <p className="text-xs leading-6">{shortenAddress(address)}</p>
      </button>
    );
  } else {
    return <WalletConnect />;
  }
}
