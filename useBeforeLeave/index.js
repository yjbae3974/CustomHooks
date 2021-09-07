import { useBeforeLeave } from "./useBeforeLeave";

export default function App() {
    const begforLife = () => console.log("dont leave..");
    useBeforeLeave(begforLife);
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Start editing </h2>
       
      </div>
    );
  }