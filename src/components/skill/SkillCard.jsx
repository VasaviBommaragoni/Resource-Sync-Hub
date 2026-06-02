import { useState } from "react";

function SkillCard({ skill }) {
  const [showContact, setShowContact] =
    useState(false);

  const deleteSkill = () => {
    const skills =
      JSON.parse(localStorage.getItem("skills")) || [];

    const updatedSkills = skills.filter(
      (item) => item.id !== skill.id
    );

    localStorage.setItem(
      "skills",
      JSON.stringify(updatedSkills)
    );

    window.location.reload();
  };

  const editSkill = () => {
    const newDescription = prompt(
      "Enter New Description",
      skill.description
    );

    if (!newDescription) return;

    const skills =
      JSON.parse(localStorage.getItem("skills")) || [];

    const updatedSkills = skills.map((item) => {
      if (item.id === skill.id) {
        return {
          ...item,
          description: newDescription,
        };
      }

      return item;
    });

    localStorage.setItem(
      "skills",
      JSON.stringify(updatedSkills)
    );

    window.location.reload();
  };

  return (
    <div className="skill-card">
      {skill.image && (
        <img
          src={skill.image}
          alt={skill.skillName}
          className="card-image"
        />
      )}

      <div className="card-content">
        <h3>{skill.skillName}</h3>

        <p>
          <strong>Experience:</strong>{" "}
          {skill.experience} Years
        </p>

        <p>
          <strong>Owner:</strong>{" "}
          {skill.ownerName}
        </p>

        <p>{skill.description}</p>

        {!showContact ? (
          <button
            className="view-btn"
            onClick={() =>
              setShowContact(true)
            }
          >
            Reveal Contact
          </button>
        ) : (
          <div className="contact-box">
            <p>📞 {skill.phone}</p>
            <p>✉️ {skill.email}</p>
          </div>
        )}

        <div className="action-buttons">
          <button
            className="edit-btn"
            onClick={editSkill}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={deleteSkill}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;