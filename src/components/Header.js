import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="containerHead">
          <h1 className="headerText">myAmiibos App</h1>
          </div>
      </Link>
    </nav>
  );
}

export default Header;