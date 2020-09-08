import React from 'react';
import { FaHome, FaClipboardList, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import bemvindoImg from '../../assets/wellcome.svg';
import logoImg from '../../assets/Logo.png';

import './styles.css';

const Wellcome = () => {
  return (
    <div id="wellcome">
      <div>

      </div>
      <div className="logo-wellcome">
        <div className="logo">
          <img src={logoImg} alt="bem-vindo" />
          <strong>IMBECOR - Helpdesk System</strong>
          <p>
            Sua plataforma ideal para controlar <br /> chamados de helpdesk
          </p>
        </div>

        <div className="img">
          <img src={bemvindoImg} width={600} alt="bem-vindo" />
        </div>
      </div>

      <div className="chooses">
        <div className="buttons-container">

          <div className="btnHome">
            <button className="button"><FaHome /><Link to="/">Página inicial</Link></button>
          </div>

          <div className="btnView">
            <button className="button"><FaClipboardList /><Link to="/">Visualizar chamados</Link></button>
          </div>

          <div className="btnNew">
            <button className="button"><FaPlus /><Link to="/">Abrir um chamado</Link></button>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Wellcome;