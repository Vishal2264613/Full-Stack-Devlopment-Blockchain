import logo from "./logo.svg";
import "./App.css";
import TweetContainer from "./TweetContainer";

function App() {
  return (
    <>
      <TweetContainer status="At home, binge watching Breaking Bad for second time!" />
      <TweetContainer status="I don't want a whole dessert, let's just get two spoons" />
      <TweetContainer status="I like having conversations with kids. Grownups never ask me what my third favorite reptile is. " />
    </>
  );
}

export default App;
