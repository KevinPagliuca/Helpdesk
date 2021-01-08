import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import Header from '../../components/Header';

import './admin.css';

const Admin = () => {

    const Admin = sessionStorage.getItem('admin');

    if (Admin) {

        return (
            <div id="admin">
                <Header />

                <div className="container">
                    <main className="configuration">

                        <div className="menu-content">
                            <p>Chamados</p>

                            <div className="menu">
                                <Link to="assignToMe">Chamados assinados para mim</Link>
                                <Link to="ticketsInProgress" >Chamados em Andamento</Link>
                                <Link to="graphics" >Estatísticas</Link>
                            </div>

                        </div>

                        <div className="menu-content">
                            <p>Controle de usuários</p>

                            <div className="menu">
                                <Link to="admin/createAccount">Criar nova conta Padrão</Link>
                                <Link to="admin/createAdministrator" >Criar nova conta Administradora</Link>
                                <Link to="/usersManagement" >Usuários</Link>
                            </div>

                        </div>

                        <div className="menu-content">
                            <p>Relatórios do sistema</p>

                            <div className="menu">
                                <Link className="disabled-link" to="/reports">Chamados atendidos neste mês</Link>
                                <Link className="disabled-link" to="/reports">Total de chamados neste mês</Link>
                                <Link className="disabled-link" to="/reports">Tendências</Link>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        );
    } else {
        return (
            <Redirect to="/myaccount" />
        );
    }
}

export default Admin;