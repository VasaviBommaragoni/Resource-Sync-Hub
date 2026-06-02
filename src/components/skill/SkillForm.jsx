import { useState } from "react";
import "../../styles/form.css";

function SkillForm() {
  const [skillName, setSkillName] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    const skills =
      JSON.parse(localStorage.getItem("skills")) || [];

    const newSkill = {
      id: Date.now(),
      userId: currentUser.id,
      ownerName: currentUser.name,
      skillName,
      experience,
      description,
      phone,
      email,
      image,
    };

    skills.push(newSkill);

    localStorage.setItem(
      "skills",
      JSON.stringify(skills)
    );

    alert("Skill Uploaded Successfully");

    setSkillName("");
    setExperience("");
    setDescription("");
    setPhone("");
    setEmail("");
    setImage("");
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className="form-title">
          Upload Skill
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Skill Name</label>

            <input
              type="text"
              value={skillName}
              onChange={(e) =>
                setSkillName(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Experience (Years)</label>

            <input
              type="number"
              value={experience}
              onChange={(e) =>
                setExperience(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="text"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Portfolio Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {image && (
            <img
              src={image}
              alt="preview"
              className="preview-image"
            />
          )}

          <button
            type="submit"
            className="submit-btn"
          >
            Upload Skill
          </button>
        </form>
      </div>
    </div>
  );
}

export default SkillForm;