import { useFadeIn } from "./useFadeIn";

export default function App() {
    const FadeInH1 = useFadeIn(1,1);
    const FadeInP = useFadeIn(5, 1);
    return (
      <div className="App">
        <h1 {...FadeInH1}>Hello</h1>
        <p {...FadeInP}>blablablablablab</p>
      </div>
    );
  }
  