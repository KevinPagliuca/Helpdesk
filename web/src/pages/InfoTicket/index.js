import React, { useState } from 'react';

import Header from '../../components/Header';

import './styles.css';

const InfoTicket = () => {
  const [commentIsActive, setCommentIsActive] = useState(false);
  const [comment, setComment] = useState([
    {
      id: 1,
      user: 'Kevin Pagliuca',
      comentario: 'sei la sei la sei la sei la sei la seila'
    },
    {
      id: 2,
      user: 'Kevin Paaagliuca',
      comentario: 'kaosdkopaskdop kasopdkpoask dpoaskopdkasodkpas kdaoks opdaksd'
    }
  ]);
  function handleAutoSizeTextarea(e) {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }
  function handleComment() {
    setCommentIsActive(true);
  }
  return (
    <>
      <Header />
      <div id="infoticket" className="container-infoticket">

        <div className="container-ticket">
          <h3>Chamado #2123</h3>
          <div className="container-header">
            <div className="user">
              <strong>Usuário</strong>
              <p>E-mail</p>
              <p>Cargo</p>
            </div>

            <div className="status">
              <strong>Status</strong>
              <p>Em andamento</p>
            </div>
          </div>

          <div className="container-description">
            <h3>Descrição do ocorrido</h3>

            <p>Da criação de um sistema para colher e distribuir água potável ao planejamento de uma linha de produção para fabricação de circuitos integrados e à formulação de uma estratégia para testar uma nova aeronave, engenheiros de todas as especialidades desenvolvem “programas” para resolver problemas. Uma das qualificações mais importantes de um engenheiro é a capacidade de descrever programas de forma clara e livre de ambiguidades.
            Em última análise, os computadores são máquinas que seguem automaticamente um conjunto de regras […]. As regras e procedimentos que governam a operação dos processos de computação são chamados de programas de computador, e são escritos em linguagens precisas, especializadas, conhecidas como linguagens de programação.
                    </p>
          </div>

          <div className="container-footer">
            <button onClick={handleComment}>Comentar</button>
            <a href="#">Editar</a>
          </div>
        </div>

        {comment !== '' ?
          <>
            {comment.map(item => {
              return (
                <div className="container-comments" key={item.id}>
                  <div className="user-comment">
                    <strong>{item.user}</strong>
                  </div>

                  <div className="txtComment">
                    <p>
                      {item.comentario}
                    </p>
                  </div>
                </div>
              )
            })}
          </>

          :
          null
        }

        <div className="container-reply" >
          <h3>Comentar</h3>
          <textarea
            id="coment-input"
            onKeyDown={handleAutoSizeTextarea}
            placeholder="Insira seu comentário"
          >

          </textarea>
          <button>Enviar</button>
        </div>
      </div>
    </>
  );
}
export default InfoTicket;