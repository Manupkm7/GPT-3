import "./Navbar.css";

const Navbar = () => (
  <div className="contenedor">
    <div className="nav">
      <div className="name">
        <span>GPT-3</span>
      </div>
      <div className="home">
        <p>Home</p>
      </div>
      <div className="what">
        <p>What is GPT?</p>
      </div>
      <div className="open">
        <p>Open AI</p>
      </div>
      <div className="case">
        <p>Case Studies</p>
      </div>
      <div className="library">
        <p>Library</p>
      </div>
    </div>

    <div className="sign">
      <div className="signIn">
        <p>Sign in</p>
      </div>
      <div className="signUp">
        <p>Sign Up</p>
      </div>
    </div>
  </div>
);

export default Navbar;
