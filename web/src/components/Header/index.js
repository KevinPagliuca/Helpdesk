import React from 'react';
import { Link } from 'react-router-dom';
import { FaSortDown, FaPlus, FaClipboardList, FaClipboard, FaClipboardCheck } from 'react-icons/fa';

import './styles.css';

const Header = ({ optionAcitaved }) => {

    return (
        <header id="header-container">

            <div className="header-logo">
                <img src="https://www.kissnewyork.com.br/wp-content/uploads/2018/05/logo__.png" alt="logo-img" />
            </div>


            <nav className="nav-container">
                <ul>
                    <li> {optionAcitaved === 0 ?
                        <Link className="active" to="/home">Home</Link>
                        :
                        <Link to="/home">Home</Link>
                    }
                    </li>

                    <div className="dropdown">
                        <p>Chamados <FaSortDown /></p>
                        <div className="dropdown-content">
                            <Link className="button" to="/newticket"><FaPlus />Abrir chamado</Link>
                            <Link className="button" to="/mytickets"><FaClipboard />Meus chamados </Link>
                            <Link className="button" to="/alltickets"><FaClipboardList />Todos os chamados</Link>
                            <Link className="button" to="/closedtickets"><FaClipboardCheck />Chamados concluídos</Link>
                        </div>
                    </div>

                    <li>
                        {optionAcitaved === 2 ?
                            <Link to="/questions" className="active">Dúvidas</Link>
                            :
                            <Link to="/questions">Dúvidas</Link>
                        }
                    </li>

                    <li>{optionAcitaved === 3 ?
                        <Link to="/suggestions" className="active">Sugestões</Link>
                        :
                        <Link to="/suggestions">Sugestões</Link>
                    }

                    </li>

                    <li>
                        {optionAcitaved === 4 ?
                            <Link to="/contact" className="active">Contate-nos</Link>
                            :
                            <Link to="/contact">Contate-nos</Link>
                        }
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;