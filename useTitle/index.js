import {useTitle} from "./useTitle"

export default function App() {
    const titleUpdater = useTitle("loading..");
    setTimeout(()=>titleUpdater("Home"),5000);
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Start editing </h2>
      </div>
    );
  }