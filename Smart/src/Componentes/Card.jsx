import React from 'react';
import oficina from '../assets/oficina.jpg';

import estilos from './Card.module.css'

export const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="Card">
      <img src={oficina} alt="Imagem do card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};