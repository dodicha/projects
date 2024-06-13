import { useContext, useEffect, useRef } from 'react'
import { MainContext } from './MainContext';


export default function Test(){
    const { count, setCount } = useContext(MainContext);

    // const firstRender = useRef(true);

   



    function increment (){
        
        localStorage.setItem('count', `${count}`)
        setCount(Number(localStorage.getItem('count')) + 1);
        console.log('localStorage', localStorage.getItem('count'));
        console.log('Count: ',{count})
    }

    return(
        <div>
            <button
            onClick={increment}
            >
            increment
            </button>
            <button 
            onClick={()=>{
                localStorage.clear();
                console.log('localStorage: ', localStorage.getItem('count'))
                console.log('count: ', {count})
                
            }}
            >
                console
            </button>
            <h1>Count: {Number(localStorage.getItem('count'))}</h1>
        </div>
        
    )
}