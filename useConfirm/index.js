import { useConfirm } from "./useConfirm";

export default function App() {
    const deleteWord = () => console.log("Deleting the word...");
    const abort = () => console.log("Aborted")
    const confirmDelete = useConfirm("Are you Sure?",deleteWord,abort);
     return (
       <div className="App">
         <h1>Hello</h1>
         <h2>Start editing </h2>
         <button onClick={confirmDelete}>Delete the word</button>
       </div>
     );
   }
   