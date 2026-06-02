import { useState } from "react";

import ResourceList from "../components/resource/ResourceList";
import SkillList from "../components/skill/SkillList";
import SearchBar from "../components/common/SearchBar";

import {
  sampleResources,
  sampleSkills,
} from "../Data/sampleData";

import "../styles/marketplace.css";

function Marketplace() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [activeTab, setActiveTab] =
    useState("resources");

  // User uploaded data
  const uploadedResources =
    JSON.parse(localStorage.getItem("resources")) || [];

  const uploadedSkills =
    JSON.parse(localStorage.getItem("skills")) || [];

  // Combine sample data + uploaded data
  const resources = [
    ...sampleResources,
    ...uploadedResources,
  ];

  const skills = [
    ...sampleSkills,
    ...uploadedSkills,
  ];

  const filteredResources = resources.filter(
    (resource) =>
      resource.resourceName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const filteredSkills = skills.filter(
    (skill) =>
      skill.skillName
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="marketplace-container">
      <h1 className="marketplace-title">
        Resource Sync Hub Marketplace
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
          Resources Available
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
          Skills Available
        </button>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {activeTab === "resources" && (
        <>
          <h2 className="section-title">
            Available Resources
          </h2>

          {filteredResources.length > 0 ? (
            <ResourceList
              resources={filteredResources}
            />
          ) : (
            <p>No Resources Found</p>
          )}
        </>
      )}

      {activeTab === "skills" && (
        <>
          <h2 className="section-title">
            Available Skills
          </h2>

          {filteredSkills.length > 0 ? (
            <SkillList skills={filteredSkills} />
          ) : (
            <p>No Skills Found</p>
          )}
        </>
      )}
    </div>
  );
}

export default Marketplace;