import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError('');
    setSuccessMessage('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 5 || !email.includes('@')) {
      setError('Por favor verifique su información nuevamente');
      setSuccessMessage('');
    } else {
      setSuccessMessage(`Gracias ${name}, te contactaremos lo antes posible vía email`);
    }
  };

  return (
    <div className="formulario">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          Nombre completo:
          <input className="form-input" type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label className="form-label">
          Email:
          <input className="form-input" type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button className="form-button" type="submit">Enviar</button>
      </form>
      {error && (
        <p className="error-message">
          <span className="error-icon">⚠️</span>
          {error}
        </p>
      )}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Form;

