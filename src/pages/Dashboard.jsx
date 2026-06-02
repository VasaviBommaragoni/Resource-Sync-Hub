import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Welcome {currentUser?.name} 👋</h1>

        <div className="card-container">
          <div
            className="dashboard-card"
            onClick={() => navigate("/add-resource")}
          >
            <h2>Upload Resource</h2>
            <p>Add a camera, drone, laptop, etc.</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/add-skill")}
          >
            <h2>Upload Skill</h2>
            <p>Showcase your skills and portfolio.</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/marketplace")}
          >
            <h2>Marketplace</h2>
            <p>Browse resources and skills.</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() => navigate("/my-uploads")}
          >
            <h2>My Uploads</h2>
            <p>Manage your resources and skills.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;