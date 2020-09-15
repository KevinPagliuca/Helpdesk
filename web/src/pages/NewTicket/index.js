import React from 'react';

import Header from '../../components/Header';

import './styles.css';
const NewTicket = () => {

    function handleAutoSizeTextarea(e) {
        var height = e.target.scrollHeight;
        e.target.style.height = 'auto';
        e.target.style.height = `${height}px`;
    }

    return (
        <div id="newticket">
            <Header />
            <div className="container">
                <div className="titletxt">
                    <h1>IMBECOR - Helpdesk System</h1>
                    <p>
                        Preencha o formulário abaixo corretamente e descreva detalhadamente <br />
                        O problema, para que nossos agentes consigam obter <br />
                        uma visão geral para tomar a melhor decisão.
                    </p>
                </div>

                <form className="form-control">

                    <div className="form-group">
                        <label htmlFor="subject">Assunto</label>
                        <input id="subject" type="text" />
                    </div>

                    <div className="form-group">
                        <div className="container-group">
                            <div className="content">
                                <label htmlFor="duedate">Data de vencimento</label>
                                <input id="duedate" type="date" />
                            </div>

                            <div className="content">
                                <label htmlFor="assignto">Agente</label>
                                <select id="assignto">
                                    <option>Kevin Pagliuca</option>
                                    <option>Kevin Pagliuca</option>
                                    <option>Kevin Pagliuca</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="container-group">
                            <div className="content">
                                <label htmlFor="priority">Prioridade</label>
                                <select id="priority">
                                    <option>Baixa</option>
                                    <option>Média</option>
                                    <option>Alta</option>
                                    <option>Urgente</option>
                                </select>
                            </div>

                            <div className="content">
                                <label htmlFor="status">Status</label>
                                <select id="status">
                                    <option>Novo</option>
                                    <option>Em andamento</option>
                                    <option>Aguardando...</option>
                                    <option>Concluído</option>
                                </select>
                            </div>

                            <div className="content">
                                <label htmlFor="category">Categoria</label>
                                <select id="category">
                                    <option>E-mail</option>
                                    <option>SAP</option>
                                    <option>Geral</option>
                                    <option>Rede</option>
                                    <option>Office</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Descrição</label>
                        <textarea
                            id="description"
                            onKeyDown={handleAutoSizeTextarea}
                            placeholder="Faça uma descrição detalhada"
                        >
                        </textarea>


                    </div>

                    <div className="form-group">
                        <button type="submit" className="btnSend button">Enviar</button>
                    </div>
                </form>

            </div>

        </div>
    );
}
export default NewTicket;