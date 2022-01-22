import React, { useContext } from "react";
import styled from "styled-components";
import { FaTimes, FaPencilAlt } from "react-icons/fa";
import { TaskContext } from "./TaskContext";

const Container = styled.div`
  width: 80%;
  padding: 1em;
  border-radius: 0.3em;
  background-color: #2e2e2e;
  margin: 0.5em;
`;

const IdContainer = styled.div`
  padding: 0.2em;
  width: 80%;
  margin-bottom: 0.1em;
  background-color: #404040;
  border-radius: 0.2em;
  font-weight: 700;
  font-size: 0.8em;
  display: flex;
  align-items: center;
`;

const IdIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icons = styled.div`
  display: flex;
  gap: 0.4em;
`;

const Content = styled.div`
  width: 80%;
`;

export default function Task({ id, content }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <React.Fragment>
      <Container>
        <IdIconsContainer>
          <IdContainer>{id}</IdContainer>
          <div>
            <Icons>
              <FaPencilAlt />
              <FaTimes onClick={() => deleteTask(id)} />
            </Icons>
          </div>
        </IdIconsContainer>
        <Content>{content}</Content>
      </Container>
    </React.Fragment>
  );
}
