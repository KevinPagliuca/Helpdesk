import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegClock, FaPen, FaSave, FaTimesCircle, FaCommentDots } from 'react-icons/fa';

import Header from '../../components/Header';
import ModalReply from '../../components/Modals/ReplyModal';

import './ticketinfo.css';
import api from '../../services/api';

import { convertDate, convertDateTime } from '../../utils';

const TicketInfo = () => {
    const [ticket, setTicket] = useState([]);
    const [replys, setReplys] = useState([]);
    const [agents, setAgents] = useState([]);

    const [tmpSubject, setTmpSubject] = useState('');
    const [tmpAssignTo, setTmpAssignTo] = useState('');
    const [tmpCategory, setTmpCategory] = useState('');
    const [tmpPriority, setTmpPriority] = useState('');
    const [tmpDuedate, setTmpDueDate] = useState('');
    const [tmpItEstimated, setTmpItEstimated] = useState('');
    const [tmpDescription, setTmpDescription] = useState('');
    const [tmpStatus, setTmpStatus] = useState('');

    const [userEdit, setUserEdit] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const { id } = useParams();

    const user_id = localStorage.getItem('user_id');
    const user_name = localStorage.getItem('user_name');
    const admin = sessionStorage.getItem('admin');

    const datePicker = new Date().toISOString().split("T")[0];

    useEffect(() => {
        async function loadTickets() {
            api.get(`ticket/${id}`)
                .then((res => {
                    setTicket(res.data[0]);
                    setReplys(res.data[1]);
                })).catch((err) => {
                    alert(err);
                });
        }
        loadTickets();
    }, [userEdit, id]);

    useEffect(() => {
        localStorage.setItem('tmpSubject', ticket.subject);
        localStorage.setItem('tmpAssignTo', ticket.assignTo);
        localStorage.setItem('tmpPriority', ticket.priority);
        localStorage.setItem('tmpCategory', ticket.category);
        localStorage.setItem('tmpDueDate', ticket.duedate);
        if (localStorage.getItem('tmpEstimated') === 'IT Only') {
            localStorage.setItem('tmpEstimated', '');
        } else {
            localStorage.setItem('tmpEstimated', ticket.estimated);
        }
        localStorage.setItem('tmpDescription', ticket.description);
        localStorage.setItem('tmpStatus', ticket.status);
    }, [ticket]);

    async function handleSaveChanges(e) {
        e.preventDefault();

        await api.put(`/ticketEdit/${id}`, {
            subject: tmpSubject,
            assignTo: tmpAssignTo,
            category: tmpCategory,
            priority: tmpPriority,
            duedate: tmpDuedate,
            description: tmpDescription,
            status: tmpStatus,
            estimated: tmpItEstimated
        }, {
            headers: {
                user_id,
                user_name,
                admin
            }
        }).then((res) => {
            alert('Alterado com sucesso!');
        }).catch((err) => {
            alert('algo deu errado, verifique e tente novamente!' + (err));
        });
        setUserEdit(false);
    }

    useEffect(() => {
        setTmpSubject(localStorage.getItem('tmpSubject'));
        setTmpAssignTo(localStorage.getItem('tmpAssignTo'));
        setTmpPriority(localStorage.getItem('tmpPriority'));
        setTmpCategory(localStorage.getItem('tmpCategory'));
        setTmpDueDate(localStorage.getItem('tmpDueDate'));
        setTmpItEstimated(localStorage.getItem('tmpEstimated'));
        setTmpDescription(localStorage.getItem('tmpDescription'));
        setTmpStatus(localStorage.getItem('tmpStatus'));

        api.get('agents')
            .then((res) => {
                setAgents(res.data);
            }).catch((err) => {
                alert(err);
            });

        if (userEdit === true) {
            document.getElementById("description").classList.add('active');
        } else {
            document.getElementById("description").classList.remove('active');
        }

    }, [userEdit]);

    function handleModalAppear(e) {
        e.preventDefault();
        if (isClicked === false) {
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
    }

    async function sendComment(send) {
        if (send === true) {
            await api.get(`ticket/${id}`)
                .then((res => {
                    setReplys(res.data[1]);
                })).catch((err) => {
                    alert(err);
                });

            setIsClicked(false);
        }

    }

    function handleCancel(e) {
        e.preventDefault();
        setUserEdit(false);
    }

    return (
        <div id="ticket-info">
            <ModalReply click={isClicked} enviar={sendComment} visibility={handleModalAppear} />
            <Header />
            <div className="container">
                <div className="content-ticket">
                    <div className="header-ticket">
                        {userEdit === false ?
                            <strong>{ticket.subject}</strong>
                            :
                            <>
                                <label htmlFor="subject">Assunto</label>
                                <input id="subject" type="text" value={tmpSubject} onChange={e => setTmpSubject(e.target.value)} />
                            </>
                        }
                        <div className="icons">
                            {Number(user_id) === ticket.user_id || admin === 'true' ?
                                <button className="btnEdit" onClick={() => setUserEdit(true)}><FaPen size={20} /></button>
                                :
                                null
                            }
                        </div>

                    </div>

                    <div className="informations">
                        <div className="assignTo">
                            <strong>Agente</strong>
                            {userEdit === false ?
                                <p>{ticket.assignTo}</p>
                                :
                                <select
                                    value={tmpAssignTo}
                                    onChange={e => setTmpAssignTo(e.target.value)}
                                >
                                    {agents.map(agent => (
                                        <option key={agent.id} value={agent.name}>{agent.name}</option>
                                    ))}
                                </select>
                            }
                        </div>
                        <div className="category">
                            <strong>Categoria</strong>
                            {userEdit === false ?
                                <p>{ticket.category}</p>
                                :

                                <select
                                    value={tmpCategory}
                                    onChange={e => setTmpCategory(e.target.value)}
                                >
                                    <option>E-mail</option>
                                    <option>SAP</option>
                                </select>
                            }
                        </div>
                        <div className="priority">
                            <strong>Prioridade</strong>
                            {userEdit === false ?
                                <p>{ticket.priority}</p>
                                :
                                <select
                                    value={tmpPriority}
                                    onChange={e => setTmpPriority(e.target.value)}
                                >
                                    <option>Baixa</option>
                                    <option>Média</option>
                                    <option>Alta</option>
                                    <option>Urgente</option>
                                </select>
                            }

                        </div>
                        <div className="dueDate">
                            <strong>Vencimento</strong>
                            {userEdit === false ?
                                <p>{convertDate(ticket.duedate)}</p>
                                :
                                <input
                                    type="date"
                                    value={tmpDuedate}
                                    onChange={e => setTmpDueDate(e.target.value)}
                                    min={datePicker} max="2030-12-31"
                                />
                            }
                        </div>
                        <div className="TIdueDate">
                            <strong>Prazo Estimado</strong>
                            {userEdit === true && admin === 'true' ?
                                <input
                                    type="date"
                                    value={tmpItEstimated}
                                    onChange={e => setTmpItEstimated(e.target.value)}
                                    min={datePicker} max="2030-12-31"
                                />
                                :
                                <p>
                                    {tmpItEstimated === '' || tmpItEstimated === undefined ? 'IT Only' : convertDate(ticket.estimated)}
                                </p>
                            }
                        </div>
                        <div className="status">
                            <strong>Status</strong>
                            {userEdit === false ?
                                <p>{ticket.status}</p>
                                :
                                <select
                                    value={tmpStatus}
                                    onChange={e => setTmpStatus(e.target.value)}
                                >
                                    <option>Novo</option>
                                    <option>Em aberto</option>
                                    <option>Em andamento...</option>
                                    <option>Aguardando Usuário...</option>
                                    <option>Concluído</option>
                                </select>
                            }

                        </div>
                    </div>

                    <div id="description" className="description">
                        <strong>Descrição</strong>
                        {userEdit === false ?
                            <textarea
                                readOnly
                                value={ticket.description}
                                className="read-only"
                            >
                                {ticket.description}
                            </textarea>
                            :
                            <textarea
                                value={tmpDescription}
                                onChange={e => setTmpDescription(e.target.value)}
                            >
                            </textarea>
                        }

                    </div>

                    <div className="actions">
                        {userEdit === true ?
                            <div className="btn-action between">
                                <button onClick={handleModalAppear}><FaCommentDots size={33} />Comentar</button>
                                <button onClick={handleSaveChanges} className="animated"><FaSave size={33} />Salvar</button>
                                <button onClick={handleCancel}><FaTimesCircle size={33} />Cancelar</button>
                            </div>
                            :
                            <div className="btn-action">
                                <button onClick={handleModalAppear}><FaCommentDots size={33} />Comentar</button>
                            </div>
                        }
                    </div>
                    {userEdit === true ?
                        null
                        :
                        <footer className="footer">
                            <label>Ultima Alteração feita por <p>{ticket.last_update}.</p> </label>
                            <label>Versão: <p>v{ticket.version}.0</p></label>
                        </footer>
                    }
                </div>
                {replys.map(reply => (
                    <div className="reply-container" key={reply.id} >
                        <div className="reply-content">
                            <div className="reply-header">
                                <strong>{reply.user_reply}</strong>
                                <p><FaRegClock /> {convertDateTime(reply.created_at)}</p>
                            </div>

                            <div className="text">
                                <p>{reply.text}</p>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    );
}

export default TicketInfo;