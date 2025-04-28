import './styles/Header.css'
import HambugerMenu from './assets/Icons/hamburger-menu.svg'
import Logo from './assets/TGPLogo.png'
 function Header() {
  return(
  <div className="Header">
    <div className="TopHeader">
    <img className='Logo' src={Logo}></img>
    
    <a href='/Gamblingv2.0/games.html'><button className='MenuItem'>Dashboard</button></a>
    <a href='/Gamblingv2.0/games.html'><button className='MenuItem'>Games</button></a>
    <a href='/Gamblingv2.0/games.html'><button className='MenuItem'>Statistics</button></a>
    
    </div>
    <div className="BottomHeader">
      <p className='C'>&#169; 2025</p>
      <p className='C'>v2.0</p>
    </div>
  </div>);
 }
export default Header