import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [amiibos, setAmiibos] = useState(null);

  // const URL = "https://rbock-myamiibo-app-backend.herokuapp.com/amiibos/";
  const URL = "https://rbock9-penguin-project3.herokuapp.com/amiibos/"

  const getAmiibos = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setAmiibos(data);
  };

  const createAmiibos = async (amiibo) => {
    // make post request to create amiibos
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amiibo),
    });
    // update list of amiibos
    getAmiibos();
  };

  const updateAmiibos = async (amiibo, id) => {
    // make post request to create amiibos
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(amiibo),
    });
    // update list of amiibos
    getAmiibos();
  };

  const deleteAmiibos = async (id) => {
    // make post request to create amiibos
    await fetch(URL + id, {
      method: "delete",
    });
    // update list of amiibos
    getAmiibos();
  };

  useEffect(() => getAmiibos(), []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Index amiibos={amiibos} createAmiibos={createAmiibos}/>}/>
        <Route path="/amiibos/:id" element={
        <Show
        amiibos={amiibos}
        updateAmiibos={updateAmiibos}
        deleteAmiibos={deleteAmiibos}
        />
        }/>
      </Routes>
    </main>
  );
}
  
export default Main;