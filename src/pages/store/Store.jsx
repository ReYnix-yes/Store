import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import Home from "../home/Home";
import "./store.css"
import "./item.css"
import "./basket.css"
import "./login.css"

// Icon

import HomeLogo from "../../components/img/home/logo-svg-mob.svg";
import userIcon from "../../components/img/store/icon/user.svg"
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
import { useEffect } from "react";
function Store() {
    const [storeData, setStoreData] = useState([
        {
            type: 'Чугунные ванны',
            items: [
                {
                    image: a1,
                    title: 'Каприз 120x70',
                    price: '25650',
                    id: 'castIronBathtub-1',
                },
                // Добавьте другие товары типа Чугунные ванны
            ],
        },
        {
            type: 'Акриловые ванны',
            items: [
                {
                    image: b1,
                    title: 'Ванна акриловая OVIVA Base 170х70',
                    price: '7570',
                    id: 'acrylicBathtub-1',
                },
                // Добавьте другие товары типа Акриловые ванны
            ],
        },
        {
            type: 'Санфаянс (раковины, унитазы)',
            items: [
                {
                    image: c1,
                    title: 'Умывальник с постаментом Ностальжи',
                    price: '3480',
                    id: 'sanitaryware-1',
                },
                // Добавьте другие товары типа Санфаянс
            ],
        },
        {
            type: 'Мебель для ванны',
            items: [
                {
                    image: d1,
                    title: 'Тумба-умывальник на ножках Myrtos 45',
                    price: '9281',
                    id: 'bathFurniture-1',
                },
            ],
        },
        {
            type: 'Чугунный поддон',
            items: [
                {
                    image: e1,
                    title: 'Поддон «Классик» 80x80',
                    price: '13800',
                    id: 'castIronPallet-1',
                },
            ],
        },
        {
            type: 'Полимерпесчаные изделия',
            items: [
                {
                    image: f1,
                    title: 'Тумба-умывальник на ножках Myrtos 45',
                    price: '1290',
                    id: 'polymer-1',
                },
            ],
        },
        {
            type: 'Сопутствующие товары',
            items: [
                {
                    image: g1,
                    title: 'Бачок «Уни»',
                    price: '1700',
                    id: 'relatedProduct-1',
                },
                {
                    image: g2,
                    title: 'Сифон АНИ для ванны с выпуском 1 1/2", с переливом, с гибкой трубой 40/50 E155',
                    price: '580',
                    id: 'relatedProduct-2',
                },
                {
                    image: g3,
                    title: 'Сифон АНИ для ванны с выпуском 1 1/2", с переливом, с гибкой трубой 40/50 E155',
                    price: '285',
                    id: 'relatedProduct-3',
                },
            ],
        },
        // Тут добавлять товары
    ]);

    const [userData, setUserData] = useState(
        [
            {
                adimn: true,
                access: {
                    login: "admin",
                    password: "admin",
                },
            },
            {
                admin: false,
                access: {
                    login: "Anestezia",
                    password: "1234",
                },
            },
        ],
    );






    const [basketView, setBasketView] = useState('none')
    const [basket, setBasket] = useState([]);
    const [currentType, setCurrentType] = useState('Чугунные ванны');
    const [currentStore, setCurrentStore] = useState([]);

    function updateCurrentStore(type) {
        setCurrentType(type || 'Чугунные ванны');
        const selectedStore = storeData.find((item) => item.type === type);
        setCurrentStore(selectedStore ? selectedStore.items : []);
    }

    const storeTypes = {
        CastIronBathtubs: 'Чугунные ванны',
        AcrylicBathtubs: 'Акриловые ванны',
        Sanitaryware: 'Санфаянс (раковины, унитазы)',
        BathFurnitureStore: 'Мебель для ванны',
        CastIronPallet: 'Чугунный поддон',
        Polymer: 'Полимерпесчаные изделия',
        RelatedProducts: 'Сопутствующие товары',
    };

    useEffect(() => {
        updateCurrentStore('Чугунные ванны');
    }, []);
    function handleStoreTypeClick(storeType) {
        updateCurrentStore(storeTypes[storeType]);
    }


    function notWork() {
        alert('Функция не поддерживается');
    }

    const [basketAmount, setBasketAmount] = useState(0);

    const addToBasket = (product) => {
        const newProduct = { ...product, id: uuidv4() };
        setBasket((prevBasket) => [...prevBasket, newProduct]);
        setBasketAmount((prevAmount) => prevAmount + 1);
    };

    const removeFromBasket = (id) => {
        const updatedBasket = basket.filter((item) => item.id !== id);
        setBasket(updatedBasket);
        setBasketAmount((prevAmount) => prevAmount - 1);
    };

    const calculateTotalPrice = () => {
        const totalPrice = basket.reduce((accumulator, item) => accumulator + parseInt(item.price), 0);
        return totalPrice;
    };

    const [adminAddVisible, setAdminAddVisible] = useState('none');
    const [newItemTitle, setNewItemTitle] = useState('');
    const [newItemPrice, setNewItemPrice] = useState('');
    function adminAdd() {
        if (currentType !== undefined && currentType !== null) {
            const newItem = {
                image: g1,
                title: newItemTitle,
                price: newItemPrice,
                id: uuidv4(),
            };

            const updatedStoreData = storeData.map((store) => {
                if (store.type === currentType) {
                    const updatedItems = [...store.items, newItem];
                    return { ...store, items: updatedItems };
                }
                return store;
            });

            setNewItemTitle('');
            setNewItemPrice('');

            setStoreData(updatedStoreData); // Update the store data with the new item

            const selectedStore = updatedStoreData.find((store) => store.type === currentType);
            setCurrentStore(selectedStore ? selectedStore.items : []);
        } else {
            alert('Ошибка! Товар невозможно добавить');
        }
    };

    const [signinVisible, setSigninVisible] = useState('none');
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})
    function signin() {
        let found = false;

        userData.forEach((user) => {
            if (user.access.login === login && user.access.password === password) {
                setUser({ name: user.access.login });
                setSigninVisible('none');
                if (user.adimn) {
                    setAdminEye('flex')
                }
                found = true;
                return; // Прерываем выполнение цикла
            }
        });

        if (!found) {
            console.log('НЕ НАШЛО');
        }
    }

    const [adminEye, setAdminEye] = useState('none')

    function adminRights() {

    }


    function deleteItem(itemId) {
        const updatedStoreData = storeData.map((store) => {
            const updatedItems = store.items.filter((item) => item.id !== itemId);
            return { ...store, items: updatedItems };
        });

        setStoreData(updatedStoreData);

        const selectedStore = updatedStoreData.find((store) => store.type === currentType);
        setCurrentStore(selectedStore ? selectedStore.items : []);
    }










    return (
        <>
            <div className="signin" style={{ display: signinVisible }}>
                <div className="signin__wrapper">
                    <span onClick={() => setSigninVisible('none')} className="signin__close">Закрыть</span>
                    <h1 className="signin__login__title">Логин:</h1>
                    <input
                        type="text"
                        className="signin__login__inp"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <h1 className="signin__password__title">Пароль</h1>
                    <input
                        type="password"
                        className="signin__password__inp"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={signin} className="signin__btn">Войти</button>
                </div>
            </div>
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
                        <h1>{user.name}</h1>
                        <button onClick={() => setSigninVisible('flex')} className="nav__btn">
                            <img src={userIcon} alt="" className="nav__icon" />
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
                    <button onClick={() => handleStoreTypeClick('CastIronBathtubs')} className="catalog__link">Чугунные ванны</button>
                    <button onClick={() => handleStoreTypeClick('AcrylicBathtubs')} className="catalog__link">Акриловаые ванны</button>
                    <button onClick={() => handleStoreTypeClick('Sanitaryware')} className="catalog__link">Санфаяс(раковины, унитазы)</button>
                    <button onClick={() => handleStoreTypeClick('BathFurnitureStore')} className="catalog__link">Мебель для ванны</button>
                    <button onClick={() => handleStoreTypeClick('CastIronPallet')} className="catalog__link">Чугунный поддон</button>
                    <button onClick={() => handleStoreTypeClick('Polymer')} className="catalog__link">Полимерпесчанные изделия</button>
                    <button onClick={() => handleStoreTypeClick('RelatedProducts')} className="catalog__link">Сопуствующие товары</button>
                </nav>
            </header>
            <main className="store__main">
                <h1 className="store__type">{currentStore.length > 0 && currentStore[0].type}</h1>

                <div className="catalog">
                    <div className="catalog__wrapper">
                        {currentStore.map((item) => (
                            <div key={item.id} className="store__item">
                                <button style={{display: adminEye}} className="item__delete" onClick={() => deleteItem(item.id)}>Удалить</button>

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

                        <div style={{display: adminEye}} id="admin">
                            <button onClick={() => setAdminAddVisible('flex')} className="admin__item">
                                <div className="plus"></div>
                                <h1 className="admin__add__title">Добавить новый товар</h1>
                            </button>
                            <div className="admin__add" style={{ display: adminAddVisible }}>
                                <div className="admin__add__wrapper">
                                    <button onClick={() => setAdminAddVisible('none')} className="admin__close">Close</button>
                                    <div className="admin__add__content">
                                        <p>Название товара:</p>
                                        <input
                                            type="text"
                                            value={newItemTitle}
                                            onChange={(e) => setNewItemTitle(e.target.value)}
                                            className="admin__inp"
                                        />
                                    </div>
                                    <div className="admin__add__content">
                                        <p>Цена товара:</p>
                                        <input
                                            type="number"
                                            value={newItemPrice}
                                            onChange={(e) => setNewItemPrice(e.target.value)}
                                            className="admin__inp"
                                        />
                                    </div>
                                    <div className="admin__add__content">
                                        <p className="admin__photo__title">Добавьте фото товара:</p>
                                        <input type="file" name="" id="" disabled className="photo__inp" />
                                    </div>
                                    <button className="admin__add__btn" onClick={adminAdd} >Добавить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Store;