import "./App.css";
import { FC } from "react";

interface Jokes {
  id: number;
  setup: string;
  punchline: string;
}

const jokes: Jokes[] = [
  {
    id: 1,
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit.",
  },
  {
    id: 2,
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#.",
  },
];

const JokeCard: FC<Pick<Jokes, "setup" | "punchline">> = ({  setup, punchline }) => {
  return (
    <div className="card">
      <div className="setup">{setup}</div>
      <div className="punchline">{punchline}</div>
    </div>
  );
};

function App() {
  return (
    <div className="background">
      {jokes.map(({ id, setup, punchline }) => (
        <JokeCard key={id} setup={setup} punchline={punchline} />
      ))}
    </div>
  );
}

export default App;
