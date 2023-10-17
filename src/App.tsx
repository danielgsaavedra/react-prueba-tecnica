import { FormEvent, useState } from "react";
import TaskList from "./components/TaskList";
import Task from "./components/Task";
import "./App.css";

export interface TaskProps {
  id: string;
  name: string;
}

function App() {
  const [currentTask, setCurrentTask] = useState<TaskProps[]>([]);
  const [error, setError] = useState("");

  const createTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = formData.get("task") as string;
    if (data.trim() === "") {
      setError("El campo no puede estar vacio");
    }
    if (data) {
      setCurrentTask([...currentTask, { id: crypto.randomUUID(), name: data }]);
      setError("");
    }
    form.reset();
  };

  const deleteTask = (id: string) => {
    const newTask = currentTask.filter((task) => task.id !== id);
    setCurrentTask(newTask);
  };

  return (
    <>
      <h1>Prueba Técnica</h1>
      <main>
        <Task createTask={createTask} error={error} />
        <TaskList tasks={currentTask} deleteTask={deleteTask} />
      </main>
    </>
  );
}

export default App;
