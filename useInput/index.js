import { useInput } from "./useInput";

export default function App() {
    const maxLen = (value)=>{
      return !value.includes("@");
    }
    console.log(typeof maxLen)
    const name = useInput("Mr.", maxLen)
    return (
      <div className="App">
        <h1>Hello</h1>
        <input placeholder="Name" {...name} />
      </div>
    );
  };