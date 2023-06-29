import React from 'react';
import dh from '../images/DH.png';
import instagram from '../images/ico-instagram.png';
import tiktok from '../images/ico-tiktok.png';
import whatsapp from '../images/ico-whatsapp.png';
import facebook from '../images/ico-facebook.png';
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';

const Footer = () => {
  const { tema, handletheme } = useContext(ContextGlobal);
  return (
    <footer className='footer' style={{background:tema.footer, color:tema.letras}}>
      <a href="https://playground.digitalhouse.com/login" target="_blank" rel="noopener noreferrer">
        <img className='dhicon' src={dh} alt='DH-logo' />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img className="icon" src={facebook} alt="ico-facebook.png" />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <img className="icon" src={tiktok} alt="ico-tiktok.png" />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <img className="icon" src={whatsapp} alt="ico-whatsapp.png" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img className="icon" src={instagram} alt="ico-instagram.png" />
      </a>
    </footer>
  );
};

export default Footer;

