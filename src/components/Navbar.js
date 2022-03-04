import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";

// Styles and Images
import "./Navbar.css";
import Temple from "../assets/temple.svg";

export default function Navbar() {
  // Import useLogout custom hook and its functionality 
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()


  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="attune logo" />
          <span>Attune</span>
        </li>
        <li>
          {!user && <Link to='/login'>Login</Link>}
        </li>
        <li>
          {!user && <Link to='/signup'>Signup</Link>}
        </li>
        <li>
          {user && !isPending && <button className="btn" onClick={logout}>Logout</button>}
          {user && isPending && <button className="btn" disabled>Logging out</button>}
        </li>
      </ul>
    </div>
  );
}
