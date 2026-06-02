import { useState } from "react";
import "../../styles/form.css";

function ResourceForm() {
  const [resourceName, setResourceName] = useState("");
  const [category, setCategory] = useState("");
  const [yearsOwned, setYearsOwned] = useState("");
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

    const resources =
      JSON.parse(localStorage.getItem("resources")) || [];

    const newResource = {
      id: Date.now(),
      userId: currentUser.id,
      ownerName: currentUser.name,
      resourceName,
      category,
      yearsOwned,
      description,
      phone,
      email,
      image,
    };

    resources.push(newResource);

    localStorage.setItem(
      "resources",
      JSON.stringify(resources)
    );

    alert("Resource Uploaded Successfully");

    setResourceName("");
    setCategory("");
    setYearsOwned("");
    setDescription("");
    setPhone("");
    setEmail("");
    setImage("");
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className="form-title">
          Upload Resource
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Resource Name</label>
            <input
              type="text"
              value={resourceName}
              onChange={(e) =>
                setResourceName(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              required
            >
              <option value="">
                Select Category
              </option>

              <option>Photography</option>
              <option>Videography</option>
              <option>Design</option>
              <option>Programming</option>
              <option>Music</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Years Owned</label>

            <input
              type="number"
              value={yearsOwned}
              onChange={(e) =>
                setYearsOwned(e.target.value)
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
            <label>Upload Resource Image</label>

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
            Upload Resource
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResourceForm;