interface TaskFilteredProps {
  filter: string;
  setFilter: (filter: string) => void;
}

function TaskFiltered({ filter, setFilter }: TaskFilteredProps) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <input
        type="text"
        placeholder="Buscar"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}

export default TaskFiltered;
