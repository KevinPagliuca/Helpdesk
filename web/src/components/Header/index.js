import React from 'react';
import { FaSortDown, FaPlus, FaClipboardList, FaClipboard, FaClipboardCheck } from 'react-icons/fa';

import './styles.css';

const Header = () => {

    return (
        <header id="header-container">

            <div className="header-logo">
                <img src="https://www.kissnewyork.com.br/wp-content/uploads/2018/05/logo__.png" alt="logo-img" />
            </div>


            <nav className="nav-container">
                <ul>
                    <li> <a href="#">Home</a></li>

                    <div className="dropdown">
                        <span>Chamados <FaSortDown /></span>
                        <div className="dropdown-content">
                            <a href="#"><FaPlus />Abrir chamado</a>
                            <a href="#"><FaClipboard />Meus chamados </a>
                            <a href="#"><FaClipboardList />Todos os chamados</a>
                            <a href="#"><FaClipboardCheck />Chamados concluídos</a>
                        </div>
                    </div>

                    <li> <a href="#">Dúvidas</a></li>
                    <li> <a href="#">Sugestões</a></li>
                    <li> <a id="teste" href="#">Contato</a></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;