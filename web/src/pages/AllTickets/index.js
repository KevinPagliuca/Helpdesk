import React from 'react';

import Header from '../../components/Header';

import './styles.css';

const AllTickets = () => {
  return(
    <div id="alltickets">
      <Header />
      <div className="container">
        <div className="titleTxt">
          <p>Olá, <strong>Kevin Pagliuca</strong></p>
          <h3>Aqui estão todos os chamados em aberto...</h3>
        </div>
      </div>
    </div>
  );
}
export default AllTickets;