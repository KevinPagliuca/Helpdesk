import React, { useState } from 'react';

import Header from '../../components/Header';

import './styles.css';

const MyTickets = () => {
    const [tickets, setTickets] = useState([
        {
            id: 1,
            subject: 'Testar e-mail configuração Exchange',
            duedate: '13/10/2020',
            status: 'Em andamento...'
        },
        {
            id: 2,
            subject: 'Testar e-mail configuração Exchange',
            duedate: '13/10/2020',
            status: 'Em andamento...'
        },
        {
            id: 3,
            subject: 'Testar e-mail configuração Exchange',
            duedate: '13/10/2020',
            status: 'Em andamento...'
        },
        {
            id: 4,
            subject: 'Testar e-mail configuração Exchange',
            duedate: '13/10/2020',
            status: 'Em andamento...'
        },
        {
            id: 5,
            subject: 'Testar e-mail configuração Exchange',
            duedate: '13/10/2020',
            status: 'Em andamento...'
        },

    ])
    return (
        <div id="mytickets">
            <Header />

            <div className="container">
                <div className="titleTxt">
                    <p>Olá, <strong>Kevin Pagiuca!</strong></p>
                    <h3>Aqui estão todos os seus chamados abertos no momento.</h3>
                </div>

                <table className="table-fill">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Assunto</th>
                            <th>Data de vencimento</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tickets.map(ticket => {
                            return (
                                <tr key={ticket.id}>
                                    <td>{ticket.id}</td>
                                    <td>{ticket.subject}</td>
                                    <td>{ticket.duedate}</td>
                                    <td>{ticket.status}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyTickets;