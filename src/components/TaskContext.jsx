import { createContext, useState } from "react";
import taskData from "../tasks-data.json";
import { v4 } from "uuid";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(taskData);
  const [newTask, setNewTask] = useState("");

  const addTask = (content) => {
    content
      ? setTasks([...tasks, { id: v4().slice(0, 8), content }])
      : setTasks([...tasks]);
  };

  const modifyTask = ({ id, content }) => {
    () =>
      setTasks([
        tasks.map((task) => (task.id === id ? (task.content = content) : task)),
      ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addNewTaskDetails = (content) => {
    setNewTask(content);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        modifyTask,
        deleteTask,
        addNewTaskDetails,
        newTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
