import { TaskProps } from "../App";

interface TaskListProps {
  tasks: TaskProps[];
  deleteTask: (id: string) => void;
}

function TaskList({ tasks, deleteTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <li>{task.name}</li>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => deleteTask(task.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </ul>
  );
}

export default TaskList;
