import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/login")
    e.preventDefault();
    localStorage.removeItem("Token");
    
  };

  return (
    <>
      <nav id="navbar">
        <Link to="/" className="link">Home</Link>
        <Link to="/bookpost" className="link">Create Book</Link>
        <Link to="/register" className="link">Sign up</Link>
        <Link to="/login" className="link">Login</Link>
        <Link onClick={handleClick} className="link">Logout</Link> 
      </nav>
    </>
  );
};

export default Navbar;
