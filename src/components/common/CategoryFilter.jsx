function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) =>
        setSelectedCategory(
          e.target.value
        )
      }
    >
      <option value="All">
        All Categories
      </option>

      <option value="Photography">
        Photography
      </option>

      <option value="Videography">
        Videography
      </option>

      <option value="Design">
        Design
      </option>

      <option value="Programming">
        Programming
      </option>
    </select>
  );
}

export default CategoryFilter;