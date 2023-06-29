import React from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';
import logodiente from '../images/logodiente.avif';

const Navbar = () => {
  const { tema, handletheme } = useContext(ContextGlobal);
  return (
    <nav className='navegador' style={{background:tema.nav, color:tema.letras}}>
      <img className="nav-logo" src={logodiente} alt="Logo" />
      <p className='nombrenav'>Odonto Salud</p>
      <Link className="nav-item" to="/">
        <button className="nav-button">Home</button>
      </Link>
      <Link className="nav-item" to="/contact">
        <button className="nav-button">Contacto</button>
      </Link>
      <Link className="nav-item" to="/favs">
        <button className="nav-button">Favoritos</button>
      </Link>
      <button className="theme-button" onClick={handletheme}>Modo oscuro</button>
    </nav>
  )
}

export default Navbar