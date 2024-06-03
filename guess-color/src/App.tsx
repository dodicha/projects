import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';


const colorArray: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function getRandomColor(){
    let color: string = new Array(6).fill('').map(()=> colorArray[Math.floor(Math.random() * 16)]).join('');
    return `#${color}`
  };




function App() {
  const [currentColor, setCurrentColor] = useState('');
  const [answer, setAnswer] = useState('');
  const colorArray = [currentColor, getRandomColor(), getRandomColor()];
  let shuffledArray = colorArray.sort();

  useEffect(()=>{
    setCurrentColor(getRandomColor());
  },[]);

  function getAnswer(color: string){
      if(color ===currentColor ){
        //set Correct answer
        setAnswer('Correct');
        setCurrentColor(getRandomColor());
      }else{
        // set wrong answer
        setAnswer('Wrong');
        setCurrentColor(getRandomColor());
      };
  };

function Buttons (){
  
  return (
    <div>
      {shuffledArray.map((el) => (
        <button 
        key={el}
        onClick={
          ()=> getAnswer(el)
        }
        >{el}</button>
      ))}
    </div>
  );
};


  return (
    <div>
      <div id='content'
       style={{background: currentColor}}
       >
      
      </div>
      <Buttons />
      <h3 id='answer'> {answer} </h3>
    </div>
    
  );
}

export default App;
