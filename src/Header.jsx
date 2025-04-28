import { Link } from 'react-router-dom';
import Logo from './assets/TGPLogo.png';

function Header() {
  return (
    <div className="Header">
      <div className="TopHeader">
        <img className="Logo" src={Logo} alt="Logo" />
        <Link to="/dashboard" className="MenuItem">Dashboard</Link>
        <Link to="/games" className="MenuItem">Games</Link>
        <Link to="/statistics" className="MenuItem">Statistics</Link>
      </div>
      <div className="BottomHeader">
        <p className="C">&#169; 2025</p>
        <p className="C">v2.0</p>
      </div>
    </div>
  );
}

export default Header;