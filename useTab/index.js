import {useTabs} from "./useTab"

const content = [
    {
      tab: "section 1",
      content: "I'm the content of the Section 1"
    },
    {
      tab: "section 2",
      content: "I'm the content of the Section 2"
    }
  ]


export default function App() {
    const {currentItem,changeItem} = useTabs(1,content);
    console.log(currentItem)
    return (
      <div className="App">
        <h1>Hello</h1>
        {
          content.map((section,index)=>(
            <button onClick={()=>changeItem(index)}>{section.tab}</button>
            ))
          }
          <div>{currentItem.content}</div>
      </div>
    );
  };
  