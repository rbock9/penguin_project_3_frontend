import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    gameSeries: "",
    image: "",
    amiiboSeries: "",
    character: "",
    type: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createAmiibos(newForm);
    setNewForm({
      name: "",
      gameSeries: "",
      image: "",
      amiiboSeries: "",
      character: "",
      type: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.amiibos.map((amiibo) => (
      <div key={amiibo._id} className="amiibo">
        <Link to={`/amiibos/${amiibo._id}`}>
          <h1>{amiibo.name}</h1>
        </Link>
        <img src={amiibo.image} alt={amiibo.name} />
        <h3>Character: {amiibo.character}</h3>
        <h3>Game Series: {amiibo.gameSeries}</h3>
        <h3>Amiibo Series: {amiibo.amiiboSeries} </h3>
        <h3>Amiibo Type: {amiibo.type} </h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="Name of Amiibo"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.gameSeries}
          name="gameSeries"
          placeholder="Game Series Amiibo is From"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.amiiboSeries}
          name="amiiboSeries"
          placeholder="Amiibo Series"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.character}
          name="character"
          placeholder="Character the Amiibo Depicts"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.type}
          name="type"
          placeholder="Type of Amiibo (Figure, card, etc.)"
          onChange={handleChange}
        />
        <input type="submit" value="Create Amiibo" />
      </form>
      {props.amiibos ? loaded() : loading()}
    </section>
  );
}

export default Index;