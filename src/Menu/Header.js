import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="logo">
            <img style={{width: "300px"}} src="https://res.cloudinary.com/dqehq7lmd/image/upload/v1720466488/cleanlogo_hmtkrb.png"/>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
