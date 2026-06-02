import { useState } from "react";

function ResourceCard({ resource }) {
  const [showContact, setShowContact] =
    useState(false);

  const deleteResource = () => {
    const resources =
      JSON.parse(localStorage.getItem("resources")) || [];

    const updatedResources = resources.filter(
      (item) => item.id !== resource.id
    );

    localStorage.setItem(
      "resources",
      JSON.stringify(updatedResources)
    );

    window.location.reload();
  };

  const editResource = () => {
    const newDescription = prompt(
      "Enter New Description",
      resource.description
    );

    if (!newDescription) return;

    const resources =
      JSON.parse(localStorage.getItem("resources")) || [];

    const updatedResources = resources.map((item) => {
      if (item.id === resource.id) {
        return {
          ...item,
          description: newDescription,
        };
      }

      return item;
    });

    localStorage.setItem(
      "resources",
      JSON.stringify(updatedResources)
    );

    window.location.reload();
  };

  return (
    <div className="resource-card">
      {resource.image && (
        <img
          src={resource.image}
          alt={resource.resourceName}
          className="card-image"
        />
      )}

      <div className="card-content">
        <h3>{resource.resourceName}</h3>

        <p>
          <strong>Category:</strong>{" "}
          {resource.category}
        </p>

        <p>
          <strong>Years Owned:</strong>{" "}
          {resource.yearsOwned}
        </p>

        <p>
          <strong>Owner:</strong>{" "}
          {resource.ownerName}
        </p>

        <p>{resource.description}</p>

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
            <p>📞 {resource.phone}</p>
            <p>✉️ {resource.email}</p>
          </div>
        )}

        <div className="action-buttons">
          <button
            className="edit-btn"
            onClick={editResource}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={deleteResource}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;