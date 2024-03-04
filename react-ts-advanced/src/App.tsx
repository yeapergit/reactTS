import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Containet";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return <main>
    <Container as={Button} >Click Me</Container>
    <Input label="test" id="test" ref={input} />
  </main>
}

export default App;
