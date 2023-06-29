import { createContext, useState } from "react";

export const initialState = {
  temas:{
    light:{
      nav: 'linear-gradient(to bottom, #f7f7f7, #f1f1f9, #e9ecfb, #dee7fd, #d1e3ff)',
      home: 'linear-gradient(to top, #ecf4ff, #b3ccf4, #7fa3e8, #4d7bd9, #0752c7)',
      favs: 'linear-gradient(to top, #ecf4ff, #b3ccf4, #7fa3e8, #4d7bd9, #0752c7)',
      footer: 'linear-gradient(to bottom, #0063fd, #0061f8, #005ff2, #005ded, #005be8)',
      letras: 'black'
    },
    dark:{
      nav:'rgb(26, 82, 118)',
      home:'linear-gradient(to right top, #10284d, #243554, #35435b, #475162, #595f68)',
      favs: 'linear-gradient(to right top, #10284d, #243554, #35435b, #475162, #595f68)',
      footer:'rgb(26, 82, 118)',
      letras: 'white'
    }
  }
}

export const ContextGlobal =createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [tema, setTema] = useState(initialState.temas.light);

  const handletheme = () => {
    setTema((t) => (t === initialState.temas.light? initialState.temas.dark : initialState.temas.light));
  };

  return (
    <ContextGlobal.Provider value={{tema, handletheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
