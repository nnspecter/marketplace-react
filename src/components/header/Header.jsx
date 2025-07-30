import React from 'react';
import logo from '../../assets/logo.png';
import basket from "../../assets/basket.png";
import profile from "../../assets/profile.png";
import search_ico from "../../assets/search.png";
import './Header.css';

const Header = ({section, updateSection}) => {
  return (
    <div className='header1'>
        <div className='bl1'>
            <img src={logo} alt ="Логотип"/>
            <button onClick={()=>updateSection("О нас")}>О нас</button>
            <button onClick={()=>updateSection("Каталог")}>Каталог</button>
            <button onClick={()=>updateSection("Подарочные карты")}>Подарочные карты</button>
        </div>
        <div className='bl2'>
            <div className='bl2-ico'>
                <button>
                  <img src={search_ico} alt ="Логотип"/>
                </button>
            </div>
            <div className='bl2-ico'>
            <button onClick={()=>updateSection("Корзина")}>
              <img src={basket} alt ="Логотип"/>
            </button>
            </div>
            
            <img src={profile} alt ="Логотип"/>
            
        </div>
    </div>
  )
}

export default Header