import SkillCard from "./SkillCard";

function SkillList({ skills }) {
  return (
    <div>
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
        />
      ))}
    </div>
  );
}

export default SkillList;