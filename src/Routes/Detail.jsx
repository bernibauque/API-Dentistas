import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const [dentista, setDentista] = useState([]);
  const params = useParams();
  const { tema } = useContext(ContextGlobal);

  async function handlerFetch() {
    const response = await (
      await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    ).json();
    setDentista(response);
  }

  useEffect(() => {
    handlerFetch();
  }, []);

  return (
    <>
      <section
        className="detail-container"
        style={{ background: tema.home, color: tema.letras }}
      >
        <h1 style={{ color: tema.letras }}>Detalles del dentista</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentista.name}</td>
              <td>{dentista.email}</td>
              <td>{dentista.phone}</td>
              <td>{dentista.website}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Detail;
