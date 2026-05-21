import { useDimensionFilters } from "./useDimensionFilters";

function CheckboxFilter({
  label,
  options,
  loading,
  filterKey,
  setFilterLoading,
}) {
  const filters = useDimensionFilters();
  const values = filters[filterKey];

  function onToggle(value) {
    setFilterLoading(true);
    filters.setFilter(filterKey, value);
  }
  return (
    <div>
      <div>
        <span>{label}</span>
      </div>
      <div>
        {options.map((option) => {
          const isChecked = values.includes(option.value);
          return (
            <label key={option.value}>
              <input
                type="checkbox"
                disabled={loading}
                checked={isChecked}
                onChange={() => onToggle(option.value)}
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default CheckboxFilter;
