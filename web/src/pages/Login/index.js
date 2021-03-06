import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import InputBlock from '../../components/InputBlock';

import api from '../../services/api';

import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginIsTrue = sessionStorage.getItem('status');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        await api.post('login', {
            email, password
        }).then((res) => {
            localStorage.setItem('user_email', res.data.email);
            localStorage.setItem('user_name', res.data.name);
            localStorage.setItem('user_role', res.data.role);
            localStorage.setItem('user_dept', res.data.dept);
            localStorage.setItem('user_id', res.data.id);            
            sessionStorage.setItem('status', 1); // logado
            sessionStorage.setItem('image_url', res.data.image_url);

            if (res.data.permission !== "1") {
                history.push('/myaccount');
            } else {
                sessionStorage.setItem('admin', true);
                history.push('/admin');
            }
        }).catch((err) => {
            let message = err.response.data.Error;
            alert(message);
        })
    }

    if(loginIsTrue !== "1") {
        return (
            <div id="login">
                <form onSubmit={handleLogin}>
                    <h3>Fazer Login</h3>
    
                    <InputBlock
                        id="email"
                        type="text"
                        autoComplete="off"
                        label="E-mail"
    
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
    
                    <InputBlock
                        id="password"
                        type="password"
                        autoComplete="off"
                        label="Senha"
    
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
    
                    <div className="button-container">
                        <button type="submit">Entrar</button>
                    </div>
    
                    <div className="more-infos">
                        <p>Ainda não tem conta ? </p>
                        <Link to="register">Cadastrar-se</Link>
                    </div>
                </form>
            </div>
        );
    } else {
        return(
            <Redirect to="/myaccount"/>
        );
    }
   
}

export default Login;