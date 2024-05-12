import './header.css';
import { FaSearch } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import logoImage from './images/logo.jpeg';
function Header() {
  return (
    <div className="profile">
        <div className='fixed'>
    <div className='header'>
        <div className='logo'>
            <ul>
                <li><img  src={logoImage} alt="" width={30} height={30}/></li>
  <li><h2>Project Manager</h2></li>
    
        </ul>
        </div>
        <div>
        <div className="search-box">
        <FaSearch size={20}/>
        <input type="text" placeholder="Search.." name="search"></input>
       
        </div>
        </div>
        <div className='action'>
<ul>
    <li> <FaSun size={25} /></li>
       <li>  <FaBell size={25}/></li>
       <li> <IoPerson size={25}/></li>
      
       
        </ul>
        </div>
        
        
        
    </div>
    </div>
   
    </div>
  );
}

export default Header;