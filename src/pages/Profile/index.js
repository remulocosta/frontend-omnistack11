import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom'


import './styles.css';

import logoImg from '../../assets/logo.svg';


export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, APDA</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower  size={18} color="#E02041"/>
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p></p>
        </li>
      </ul>
    </div>
  );
}
