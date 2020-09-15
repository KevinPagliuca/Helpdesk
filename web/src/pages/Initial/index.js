import React, { useState } from 'react';

import Header from '../../components/Header';

import './styles.css';

const Initial = () => {
  return (
    <>
      <Header optionAcitaved={0} />
      <div id="initial">
        <div className="container">
          <h1>IMBECOR Helpdesk</h1>
        </div>
      </div>
    </>
  );
}
export default Initial;