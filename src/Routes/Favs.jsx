import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { tema } = useContext(ContextGlobal);
  let dentist = JSON.parse(localStorage.getItem("odontologos"));
  return (
    <>
      <h1 style={{background:tema.favs, color:tema.letras}}>Tus dentistas favoritos</h1>
      <div className="card-grid" style={{ background: tema.favs,color:tema.letras }}>
        {dentist.map((item) => (
          <Card
            name={item.name}
            username={item.username}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;


