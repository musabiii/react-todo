import "./filter.css";

export default function Filter({
  handleFilterCompleted,
  filterCompleted,
  handleFilter,
  filter,
}) {
  const handleCompleted = () => {
    if (!filterCompleted) {
      handleFilterCompleted();
    }
  };

  const handleAll = () => {
    if (filterCompleted) {
      handleFilterCompleted();
    }
  };

  const handleInputFilter = (e) => {
    handleFilter(e.target.value);
  };

  let clazzAll = 'select'
  let clazzCompleted = ''
  if (filterCompleted) {
    clazzAll = ''
    clazzCompleted = 'select'
  }

  return (
    <div className="filter">
      <input
        className="filter__search"
        type="text"
        placeholder="type to filter..."
        onChange={handleInputFilter}
        value={filter}
      />
      <div className="filters">
        <input className={clazzCompleted} type="button" value="uncompleted" onClick={handleCompleted} />
        <input className={clazzAll} type="button" value="all" onClick={handleAll} />
      </div>
    </div>
  );
}
