import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import img from "../images/dientedr.jpg";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id }) => {
  const { tema } = useContext(ContextGlobal);
  const dentista = {
    id,
    name,
    username,
  };
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = () => {
    const favoriteDentists = JSON.parse(localStorage.getItem("odontologos") || "[]");
    const existingDentist = favoriteDentists.find((dentist) => dentist.id === dentista.id);

    if (existingDentist) {
      alert(`Error, ${dentista.name} ya se encuentra en tu lista de favoritos`);
      return;
    }

    favoriteDentists.push(dentista);
    localStorage.setItem("odontologos", JSON.stringify(favoriteDentists));
    setIsFavorite(true);
  };

  const handleRemoveFromFavorites = () => {
    const favoriteDentists = JSON.parse(localStorage.getItem("odontologos") || "[]");
    const updatedDentists = favoriteDentists.filter((dentist) => dentist.id !== dentista.id);

    localStorage.setItem("odontologos", JSON.stringify(updatedDentists));
    setIsFavorite(false);
  };

  return (
    <div className={`card ${isFavorite ? "favorite" : ""}`}>
      <img className="imagen" src={img} alt="dientedr" />
      <h2>
        <Link to={`/${id}`}>{name}</Link>
      </h2>
      <h3>{username}</h3>
      {isFavorite ? (
        <button onClick={handleRemoveFromFavorites} className="removeButton">
          Eliminar de favoritos
        </button>
      ) : (
        <button onClick={handleAddToFavorites} className="favButton">
          Odontologo Favorito 💙
        </button>
      )}
    </div>
  );
};

export default Card;


