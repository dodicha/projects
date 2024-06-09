import { useEffect, useState, useContext  } from 'react';
import { Navigate, useParams } from "react-router-dom";
import { user, users } from './types';
import { count } from 'console';
import { myContext } from '../App';

export default function UserPage () {
    const userID = Number(useParams().id) 
    const { usersArray } = useContext(myContext);
   


    return (
        <div>
            <h1>
                hello, i am {usersArray[userID].firstName} {usersArray[userID].lastName}
            </h1>
             <div>
                {/* {users[0].firstName} */}
             </div>
             <button
             onClick={()=>{
                console.log(usersArray[userID]);
             }}
             >console</button>

        </div>
    )
}
