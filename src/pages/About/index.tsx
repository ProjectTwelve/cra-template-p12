import * as React from 'react';
import { Link } from 'react-router-dom';

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <div>
      <div>About P12</div>
      <div className="flex justify-center mt-4">
        <div className="px-4 py-2 ml-4 text-white bg-indigo-500 rounded hover:bg-indigo-600">
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
