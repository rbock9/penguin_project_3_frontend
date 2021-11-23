import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal"

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
    console.log(props.amiibos)
    
     

    return props.amiibos.map((amiibo) => (



      <div key={amiibo._id} className="amiibo">
        <Link to={`/amiibos/${amiibo._id}`}>
          <h4 className="indexAmiiboTitle">{amiibo.name}</h4>
        
        <img className="amiiboImg" src={amiibo.image} alt={amiibo.name} />
        {/* <h5>Character: {amiibo.character}</h5> */}
        {/* <h5>Game Series: {amiibo.gameSeries}</h5>
        <h5>Amiibo Series: {amiibo.amiiboSeries} </h5> */}
        {/* <h5>{amiibo.type} </h5> */}
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
    
        const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="index container">
      <button className="button btn modalButton card " onClick={()=> setModalIsOpen(true)}>Create Amiibo</button>
      <Modal className="createModal card-panel " isOpen={modalIsOpen}>
        
      <form className="createForm" onSubmit={handleSubmit}>
        <button className="button btn X" onClick={()=> setModalIsOpen(false)}> Close Window </button>
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
        <input type="submit" className="btn button white" value="Create Amiibo" />
      </form>
      
      </Modal>

    <section className="indexAmiibos">
      {props.amiibos ? loaded() : loading()}
    </section>
    </div>
  );
}

export default Index;