import * as React from 'react';
import { Link } from 'react-router-dom';
import Web3Status from '../../components/web3/Web3Status';
import P12Logo from '../../assets/img/p12_logo.png';
import { userCount } from '../../store/user/state';
import { useRecoilState } from 'recoil';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [count, setCount] = useRecoilState(userCount);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-red-300">
      <img src={P12Logo} alt="" />

      <Web3Status />
      <div
        onClick={() => setCount(count + 1)}
        className="min-w-[170px] cursor-pointer rounded bg-indigo-500 px-4 py-2 text-center text-white hover:bg-indigo-600"
      >
        count:{count}
      </div>
      <div className="mt-6 min-w-[170px] rounded bg-indigo-500 px-4 py-2 text-center text-white hover:bg-indigo-600">
        <Link to="about">About</Link>
      </div>
    </div>
  );
};

export default Home;
