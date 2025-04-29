import { useNavigate } from 'react-router-dom';
import Logo from './assets/TGPLogo.png';
import './styles/Header.css'
function Header() {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div className="TopHeader">
        <img className="Logo" src={Logo} alt="Logo" />
        <button className="MenuItem" onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button className="MenuItem" onClick={() => navigate('/games')}>Games</button>
        <button className="MenuItem" onClick={() => navigate('/statistics')}>Statistics</button>
      </div>
      <div className="BottomHeader">
        <p className="C">&#169; 2025</p>
        <p className="C">v2.0</p>
      </div>
    </div>
  );
}

export default Header;