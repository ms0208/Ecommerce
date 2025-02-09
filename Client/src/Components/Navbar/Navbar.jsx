import React, { useState , useContext, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
import {ShopContext} from '../../Context/Storecontext.jsx';
import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png';
const Navbar = () => {
   const [menu, setMenu] = useState("shop");
   const {getTotalCartitems} = useContext(ShopContext);
   const menuRef = useRef();
   const navigate = useNavigate();

   const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
   }
      return (

      <div className='Navbar'>
         <div className="nav-logo"onClick={() => { navigate('/'); setMenu("shop"); }}>
            <img src={logo} alt='' />
            <p>SHOPPER</p>
         </div>
         <img  onClick={dropdown_toggle} src={nav_dropdown} alt='' className='dropdown'/> 
         <ul  ref={menuRef} className="nav-menu">
            <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none" }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: "none" }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: "none" }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: "none" }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
         </ul>
         <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartitems()}</div>
         </div>
      </div>
   )
}

export default Navbar;
