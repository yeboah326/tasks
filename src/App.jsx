import TaskProvider from "./components/TaskContext";
import TaskList from "./components/TaskList";
import Title from "./components/Title";
import styled from "styled-components";
import NewTask from "./components/NewTask";

const Container = styled.div`
  background-color: #1c1c1c;
  min-height: 100vh;
  color: white;
  
`;
function App() {
  return (
    <TaskProvider>
      <Container className="App">
        <Title />
        <TaskList />
      </Container>
    </TaskProvider>
  );
}

export default App;
