import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import AddButton from "./AddButton";

const Container = styled.section`
  display: flex;
  width: 80%;
  justify-content: center;
  padding: 1em 1em;
  justify-content: space-between;
`;

export default function Title() {
  return (
    <React.Fragment>
      <Container>
        <div>Tasks</div>
      </Container>
    </React.Fragment>
  );
}
