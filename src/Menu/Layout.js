import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
