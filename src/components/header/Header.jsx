import React from 'react';
import logo from '../../assets/logo.png';
import basket from "../../assets/basket.png";
import profile from "../../assets/profile.png";
import search_ico from "../../assets/search.png";
import './Header.css';

const Header = () => {
  return (
    <div className='header1'>
        <div className='bl1'>
            <img src={logo} alt ="Логотип"/>
            <p>О нас</p>
            <p>Каталог</p>
            <p>Подарочные карты</p>
        </div>
        <div className='bl2'>
            <div className='bl2-ico'>
                <p>Поиск</p>
                <img src={search_ico} alt ="Логотип"/>
            </div>
            <div className='bl2-ico'>
            <p>Корзина</p>
            <img src={basket} alt ="Логотип"/>
            </div>
            
            <img src={profile} style={{maxWidth: 40}} alt ="Логотип"/>
            
        </div>
    </div>
  )
}

export default Header