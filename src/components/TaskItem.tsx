import { useState } from "react";
import { TaskProps } from "../App";

interface TaskItemProps {
  task: TaskProps;
  deleteTask: (id: string) => void;
  updateTask: (id: string, name: string) => void;
}

function TaskItem({ task, deleteTask, updateTask }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = formData.get("taskUpdate") as string;
    if (data) {
      updateTask(task.id, data);
      setIsEditing(false);
    }
  };

  return (
    <>
      {isEditing ? (
        <form onSubmit={handleUpdateTask}>
          <input
            type="text"
            defaultValue={task.name}
            name="taskUpdate"
            style={{ marginRight: "3rem" }}
          />
          <button type="submit" style={{ backgroundColor: "green" }}>
            Guardar
          </button>
        </form>
      ) : (
        <li style={{ cursor: "pointer" }} onClick={() => setIsEditing(true)}>
          {task.name}
        </li>
      )}
      {!isEditing && (
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Eliminar
        </button>
      )}
    </>
  );
}

export default TaskItem;
