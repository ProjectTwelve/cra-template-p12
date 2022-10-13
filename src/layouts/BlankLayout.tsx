import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface IBlankLayoutProps {}

const BlankLayout: React.FunctionComponent<IBlankLayoutProps> = (props) => {
  return (
    <div>
      <main className="container-min-height">
        <Outlet />
      </main>
    </div>
  );
};

export default BlankLayout;
