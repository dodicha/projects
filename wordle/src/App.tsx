import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Board, Row, Help  } from './components.tsx'
import { eachWord } from './components.tsx';




const tabRow: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const capsRow: string[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const shiftRow: string[] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const keys: string[][] = [tabRow, capsRow, shiftRow];


function App() {
  const [word, setWord] = useState('');
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [result, setResult] = useState('result');
  const [score, setScore] = useState<number>(100);
  const [helps, setHelps] = useState<number>(0)
  const [letters, setLetter] = useState<boolean[]>(new Array(5).fill(false));

  const refreshPage = () => {
    window.location.reload();
  };
  useEffect(()=>{  
    setWord(eachWord[Math.floor(Math.random() * eachWord.length)].toUpperCase())
  }, []);

console.log(word)

  function getScore(numberOfAttempt: number, numberOfHelps: number){
    setScore(score - (numberOfAttempt * 14) - (numberOfHelps * 25) )
  }
  function submitWord() {

    const error = document.getElementById('error-message');
    const inputElement: HTMLInputElement | null = document.getElementById('input') as HTMLInputElement;
    if(inputElement.value === ''){
      error!.textContent = 'Please type word'

    }
    // else if(!eachWord.includes(inputElement.value)){
    //   error!.textContent = 'Such a word is not found in the database '
    // }
    
    
    else if(inputElement.value.length !== word.length){
      error!.textContent = 'Number of letter is different'
    }

    else if (inputElement) {
      const inputValue: string = inputElement.value.toUpperCase();
      setInput(inputValue);
      setGuesses([...guesses, inputValue])
      setCount(count + 1);
      if(inputValue === word){
        setResult('result1');
        getScore(count, helps)
      }
      if(count === 5 ){
        setResult('result1');
        getScore(count, helps);
      }
      
    } else {
      console.error('Input element not found');
    };
    inputElement.value = ''
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      submitWord();
    }
  };


  return (
    <div className='app'>

      <div style={{display:'flex'}}>
        <div>
          <div>
            <input type='text' id='input' onKeyDown={handleKeyDown}></input>
            <div id='error-message'></div>
          </div>
          <div id='append-rows'>
            <Row 
            words = {guesses}
            hiddenWord = {word}
            />
            
          </div>
            <Board
            array = {keys}
            word = {word}
            guesses = {guesses}
            />
        </div>

        <div>
          <Help
          word = {word}
          letters={letters}
          setLetter={setLetter}
          setHelps={setHelps}
          />
        </div>
          
      </div>

        <div className={result}>
            <h1>The unswer is</h1>
            <h2>{word}</h2>
            <h3>Your Score:</h3>
            <h2>{score}</h2>
            <button
            onClick={refreshPage}
            >AGAIN</button>
        </div>
    </div>
  );
}

export default App;
