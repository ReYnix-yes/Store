import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import Home from "../home/Home";
import "./store.css"
import "./item.css"
import "./basket.css"

// Icon

import HomeLogo from "../../components/img/home/logo-svg-mob.svg";
import user from "../../components/img/store/icon/user.svg"
import cart from "../../components/img/store/icon/cart.svg"


// image for store
import a1 from "../../components/img/store/image/CastIronBathtubs/a1.jpg";

import b1 from "../../components/img/store/image/acrylicBathtubs/b1.png";

import c1 from "../../components/img/store/image/sanitaryware/c1.jpg";

import d1 from "../../components/img/store/image/bathroom_furniture/a.jpg";

import e1 from "../../components/img/store/image/castIronPallet/e0svbxsd3sbcw4q_50c3cc1.jpg";

import f1 from "../../components/img/store/image/polymer/0dqb7a2pxq6c0ia_82cd7f79.jpg"

import g1 from "../../components/img/store/image/relatedProducts/n356loc8f5clqdi_864eaa10.jpg";
import g2 from "../../components/img/store/image/relatedProducts/tojl83pdx0dsppw_a0b303cd.jpg";
import g3 from "../../components/img/store/image/relatedProducts/topvd27hl465nwr_e79b32e2.jpg";




function Store() {
    const [basketView, setBasketView] = useState('none')
    const storeType = ['Чугунные ванны', 'Акриловые ванны', 'Санфаянс (раковины, унитазы)', 'Мебель для ванны', 'Чугунный поддон', 'Полимерпесчаные изделия', 'Сопутствующие товары']
    const castIronBathtubs = [
        {
            image: a1,
            title: 'Каприз 120x70',
            type: '',
            price: '25650',
            id: 'castIronBathtub-1',
        },
    ];

    const acrylicBathtubs = [
        {
            image: b1,
            title: 'Ванна акриловая OVIVA Base 170х70',
            type: '',
            price: '7570',
            id: 'acrylicBathtub-1',
        },
    ];

    const sanitaryware = [
        {
            image: c1,
            title: 'Умывальник с постаментом Ностальжи',
            type: '',
            price: '3480',
            id: 'sanitaryware-1',
        },
    ];

    const bathFurnitureStore = [
        {
            image: d1,
            title: 'Тумба-умывальник на ножках Myrtos 45',
            type: '',
            price: '9281',
            id: 'bathFurniture-1',
        },
    ];

    const castIronPallet = [
        {
            image: e1,
            title: 'Поддон «Классик» 80x80',
            type: '',
            price: '13800',
            id: 'castIronPallet-1',
        },
    ];

    const polymer = [
        {
            image: f1,
            title: 'Тумба-умывальник на ножках Myrtos 45',
            type: '',
            price: '1290',
            id: 'polymer-1',
        },
    ];

    const relatedProducts = [
        {
            image: g1,
            title: 'Бачок «Уни»',
            type: '',
            price: '1700',
            id: 'relatedProduct-1',
        },
        {
            image: g2,
            title: 'Сифон АНИ для ванны с выпуском 1 1/2", с переливом, с гибкой трубой 40/50 E155',
            type: '',
            price: '580',
            id: 'relatedProduct-2',
        },
        {
            image: g3,
            title: 'Сифон АНИ для ванны с выпуском 1 1/2", с переливом, с гибкой трубой 40/50 E155',
            type: '',
            price: '285',
            id: 'relatedProduct-3',
        },
    ];

    const [basket, setBasket] = useState([]);




    const [currentType, setCurrentType] = useState(3)
    const [currentStore, setCurrentStore] = useState(bathFurnitureStore)


    function CastIronBathtubs() {
        setCurrentType(0)
        setCurrentStore(castIronBathtubs)
    }

    function AcrylicBathtubs() {
        setCurrentType(1)
        setCurrentStore(acrylicBathtubs)

    }

    function Sanitaryware() {
        setCurrentType(2)
        setCurrentStore(sanitaryware)

    }

    function BathFurnitureStore() {
        setCurrentType(3)
        setCurrentStore(bathFurnitureStore)

    }

    function CastIronPallet() {
        setCurrentType(4)
        setCurrentStore(castIronPallet)

    }

    function Polymer() {
        setCurrentType(5)
        setCurrentStore(polymer)

    }

    function RelatedProducts() {
        setCurrentType(6)
        setCurrentStore(relatedProducts)

    }

    function notWork() {
        alert('Функция не поддерживается');
    }
    const [basketAmount, setBasketAmount] = useState(0)
    const addToBasket = (product) => {
        const newProduct = { ...product, id: uuidv4() };
        setBasket([...basket, newProduct]);
        setBasketAmount(prev => prev + 1);
    };
    const removeFromBasket = (id) => {
        const updatedBasket = basket.filter((item) => item.id !== id);
        setBasket(updatedBasket);
        setBasketAmount(prev => prev - 1);
    };
    const calculateTotalPrice = () => {
        const totalPrice = basket.reduce((accumulator, item) => accumulator + parseInt(item.price), 0);
        return totalPrice;
    };

    const [adminAddVisible, setAdminAddVisible] = useState('none')

    function adminAdd() {
        switch (currentType) {
            case 0:
                castIronBathtubs.push(...castIronBathtubs, {title: "lox", price: '12332', id: 4, })
                console.log(castIronBathtubs)
                break;

            default:
                break;
        }
    }



    return (
        <>
            <span className="basket" style={{ display: basketView }}>
                <div className="basket__wrapper">
                    <div className="basket__container">
                        <h1 className="basket__title">Корзина</h1>
                        <button onClick={() => { setBasketView('none') }} className="basket__btn__close">Закрыть</button>
                        <div className="basket__catalog">
                            {basket.map((item) => (
                                <div className="basket__item" key={item.id}>
                                    <div className="basket__image__wrapper">
                                        <img className="basket__image" src={item.image} alt="" />
                                    </div>
                                    <div className="basket__item__content">
                                        <p className="basket__item__title">{item.title}</p>
                                        <p className="basket__item__price">{item.price}р.</p>
                                    </div>
                                    <button className="basket__btn__delete" onClick={() => removeFromBasket(item.id)}>
                                        ✖
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="basket__buy">
                            <div className="total__price">
                                Общая стоимость: {calculateTotalPrice()}р.
                            </div>
                            <button onClick={notWork} className="basket__btn">
                                купить
                            </button>
                        </div>
                    </div>
                </div>
            </span>
            <header>
                <nav className="nav">
                    <Link to="/">
                        <img src={HomeLogo} alt="" className="home__icon" />
                    </Link>
                    <ul className="nav__icon__wrapper">
                        <button className="nav__btn">
                            <img src={user} alt="" className="nav__icon" />
                        </button>
                        <button onClick={() => { setBasketView('flex') }} className="nav__btn">
                            <img src={cart} alt="" className="nav__icon" />
                            <span className={`basket__amount ${basketAmount > 0 ? 'amount__active' : ''}`}>
                                {basketAmount}
                            </span>
                        </button>
                    </ul>
                </nav>
                <nav className="catalog__links">
                    <button onClick={CastIronBathtubs} className="catalog__link">Чугунные ванны</button>
                    <button onClick={AcrylicBathtubs} className="catalog__link">Акриловаые ванны</button>
                    <button onClick={Sanitaryware} className="catalog__link">Санфаяс(раковины, унитазы)</button>
                    <button onClick={BathFurnitureStore} className="catalog__link">Мебель для ванны</button>
                    <button onClick={CastIronPallet} className="catalog__link">Чугунный поддон</button>
                    <button onClick={Polymer} className="catalog__link">Полимерпесчанные изделия</button>
                    <button onClick={RelatedProducts} className="catalog__link">Сопуствующие товары</button>
                </nav>
            </header>
            <main className="store__main">
                <h1 className="store__type">{storeType[currentType]}</h1>
                <div className="catalog">
                    <div className="catalog__wrapper">
                        {currentStore.map((item) => (
                            <div key={item.id} className="store__item">
                                <div className="store__image__wrapper">
                                    <img src={item.image} alt="" className="store__image" />
                                </div>
                                <div className="item__wrapper">
                                    <p className="store__item__title">{item.title}</p>
                                    <div className="store__buy__wrapper">
                                        <div className="store__buy">
                                            <p className="store__price">{item.price}р.</p>
                                            <button className="store__btn" onClick={() => addToBasket(item)}>В корзину</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button onClick={() => setAdminAddVisible('flex')} className="admin__item">
                            <div className="plus"></div>
                            <h1 className="admin__add__title">Добавить новый товар</h1>
                        </button>
                        <div className="admin__add" style={{display:adminAddVisible}}>
                            <div className="admin__add__wrapper">
                                <button onClick={() => setAdminAddVisible('none')} className="admin__close">Close</button>
                                <div className="admin__add__content">
                                    <p>Название товара:</p>
                                    <input type="text" name="" id="" className="admin__inp" />
                                </div>
                                <div className="admin__add__content">
                                    <p>Цена товара:</p>
                                    <input type="num" name="" id="" className="admin__inp" />
                                </div>
                                <div className="admin__add__content">
                                    <p className="admin__photo__title">Добавьте фото товара:</p>
                                    <input type="file" name="" id="" disabled className="photo__inp" />
                                </div>
                                <button className="admin__add__btn"  onClick={adminAdd} >Добавить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Store;