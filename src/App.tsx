import { FormEvent, useMemo, useState } from "react";
import TaskList from "./components/TaskList";
import Task from "./components/Task";
import "./App.css";
import TaskFiltered from "./components/TaskFiltered";

export interface TaskProps {
  id: string;
  name: string;
}

function App() {
  const [task, setTask] = useState<TaskProps[]>([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");

  const createTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = formData.get("task") as string;
    if (data.trim() === "") {
      setError("Debes ingresar una tarea");
    }
    if (data) {
      setTask([...task, { id: crypto.randomUUID(), name: data }]);
      setError("");
    }
    form.reset();
  };

  const deleteTask = (id: string) => {
    const newTask = task.filter((task) => task.id !== id);
    setTask(newTask);
  };

  const filterTask = useMemo(() => {
    return task.filter((task) => task.name.includes(filter));
  }, [filter, task]);

  const updateTask = (id: string, name: string) => {
    const newTask = task.map((task) => {
      if (task.id === id) {
        task.name = name;
      }
      return task;
    });
    setTask(newTask);
  };

  return (
    <>
      <h1>Prueba Técnica</h1>
      <main>
        <TaskFiltered filter={filter} setFilter={setFilter} />
        <Task createTask={createTask} error={error} />
        <TaskList
          tasks={filterTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </main>
    </>
  );
}

export default App;
