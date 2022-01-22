import styled from "styled-components";

const Button = styled.button`
    padding: 1em,
`;

export default function AddButton() {
  return (
    <Button>
      <p>+</p>
    </Button>
  );
}
