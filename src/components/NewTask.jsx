import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  ]background-color: #2e2e2e;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default function NewTask() {
  const { addTask, addNewTaskDetails, newTask } = useContext(TaskContext);

  return (
    <Container>
      <FormContainer>
        <input
          type="text"
          name=""
          id=""
          onChange={(event) => addNewTaskDetails(event.target.value)}
          style={{
            height: "2em",
            width: "80%",
            color: "white",
            backgroundColor: "#404040",
            border: "none",
            borderRadius: "0.2em",
          }}
        />
        <FaPlus onClick={() => addTask(newTask)} />
      </FormContainer>
    </Container>
  );
}
