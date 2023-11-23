import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  const handleDownload = () => {
    // Triggering a download by creating an anchor element
    const link = document.createElement("a");
    link.href = "https://my-react-app-files.s3.amazonaws.com/guide.pdf";
    link.download = "guide.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <div className="d-container">
          <h3 className="d-label">
            click here to download our exclusive workout guide
          </h3>
          <br></br>
          <button className="download-button" onClick={handleDownload}>
            Download
          </button>
        </div>

        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
