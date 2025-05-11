import { Link, useNavigate } from "react-router-dom";
import '../css/Navbar.css'

function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        // Reset search state by navigating to home
        navigate('/', { replace: true });
        // Force a page reload to reset the search state
        window.location.reload();
    };

    return (
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/" onClick={handleHomeClick}>MovieApp</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" onClick={handleHomeClick}>Home</Link>
                <Link to="/Favorites">Favorites</Link>
            </div>
        </div>
    );
}

export default Navbar;