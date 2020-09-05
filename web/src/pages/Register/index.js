import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';

import InputGroup from '../../components/InputGroup';

import back from '../../assets/back.svg';
import logoImg from '../../assets/Logo.png';

import './styles.css';

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

              <InputGroup
                id="name"
                type="text"
                className={name !== '' ? "active" : null}
                onChange={e => setName(e.target.value)}

                labelname="Nome completo"
                labelclass={name !== '' ? "label-active" : null}
              />

              <InputGroup
                id="e-mail"
                type="email"
                className={email !== '' ? "active" : null}
                onChange={e => setEmail(e.target.value)}

                labelname="E-mail"
                labelclass={email !== '' ? "label-active" : null}
              />

              <InputGroup
                autoComplete="off"
                id="password"
                className={password !== '' ? "active" : null}
                type="password"
                onChange={e => setPassword(e.target.value)}

                labelname="Senha"
                labelclass={password !== '' ? "label-active" : ""}

              >
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
              </InputGroup>

              <InputGroup
                id="confPass"
                type="password"
                className={confPassword !== '' ? "active" : null}
                onChange={e => setConfPassword(e.target.value)}

                labelname="Confirme sua senha"
                labelclass={confPassword !== '' ? "label-active" : null}
              />

            </div>
            <div className="btnEntrar">
              <button type="submit"><Link to="/">Concluir cadastro</Link></button>
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