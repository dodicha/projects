import { useEffect, useState } from "react";
import "./App.css";
import * as Components from "./components";

const subjects = [
  {
    id: 0,
    subj: "mathematics",
  },
  {
    id: 1,
    subj: "IQ",
  },
  {
    id: 2,
    subj: "Literature",
  },
  {
    id: 3,
    subj: "History",
  },
  {
    id: 4,
    subj: "Sciences",
  },
];

function App() {
  let [count, setCount] = useState(0);
  let [choosenSubject, setChoosenSubject] = useState(" ");
  let [answer, setAnswer] = useState("");

  useEffect(() => {
    document.getElementById("btn").style.display = "none";
    console.log(document.getElementById("btn"));
    if (count === 4) {
      document.getElementById("btn").style.display = "none";
    } else {
      document.getElementById("btn").style.display = "block";
    }
  }, [count]);

  useEffect(() => {
    setCount(0);
  }, [choosenSubject]);

  function setclassNameToAnswer() {
    let el = document.getElementsByClassName("color");

    for (let i = 0; i < el.length; i++) {
      el[i].style.backgroundColor = "white";
    }
  }

  return (
    <div>
      <h3 className="header">Choose Subject</h3>
      <ul className="catalogDiv">
        {subjects.map((subj) => (
          <Components.Subject
            subject={subj.subj}
            key={subj.id}
            setChoosenSubject={setChoosenSubject}
            choosen={Components.questions[subj.subj]}
            setAnswer={setAnswer}
            answer={Components.answers[subj.subj]}
          />
        ))}
      </ul>
      <div id="isVisible">
        <Components.MainContent
          count={count}
          question={choosenSubject[count]}
          answer={answer}
        />
        <div className="center">
          <Components.NextButton
            func={() => {
              setCount((count = count + 1));
              setclassNameToAnswer();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
