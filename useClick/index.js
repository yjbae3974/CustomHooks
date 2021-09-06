import { useClick } from "./useClick";

export default function App() {
    const sayHello = () => console.log("say Hello");
    const title = useClick(sayHello);
    return (
      <div className="App">
        <h1 ref={title}>Hello</h1>
        <h2>Start editing </h2>
      </div>
    );
  }
  