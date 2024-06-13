import { useContext } from 'react'
import { MainContext } from './MainContext';


export default function HomePage(){

    return(
        <>
        <h1>Home Page</h1>
           <div>
            Count: {Number(localStorage.getItem('count'))}
           </div>
        </>
        
    )
}