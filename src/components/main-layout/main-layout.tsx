import React, {useState} from 'react'
//Импортируем в основной шабоон приложения меню
import {Menu} from '../menu/'
//Импортируем механизмы роутер дома
//Outlet - 
import {Outlet} from 'react-router-dom'

export function MainLayout(){

    const [menu, setMenu] = useState({
        links: [
        {
                text: 'Главная',
                link: '/'
        }, 
        {
            text: 'Товары',
            link: '/goods'
        },
        {
            text: 'Пользователи',
            link: '/users'
        },
        {
            text: 'Отзывы',
            link: '/reviews'
        },   
                 ],
        buttons: [
            {
                icons: 'https://img.icons8.com/3d-fluency/512/shopping-cart-loaded.png',
                text: 'Корзина',
                link: '/basket'
            },
                  ]
    })

    return(
        <div>
            <header>
                <Menu menu={menu}/>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}