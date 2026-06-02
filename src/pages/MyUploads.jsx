import { useState } from "react";

import "../styles/marketplace.css";

import ResourceList from "../components/resource/ResourceList";
import SkillList from "../components/skill/SkillList";

function MyUploads() {
  const [activeTab, setActiveTab] =
    useState("resources");

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const resources =
    JSON.parse(localStorage.getItem("resources")) || [];

  const skills =
    JSON.parse(localStorage.getItem("skills")) || [];

  const myResources = resources.filter(
    (resource) =>
      resource.userId === currentUser.id
  );

  const mySkills = skills.filter(
    (skill) =>
      skill.userId === currentUser.id
  );

  return (
    <div className="marketplace-container">
      <h1 className="marketplace-title">
        My Uploads
      </h1>

      <div className="tab-buttons">
        <button
          className={
            activeTab === "resources"
              ? "active-tab"
              : ""
          }
          onClick={() =>
            setActiveTab("resources")
          }
        >
          My Resources
        </button>

        <button
          className={
            activeTab === "skills"
              ? "active-tab"
              : ""
          }
          onClick={() =>
            setActiveTab("skills")
          }
        >
          My Skills
        </button>
      </div>

      {activeTab === "resources" && (
        <>
          {myResources.length > 0 ? (
            <ResourceList
              resources={myResources}
            />
          ) : (
            <p>
              No Resources Uploaded Yet
            </p>
          )}
        </>
      )}

      {activeTab === "skills" && (
        <>
          {mySkills.length > 0 ? (
            <SkillList skills={mySkills} />
          ) : (
            <p>No Skills Uploaded Yet</p>
          )}
        </>
      )}
    </div>
  );
}

export default MyUploads;