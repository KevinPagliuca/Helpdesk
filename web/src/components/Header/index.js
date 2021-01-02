import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './header.css';

const Header = () => {
    const history = useHistory();
    const admin = sessionStorage.getItem('admin');
    const image_url = sessionStorage.getItem('image_url');

    async function handleLogout() {
        localStorage.clear();
        sessionStorage.clear();
        history.push('/');
    }

    return (
        <header id="header">
            <nav className="navbar">
                <Link className="logo" to={admin ? "/admin" : "/myaccount"}>
                    <img src={logo} alt="logoimg" />
                </Link>

                <div className="nav-container">
                    <ul>
                        <li className="disabled-link"><Link to="#">Dashboard</Link></li>
                        <li><Link to="/newticket">Novo chamado</Link></li>
                        <li><Link to="/mytickets">Meus chamados</Link></li>
                        <li><Link to="/alltickets">Todos os chamados</Link></li>
                        <li><Link to="/closedTickets">Chamados Concluídos</Link></li>
                    </ul>

                    <div className="dropdown">
                        <img src={image_url} alt="userImg" />
                        <div id="myDropdown" className="dropdown-content">
                            {!admin ?
                                null
                                :
                                <Link to="/admin">Administração</Link>
                            }
                            <Link to="/myaccount">Minha conta</Link>
                            <Link to="#suggest" className="disabled-link">Sugestões</Link>
                            <Link to="#faq" className="disabled-link">Ajuda</Link>
                            <Link to="/" onClick={handleLogout}>Sair</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;