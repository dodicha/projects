import { useEffect, useState  } from 'react';
import { Navigate, useParams } from "react-router-dom";
import { user, users } from './types';

export default function UserPage () {
    const userID = useParams().id;
    console.log(userID)
    console.log(users);

    return (
        <div>
            <h1>
                hello, this is ID {userID}
            </h1>
             <div>
                {/* {users[0].firstName} */}
             </div>
             <button
             onClick={()=>{
                console.log(users);
             }}
             >console</button>
            

        </div>
    )
}
