import React from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from "../components/img/home/logo-svg-mob.svg";
import "../pages/home/home.css";

function Navbar() {
  return (
    <header className="head__menu_wrapper">
      <Link to="/"><img className="nav__logo" src={HomeLogo} alt="" /></Link>
      <nav className="head__menu">
        <ul className="nav__links">
          <li className="nav__link">
            <span className="link">о компании</span>
            <span className="about__menu__wrapper">
              <ul className="about__menu">
                <li>
                  <Link to="About" className="menu__link link sub__link">История компании</Link>
                </li>
                <li>
                  <a href="https://zavoduniversal.ru/about/contacts/" className="menu__link link sub__link">Контакты</a>
                </li>
              </ul>
            </span>
          </li>
          <li className="nav__link">
            <span className="link">каталог продукции</span>
            <span className="about__menu__wrapper">
              <ul className="about__menu">
                <li>
                  <Link to="/Store" className="menu__link link sub__link">Чугунные ванны</Link>
                </li>
                <li>
                  <Link to="/Store" className="menu__link link sub__link">Акриловые ванны</Link>
                </li>
                <li>
                  <Link to="/Store" className="menu__link link sub__link">Санфаяс (раковины, унитазы)</Link>
                </li>
                <li>
                  <Link to="/Store" className="menu__link link sub__link">Мебель для ванны</Link>
                </li>
                <li>
                  <Link to="/Store" className="menu__link link sub__link">чугунные люки</Link>
                </li>
                <li>
                  <Link to="/Store" className="menu__link link sub__link">Полимерпесчаные изделия</Link>
                </li>
                <li>
                  <Link to="/Store" className="menu__link link sub__link">Сопутствующие товары</Link>
                </li>
                <li>
                  <Link to="/Store" className="menu__link link sub__link">Горно-шахтное оборудование</Link>
                </li>
              </ul>
            </span>
          </li>
          <li className="nav__link">
            <Link className='link' to="/Store">интернет-магазин</Link>
          </li>
          <li className="nav__link">
            <Link className='link' to="/Career">контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
