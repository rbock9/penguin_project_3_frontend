function Footer(props) {
    return <footer className="page-footer footer red">
        <h5>Copyright Rob Bock, Jeff Li, Seb Patin - </h5><span>{new Date().getFullYear()}</span>
        </footer>;
}
  
export default Footer;