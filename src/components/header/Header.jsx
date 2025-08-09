import React from 'react';
import logo from '../../assets/logo.png';
import basket from "../../assets/basket.png";
import profile from "../../assets/profile.png";
import search_ico from "../../assets/search.png";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className='header1'>
          <div className='bl1'>
              <img src={logo} alt ="Логотип"/>
              <p><Link to="/about">О нас</Link></p>
              <p><Link to="/catalog">Каталог</Link></p>
              
          </div>
          <div className='bl2'>
              <div className='bl2-ico'>
                  <button>
                    <img src={search_ico} alt ="Логотип"/>
                  </button>
              </div>
              <div className='bl2-ico'>
              <button >
                <Link to="/cart">
                  <img src={basket} alt ="Логотип"/>
                </Link>
              </button>
              </div>
              
              <img src={profile} alt ="Логотип"/>
              
          </div>
      </div>
    </nav>
  )
}

export default Header