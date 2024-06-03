export function Subject(props) {
  function handleCkick() {
    props.setChoosenSubject(props.choosen);
    props.setAnswer(props.answer);
    const content = document.getElementById("isVisible");
    content.style.display = "block";
  }

  return (
    <li className="list" onClick={handleCkick}>
      {props.subject}
    </li>
  );
}

export const styles = {
  catalogComponents: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    width: 150,
    textAlign: "center",
    borderRadius: 50,
  },
  mainContent: {
    justifyContent: "center",
    textAlign: "center",
  },
  ProbableAnswers: {
    width: 250,
    height: 45,
    textAlign: "left",
    marginLeft: 600,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    paddingTop: 7,
    cursor: "pointer",
    fontSize: 15,
  },
  correct: {
    backgroundColor: "green",
  },
  inCorrect: {
    backgroundColor: "red",
  },
};

export function MainContent(props) {
  return (
    <div style={styles.mainContent}>
      <h3>Question: {props.count}</h3>
      <h2>{props.question}</h2>
      <ProbableAnswers
        count={props.count}
        aanswer={props.answer}
        check={props.checkAnswer}
      />
    </div>
  );
}
export function ProbableAnswers(props) {
  return (
    <div>
      <div>
        <ProbableAnswer
          subject={props.aanswer}
          questionNumber={props.count}
          alfabeth={"A"}
        />
        <ProbableAnswer
          subject={props.aanswer}
          questionNumber={props.count}
          alfabeth={"B"}
        />
        <ProbableAnswer
          subject={props.aanswer}
          questionNumber={props.count}
          alfabeth={"C"}
        />
        <ProbableAnswer
          subject={props.aanswer}
          questionNumber={props.count}
          alfabeth={"D"}
        />
      </div>
    </div>
  );
}
function ProbableAnswer(props) {
  function handleAnswer() {
    const alfa = document.getElementById(props.alfabeth);
    console.log(alfa.id);
    if (props.subject[props.questionNumber][props.alfabeth].answer === true) {
      alfa.style.backgroundColor = "green";
    } else {
      alfa.style.backgroundColor = "red";
    }
  }
  return (
    <h4
      id={props.alfabeth}
      style={styles.ProbableAnswers}
      className="color"
      onClick={handleAnswer}
    >
      {props.alfabeth}:{" "}
      {props.subject?.[props.questionNumber]?.[props.alfabeth]?.probableAnswer}
    </h4>
  );
}

export function NextButton(props) {
  return (
    <button onClick={props.func} id="btn">
      Next
    </button>
  );
}

export const answers = {
  mathematics: {
    0: {
      A: {
        probableAnswer: "20%",
        answer: true,
      },
      B: {
        probableAnswer: "5%",
        answer: false,
      },
      C: {
        probableAnswer: "15%",
        answer: false,
      },
      D: {
        probableAnswer: "10%",
        answer: false,
      },
    },
    1: {
      A: {
        probableAnswer: "90",
        answer: false,
      },
      B: {
        probableAnswer: "270",
        answer: true,
      },
      C: {
        probableAnswer: "175",
        answer: false,
      },
      D: {
        probableAnswer: "305",
        answer: false,
      },
    },
    2: {
      A: {
        probableAnswer: "64",
        answer: false,
      },
      B: {
        probableAnswer: "32",
        answer: false,
      },
      C: {
        probableAnswer: "54",
        answer: false,
      },
      D: {
        probableAnswer: "65",
        answer: true,
      },
    },
    3: {
      A: {
        probableAnswer: "4",
        answer: false,
      },
      B: {
        probableAnswer: "5",
        answer: false,
      },
      C: {
        probableAnswer: "6",
        answer: true,
      },
      D: {
        probableAnswer: "7",
        answer: false,
      },
    },
    4: {
      A: {
        probableAnswer: "3.14261",
        answer: false,
      },
      B: {
        probableAnswer: "3.14215",
        answer: false,
      },
      C: {
        probableAnswer: "3.14167",
        answer: false,
      },
      D: {
        probableAnswer: "3.14159",
        answer: true,
      },
    },
  },
  IQ: {
    0: {
      A: {
        probableAnswer: "Lance Armstrong",
        answer: false,
      },
      B: {
        probableAnswer: "George Washington",
        answer: false,
      },
      C: {
        probableAnswer: "bidzina ivanishvili",
        answer: false,
      },
      D: {
        probableAnswer: "Neil Armstrong",
        answer: true,
      },
    },
    1: {
      A: {
        probableAnswer: "Green",
        answer: false,
      },
      B: {
        probableAnswer: "Yellow",
        answer: true,
      },
      C: {
        probableAnswer: "Orange",
        answer: false,
      },
      D: {
        probableAnswer: "Purple",
        answer: false,
      },
    },
    2: {
      A: {
        probableAnswer: "100",
        answer: true,
      },
      B: {
        probableAnswer: "60",
        answer: false,
      },
      C: {
        probableAnswer: "55",
        answer: false,
      },
      D: {
        probableAnswer: "80",
        answer: false,
      },
    },
    3: {
      A: {
        probableAnswer: "8",
        answer: false,
      },
      B: {
        probableAnswer: "10",
        answer: true,
      },
      C: {
        probableAnswer: "11",
        answer: false,
      },
      D: {
        probableAnswer: "13",
        answer: false,
      },
    },
    4: {
      A: {
        probableAnswer: "3/5",
        answer: false,
      },
      B: {
        probableAnswer: "5/8",
        answer: true,
      },
      C: {
        probableAnswer: "1/2",
        answer: false,
      },
      D: {
        probableAnswer: "4/7",
        answer: false,
      },
    },
  },
  Literature: {
    0: {
      A: {
        probableAnswer: "Xenophon",
        answer: false,
      },
      B: {
        probableAnswer: "Callimachus",
        answer: false,
      },
      C: {
        probableAnswer: "Apollonius of Rhodes",
        answer: true,
      },
      D: {
        probableAnswer: "Philitas of Cos",
        answer: false,
      },
    },
    1: {
      A: {
        probableAnswer: "science fiction",
        answer: true,
      },
      B: {
        probableAnswer: "drama",
        answer: false,
      },
      C: {
        probableAnswer: "romance",
        answer: false,
      },
      D: {
        probableAnswer: "poetry",
        answer: false,
      },
    },
    2: {
      A: {
        probableAnswer: "Jean-Jacques Rousseau",
        answer: false,
      },
      B: {
        probableAnswer: "Voltaire",
        answer: false,
      },
      C: {
        probableAnswer: "Immanuel Kant",
        answer: false,
      },
      D: {
        probableAnswer: "Montesquieu",
        answer: true,
      },
    },
    3: {
      A: {
        probableAnswer: "Agatha Christie",
        answer: false,
      },
      B: {
        probableAnswer: "Ian Fleming",
        answer: true,
      },
      C: {
        probableAnswer: "Alan Moore",
        answer: false,
      },
      D: {
        probableAnswer: "J. R. R. Tolkien",
        answer: true,
      },
    },
    4: {
      A: {
        probableAnswer: "Voyage to Balnibarbi",
        answer: false,
      },
      B: {
        probableAnswer: "Voyage to Houyhnhnms",
        answer: true,
      },
      C: {
        probableAnswer: "Voyage to Lilliput",
        answer: false,
      },
      D: {
        probableAnswer: "Voyage to Brobdingnag",
        answer: false,
      },
    },
  },
  History: {
    0: {
      A: {
        probableAnswer: "1923",
        answer: false,
      },
      B: {
        probableAnswer: "1938",
        answer: false,
      },
      C: {
        probableAnswer: "1917",
        answer: false,
      },
      D: {
        probableAnswer: "1914",
        answer: true,
      },
    },
    1: {
      A: {
        probableAnswer: "New York",
        answer: false,
      },
      B: {
        probableAnswer: "Austin",
        answer: false,
      },
      C: {
        probableAnswer: "Dallas",
        answer: true,
      },
      D: {
        probableAnswer: "Miami",
        answer: false,
      },
    },
    2: {
      A: {
        probableAnswer: "1970s",
        answer: false,
      },
      B: {
        probableAnswer: "1950s",
        answer: true,
      },
      C: {
        probableAnswer: "1920s",
        answer: false,
      },
      D: {
        probableAnswer: "1960s",
        answer: false,
      },
    },
    3: {
      A: {
        probableAnswer: "Italy and Carthage",
        answer: false,
      },
      B: {
        probableAnswer: "England and Germany",
        answer: false,
      },
      C: {
        probableAnswer: "France and England",
        answer: true,
      },
      D: {
        probableAnswer: "Spain and France",
        answer: false,
      },
    },
    4: {
      A: {
        probableAnswer: "1914",
        answer: false,
      },
      B: {
        probableAnswer: "1922",
        answer: true,
      },
      Cc: {
        probableAnswer: "1929",
        answer: false,
      },
      D: {
        probableAnswer: "1935",
        answer: false,
      },
    },
  },
  Sciences: {
    0: {
      A: {
        probableAnswer: "Heart",
        answer: false,
      },
      B: {
        probableAnswer: "The skin",
        answer: true,
      },
      C: {
        probableAnswer: "Liver",
        answer: false,
      },
      D: {
        probableAnswer: "Kidney",
        answer: false,
      },
    },
    1: {
      A: {
        probableAnswer: "638",
        answer: false,
      },
      B: {
        probableAnswer: "637",
        answer: false,
      },
      C: {
        probableAnswer: "639",
        answer: true,
      },
      D: {
        probableAnswer: "640",
        answer: false,
      },
    },
    2: {
      A: {
        probableAnswer: "Oxidation",
        answer: false,
      },
      B: {
        probableAnswer: "Electrolysis",
        answer: false,
      },
      C: {
        probableAnswer: "Ionization",
        answer: false,
      },
      D: {
        probableAnswer: "Reduction",
        answer: true,
      },
    },
    3: {
      A: {
        probableAnswer: "Refrigerator",
        answer: false,
      },
      B: {
        probableAnswer: "Fan",
        answer: false,
      },
      C: {
        probableAnswer: "Electric motor",
        answer: false,
      },
      D: {
        probableAnswer: "Electric generator",
        answer: true,
      },
    },
    4: {
      A: {
        probableAnswer: "A text editor.",
        answer: false,
      },
      B: {
        probableAnswer: "A web server",
        answer: false,
      },
      C: {
        probableAnswer: "An operating system based on the Linux kernel",
        answer: true,
      },
      D: {
        probableAnswer: "A graphics library for Java",
        answer: false,
      },
    },
  },
};

export const questions = {
  mathematics: [
    "A shop needs to increase the cost of a book from £25 to £30. By what percentage was the price increased?",
    "Decrease 360 by 25%",
    "20+(90÷2) is equal to:",
    "How many faces does a cube have?",
    "What is Pi to five decimal places?",
  ],
  IQ: [
    "Who was the first man on the moon?",
    "Which of the following is a primary color?",
    "How many zeroes are there in 1 googol?",
    "7,9,5,11.     4,15,12,7.     13,8,11,?.",
    "Which fraction is the biggest?",
  ],
  Literature: [
    "Who was the author of the Greek epic poem Argonautica?",
    "What kind of book is a Nebula Award given for?",
    "Who is the author of The Spirit of Laws?",
    "Which British novelist created the iconic character James Bond?",
    "Which is the last book in Gulliver's Travels?",
  ],
  History: [
    "In which year did World War I begin?",
    "Where was John F. Kennedy assassinated?",
    "In which decade did American involvement in the Korean War take place?",
    "Between which two countries was the Hundred Years War fought?",
    "In which year did Albert Einstein get the Nobel Prize?",
  ],
  Sciences: [
    "What is the largest organ in the human body?",
    "There are _____ number of muscles in human",
    "What is the name of that process in which oxygen is removed?",
    "Which of the following convert's mechanical energy into electrical energy?",
    "What is Fedora?",
  ],
};
