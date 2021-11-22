import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

const Show = (props) => {
  // grab the navigate function
  const navigate = useNavigate()
  // get the params object
  const params = useParams();
  // grab the id from params
  const id = params.id;
  // grab amiibos from props
  const amiibos = props.amiibos;
  // create state for form
  const [editForm, setEditForm] = useState({})
  // useEffect to set state to the existing amiibos, when the data is available
  useEffect(() => {
      if(props.amiibos){
          const amiibo = amiibos.find((a) => a._id === id);
          setEditForm(amiibos)
      }
  }, [props.amiibos])

  if (props.amiibos) {
    // grab the target amiibo from the amiibos array
    const amiibo = amiibos.find((a) => a._id === id);
    
    // handleChange function for form
    const handleChange = (event) => {
        // create a copy of the state
        const newState = {...editForm}
        // update the newState
        newState[event.target.name] = event.target.value
        // update the state
        setEditForm(newState)
    }

    // handleSubmit for form
    const handleSubmit = (event) => {
        // prevent the refresh
        event.preventDefault()
        // pass the form data to updateAmiibos
        props.updateAmiibos(editForm, amiibo._id)
        // redirect amiibos back to index
        navigate("/")
    }

    const removeAmiibo = () => {
        props.deleteAmiibos(amiibo._id)
        navigate("/")
    }

    const form = (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="Name of Amiibo"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.gameSeries}
            name="gameSeries"
            placeholder="Game Series Amiibo is From"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.amiiboSeries}
            name="amiiboSeries"
            placeholder="Amiibo Series"
            onChange={handleChange}
          />
           <input
            type="text"
            value={editForm.character}
            name="character"
            placeholder="Character the Amiibo Depicts"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.type}
            name="type"
            placeholder="Type of Amiibo (Figure, card, etc.)"
            onChange={handleChange}
          />
          <input className="btn button"  type="submit" value="Update Amiibo" />
        </form>
      );

    return (
      <div className="amiiboShow">
        <h1>{amiibo.name}</h1>
        <h2>{amiibo.gameSeries}</h2>
        <img src={amiibo.image} alt={amiibo.name} />
        <h3>Character: {amiibo.character}</h3>
        <h3>Game Series: {amiibo.gameSeries}</h3>
        <h3>Amiibo Series: {amiibo.amiiboSeries} </h3>
        <h3>Amiibo Type: {amiibo.type} </h3>
        {form}
        <button className="btn button" onClick={removeAmiibo}>Delete Amiibo</button>
      </div>
    );
  } else {
    return <h1>No Amiibos</h1>;
  }
};

export default Show;
