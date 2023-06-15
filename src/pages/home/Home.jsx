import React from "react";
import { Link } from "react-router-dom";
import Store from "../store/Store";

// Style
import "./home.css"
// Img
import HomeLogo from "../../components/img/home/logo-svg-mob.svg";

// Photo for homepage

import one from "../../components/img/home/one.jpg";
import two from "../../components/img/home/two.jpg";
import three from "../../components/img/home/three.jpeg";
import four from "../../components/img/home/four.jpg";

// Contact

import contactIcon from "../../components/img/home/icon/contactIcon.png";

function Home() {
    return (
        <>
            <header className="head__menu_wrapper">
                <img className="nav__logo" src={HomeLogo} alt="" />
                <nav className="head__menu">
                    <ul className="nav__links">
                        <Link className="nav__link"><span className="link">о компании</span>
                            <span className="about__menu__wrapper">
                                <ul className="about__menu">
                                    <a href="https://zavoduniversal.ru/about/history/" className="menu__link link sub__link">История компании</a>
                                    <a href="https://zavoduniversal.ru/about/contacts/" className="menu__link link sub__link">Контакты</a>
                                </ul>
                            </span>
                        </Link>
                        <Link to="Store" className="nav__link"><span className="link">каталог продукции</span>
                            <span className="about__menu__wrapper">
                                <ul className="about__menu">
                                    <Link to="Store" className="menu__link link sub__link">Чугунные ванны</Link>
                                    <Link to="Store" className="menu__link link sub__link">Конвекторы</Link>
                                    <Link to="Store" className="menu__link link sub__link">Санфаяс (раковины, унитазы)</Link>
                                    <Link to="Store" className="menu__link link sub__link">трубы чугунные и фасонные части к ним</Link>
                                    <Link to="Store" className="menu__link link sub__link">чугунные люки</Link>
                                    <Link to="Store" className="menu__link link sub__link">Прочая эмалированная чугунная продукция</Link>
                                    <Link to="Store" className="menu__link link sub__link">Полимерпесчаные изделия</Link>
                                    <Link to="Store" className="menu__link link sub__link">Горно-шахтное оборудование</Link>
                                </ul>
                            </span>
                        </Link>
                        <Link className="nav__link" to="Store">интернет-магазин</Link>

                        <a href="https://zavoduniversal.ru/about/contacts/" className="nav__link">контакты</a>
                    </ul>
                </nav>
            </header>

            <main className="main__home">
                <div className="home__item item__one">
                    <div className="home__content__wrapper">

                        <ul className="item__list">
                            <h1 className="item__title">О компании</h1>
                            <a href="https://zavoduniversal.ru/about/partnership/" className="item__link">Сотрудничество</a>
                            <a href="https://zavoduniversal.ru/about/job/" className="item__link">Карьера у нас</a>
                            <a href="https://zavoduniversal.ru/about/contacts/" className="item__link">Контакты</a>
                        </ul>
                    </div>
                    <img src={one} alt="" className="home__item__photo one__photo" />
                </div>
                <div className="home__item item__two">
                    <div className="home__content__wrapper">

                        <ul className="item__list">
                            <h1 className="item__title">Наш блог</h1>
                            <a href="https://www.youtube.com/channel/UCYj8sSazlt50M7QC2HYEEnw" className="item__link">Наш YouTube канал</a>
                        </ul>
                    </div>
                    <img src={two} alt="" className="home__item__photo two__photo" />
                </div>
                <div className="home__item item__three">
                    <div className="home__content__wrapper">

                        <ul className="item__list">
                            <h1 className="item__title">Контакты</h1>
                            <a href="https://zavoduniversal.ru/about/history/" className="item__link">История компании</a>
                            <a href="https://zavoduniversal.ru/about/partnership/" className="item__link">Сотрудничество</a>
                            <a href="https://zavoduniversal.ru/about/job/" className="item__link">Карьера у нас</a>
                            <a href="https://zavoduniversal.ru/about/contacts/" className="item__link">Контакты</a>
                        </ul>
                    </div>
                    <div className="home__contacts">
                        <ul className="contact__list">
                            <ul className="contact__wrapper">
                                <img src={contactIcon} alt="" className="cotact__icon" />
                                <ul className="contact__link__wrapper">
                                    <a href="tel:+79515979718" className="contacts contacts__tel">+7 (3843) 34-30-29</a>
                                    <li className="contacts">house.com119@gmail.com</li>
                                    <li className="contacts">Пн-Чт: 8:00-17:00</li>
                                </ul>
                            </ul>
                            <ul className="contact__link__wrapper sub__contact">
                                <li className="contacts">Пт:8:00-15:30</li>
                                <li className="contacts">Сб, Вс: выходной</li>
                                <a href="https://zavoduniversal.ru/about/contacts/"><button className="cotact__btn">Контакты</button></a>
                            </ul>
                        </ul>
                    </div>
                    <img src={four} alt="" className="home__item__photo three__photo" />
                </div>
                <div className="home__item item__four">
                    <div className="home__content__wrapper">
                        <ul className="item__list">
                            <h1 className="item__title">Каталог продукции</h1>
                            <Link to="Store" className="item__link">Чугунные ванны</Link>
                            <Link to="Store" className="item__link">Конвекторы</Link>
                            <Link to="Store" className="item__link">Санфаяс (раковины, унитазы)</Link>
                            <Link to="Store" className="item__link">Трубы чугунные и фасонные части к ним</Link>
                            <Link to="Store" className="item__link">Прочая эмалированная чугунная продукции</Link>
                            <Link to="Store" className="item__link">Полимерпесчаные изделия</Link>
                        </ul>
                    </div>
                    <img src={three} alt="" className="home__item__photo four__photo" />
                </div>

            </main >
        </>
    );
}

export default Home;