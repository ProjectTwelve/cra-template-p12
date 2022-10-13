import { useConnect } from 'wagmi';
import MetamaskIcon from '../../assets/img/metamask.png';

export default function WalletConnect() {
  const { connect, connectors } = useConnect();

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="mt-6 grid grid-cols-1 gap-3 px-4">
        <button
          className="flex w-full min-w-[170px] items-center justify-center rounded bg-indigo-500  px-4 py-2 text-white hover:bg-indigo-600"
          onClick={() => connect({ connector: connectors[0] })}
        >
          <img className="mr-2 h-[30px] w-[30px]" src={MetamaskIcon} alt="meta_mask" />
          <span className="text-sm">MetaMask</span>
        </button>
      </div>
    </div>
  );
}
