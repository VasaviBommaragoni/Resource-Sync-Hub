import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) {
      return;
    }

    localStorage.removeItem("currentUser");

    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>Resource Sync Hub</h2>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;