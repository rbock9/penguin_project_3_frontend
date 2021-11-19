import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    amiiboSeries: "",
    character: "",
    gameSeries: "",
    image: "",
    name: "",
    release: "",
    type: "",
    });


  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createAmiibo(newForm);
    setNewForm({
        amiiboSeries: "",
        character: "",
        gameSeries: "",
        image: "",
        name: "",
        release: "",
        type: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.amiibos.map((amiibo) => (
      <div key={amiibo._id} className="amiibo">
        <Link to={`/amiibos/${amiibo._id}`}>
          <h4 className="indexAmiiboTitle">{amiibo.name}</h4>
        </Link>
        <img class="responsive-img indexAmiiboImg" src={amiibo.image} alt={amiibo.name} />
        <h5 className="indexAmiiboSeries">{amiibo.amiiboSeries}</h5>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <div className="index container">
      <form class="createForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name of amiibo"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.amiiboSeries}
          name="amiiboSeries"
          placeholder="amiibo series"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.character}
          name="character"
          placeholder="character amiibo depicts"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.gameSeries}
          name="gameSeries"
          placeholder="game series amiibo is from"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.release}
          name="release"
          placeholder="release date of amiibo"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.type}
          name="type"
          placeholder="amiibo type (card, figure, etc.)"
          onChange={handleChange}
        />
        <input type="submit" value="Create Amiibo" />
      </form>
    <section className="indexAmiibos">
      {props.amiibos ? loaded() : loading()}
    </section>
    </div>
  );
}

export default Index;