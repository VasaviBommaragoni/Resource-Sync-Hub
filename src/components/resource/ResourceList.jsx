import ResourceCard from "./ResourceCard";

function ResourceList({ resources }) {
  return (
    <div>
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
        />
      ))}
    </div>
  );
}

export default ResourceList;