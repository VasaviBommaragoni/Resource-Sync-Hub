import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import AddResource from "./pages/AddResource";
import AddSkill from "./pages/AddSkill";
import MyUploads from "./pages/MyUploads";

function App() {
  useEffect(() => {
    const resources = localStorage.getItem("resources");

    if (!resources) {
      localStorage.setItem(
        "resources",
        JSON.stringify([
          {
            id: 1,
            userId: 1,
            ownerName: "Rahul",
            resourceName: "Canon DSLR Camera",
            category: "Photography",
            yearsOwned: 2,
            description: "Professional DSLR camera for events and shoots.",
            phone: "9876543210",
            email: "rahul@gmail.com",
            image: "",
          },
          {
            id: 2,
            userId: 2,
            ownerName: "Kiran",
            resourceName: "DJI Drone",
            category: "Videography",
            yearsOwned: 1,
            description: "4K professional drone for aerial videography.",
            phone: "9999999999",
            email: "kiran@gmail.com",
            image: "",
          },
        ])
      );
    }

    const skills = localStorage.getItem("skills");

    if (!skills) {
      localStorage.setItem(
        "skills",
        JSON.stringify([
          {
            id: 1,
            userId: 1,
            ownerName: "Rahul",
            skillName: "Photography",
            experience: 3,
            description: "Wedding and event photography specialist.",
            phone: "9876543210",
            email: "rahul@gmail.com",
            image: "",
          },
          {
            id: 2,
            userId: 2,
            ownerName: "Kiran",
            skillName: "Video Editing",
            experience: 2,
            description: "Adobe Premiere Pro and After Effects expert.",
            phone: "9999999999",
            email: "kiran@gmail.com",
            image: "",
          },
        ])
      );
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />

        {/* Resource Pages */}
        <Route path="/add-resource" element={<AddResource />} />

        {/* Skill Pages */}
        <Route path="/add-skill" element={<AddSkill />} />

        {/* My Uploads */}
        <Route path="/my-uploads" element={<MyUploads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;