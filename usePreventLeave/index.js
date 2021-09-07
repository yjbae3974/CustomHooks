import { usePreventLeave } from "./usePreventLeave";

export default function App() {
    const {enablePrevent, disablePrevent} = usePreventLeave();
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Start editing </h2>
        <button onClick={enablePrevent}>protect</button>
        <button onClick={disablePrevent}>unprotect</button>
      </div>
    );
  }