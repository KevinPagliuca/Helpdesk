import React from 'react';

import Header from '../../components/Header';
import userImg from '../../assets/User.png';

import './styles.css';

const Myaccount = () => {
    return (
        <div id="page-myaccount">
            <Header />
            <main className="main-content">
                <div>
                    <div className="userImg">
                        <img src={userImg} alt="imgUser" />
                    </div>

                    <div className="username">
                        <strong>Kevin Pagliuca</strong>
                    </div>

                    <form>
                        <div className="input-block">
                            <input />
                        </div>
                        <div className="input-block">
                            <input />
                        </div>

                        <div>
                            <button>Alterar dados</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Myaccount;