import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="logo">
            <h1>Online Web Services</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
