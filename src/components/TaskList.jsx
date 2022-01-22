import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import Task from "./Task";
import styled from "styled-components";
import NewTask from "./NewTask";

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewTaskContainer = styled.div`
  width: 80%;
  padding: 1em;
  border-radius: 0.3em;
  background-color: #2e2e2e;
  margin: 0.5em;
`;

export default function TaskList() {
  const { tasks } = useContext(TaskContext);
  return (
    <TaskContainer>
      <NewTaskContainer>
        <NewTask />
      </NewTaskContainer>
      {tasks.map((task, key) => (
        <Task {...task} key={key} />
      ))}
    </TaskContainer>
  );
}
