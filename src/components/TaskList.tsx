import { TaskProps } from "../App";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: TaskProps[];
  deleteTask: (id: string) => void;
  updateTask: (id: string, name: string) => void;
}

function TaskList({ tasks, deleteTask, updateTask }: TaskListProps) {
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
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </div>
      ))}
    </ul>
  );
}

export default TaskList;
