import * as React from 'react';
import { Link } from 'react-router-dom';

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div>
      <h1 className="mt-12 text-center text-4xl">About P12</h1>
      <div className="mt-4 flex justify-center">
        <div className="ml-4 rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600">
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
