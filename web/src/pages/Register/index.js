import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import back from '../../assets/back.svg';
import logoImg from '../../assets/Logo.png';

import './styles.css';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [eye, setEye] = useState(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const history = useHistory();

  function attIcon(e) {
    e.preventDefault();
    if (eye === 0) {
      setEye(1);
      if (password !== '') {
        document.getElementById('password').setAttribute('type', 'text');
        document.getElementById('confPass').setAttribute('type', 'text');
      }
    } else if (eye === 1) {
      setEye(0);
      document.getElementById('password').setAttribute('type', 'password');
      document.getElementById('confPass').setAttribute('type', 'password');
    }
  }

  function backToHome() {
    history.push('/');
  }

  return (
    <div id="page-register">
      <div className="register-container">
        <form>
          <img className="backButton" src={back} alt="voltar" onClick={backToHome} />

          <h2 className="Text">Fazer cadastro</h2>

          <div className="container-form">
            <div className="input-block">
              <div className="content">
                <label htmlFor="name" className={name !== '' ? "label-active" : ""}>Nome completo</label>
                <input
                  id="name"
                  type="text"
                  className={name !== '' ? "active" : ""}
                  onChange={e => setName(e.target.value)}
                />
                <div className="border-input" />
              </div>

              <div className="content">
                <label htmlFor="e-mail" className={email !== '' ? "label-active" : ""}>E-mail</label>
                <input
                  id="e-mail"
                  type="text"
                  className={email !== '' ? "active" : ""}
                  onChange={e => setEmail(e.target.value)}
                />
                <div className="border-input" />
              </div>

              <div className="content">
                <label htmlFor="password" className={password !== '' ? "label-active" : ""}>Senha</label>
                <input
                  id="password"
                  type="password"
                  autoComplete="off"
                  className={password !== '' ? "active" : ""}
                  onChange={e => setPassword(e.target.value)}
                />
                <div className="border-input" />
                {eye !== 0 && password !== ''
                  ?
                  <FaEye
                    className="icon-eye"
                    size={24}
                    color="#9C98A6"
                    onClick={attIcon}
                    style={password !== '' ? { cursor: 'pointer' } : { cursor: 'not-allowed' }}
                  />
                  :
                  <FaEyeSlash
                    className="icon-eye"
                    size={24}
                    color="#F31212"
                    onClick={attIcon}
                    style={password !== '' ? { cursor: 'pointer' } : { cursor: 'not-allowed' }}
                  />
                }
              </div>

              <div className="content">
                <label htmlFor="confPass" className={confPassword !== '' ? "label-active" : ""}>Confirme sua senha</label>
                <input
                  id="confPass"
                  type="password"
                  autoComplete="off"
                  className={confPassword !== '' ? "active" : ""}
                  onChange={e => setConfPassword(e.target.value)}
                />
                <div className="border-input" />
              </div>
            </div>
            <div className="btnEntrar">
              <button type="submit">Concluir cadastro</button>
            </div>
          </div>
        </form>
      </div>
      <div className="slogan">
        <div>
          <img src={logoImg} width={350} height={100} alt="logo" />
          <h1>Helpdesk System</h1>
          <p> O sistema perfeito para você controlar <br />
            e analisar seus chamados de <br />
            forma estravagante!!
        </p>
        </div>
      </div>
    </div>
  );
}

export default Register;