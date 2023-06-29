import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { tema } = useContext(ContextGlobal);

  return (
    <div className="contact-container" style={{ background: tema.home, color: tema.letras }}>
      <div className="contact-content">
        <h2 style={{ color: tema === 'dark' ? 'rgb(21, 67, 96)' : '' }}>¿Quieres saber más acerca de nosotros?</h2>
        <p>Envíanos tu consulta y nos pondremos en contacto contigo.</p>
        <Form />
      </div>
    </div>
  );
};

export default Contact;

