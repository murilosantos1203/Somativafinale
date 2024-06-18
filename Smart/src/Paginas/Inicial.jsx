import React from 'react';
import estilos from './Inicial.module.css';
import bannerhome from '../assets/bannerhome.svg';
import { Outlet } from 'react-router-dom';
import styles from './Inicial.module.css'
import { Menu } from "../Componentes/Menu"; 

export function Inicial() {

  const Banner = () => {
    return (
      <img src={bannerhome} alt="React Logo" className={estilos.banner} />
    );
  }

  return (
    <div className={styles.conteiner}>
      <Menu />
      <p className={estilos.title}>Monitorando a escola:</p>
      <Banner />
      <Outlet/>
    </div>
  );
}

