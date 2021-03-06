import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import TextareaBlock from '../../TextareaBlock';

import './replymodal.css';

import api from '../../../services/api';

const ModalReply = (props) => {
    const [text, setText] = useState('');
    const { id } = useParams();

    const user_name = localStorage.getItem('user_name');
    const user_id_reply = localStorage.getItem('user_id');

    async function handleSendComment(e) {
        e.preventDefault();
        await api.post(`/ticket/${id}`, {
            text
        }, {
            headers: {
                user_name,
                user_id_reply
            }
        }).then((res) => {
            alert('Comentário enviado!!');
        }).catch((err) => {
            alert('erro ' + err);
        });
        props.enviar(true);
        setText('');
    }

    return (
        <>
            <div id="backdrop" style={props.click === true ? { display: "block" } : null} onClick={props.visibility} />

            <div id="my-modal" className={props.click === true ? "modal-container translate" : "modal-container translate-out"}>
                <div className="modal-content">
                    <form onSubmit={handleSendComment}>
                        <section>
                            <TextareaBlock
                                label="Deixe seu comentário abaixo"
                                id="reply-text"
                                placeholder="Insira seu texto aqui"

                                onChange={e => setText(e.target.value)}
                                value={text}
                            />
                            <div className="button-container">
                                {text !== "" && text !== "  " && text.length > 2 ?
                                    <button type="submit">Enviar</button>
                                    :
                                    <>
                                        <button disabled type="submit">Enviar</button>                                        
                                        <p>Comentário muito curto!</p>
                                    </>
                                }
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ModalReply;