import React from 'react';

import logoImg from '../../assets/Logo.png';
import userImg from '../../assets/User.png';

import './styles.css';

const Header = (props) => {

    return (
        <header id="header-container">
            <div className="header-logo">
                <img src={logoImg} alt="logo" />
            </div>

            <div className="header-nav">
                <ul>
                    <li className="active"><a>Home</a></li>
                    <li><a>Chamados</a></li>
                    <li><a>Ajuda</a></li>
                    <li><a>Contato</a></li>
                </ul>
            </div>

            <div className="header-content">
                <div className="infoUser">
                    <strong>Kevin Pagliuca</strong>
                    <p>kevin.pagliuca@imbecor.com</p>
                    <p>Estagiário de TI</p>
                </div>

                <div className="imgUser">
                    <img src={userImg} alt="imgUser" />
                </div>
            </div>
        </header>
    );
}

export default Header;