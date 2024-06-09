import { user, users } from "./types";
import SignUp from "./SignUp";
import { useEffect, useState, useContext } from 'react';
import { Navigate } from "react-router-dom";
import { myContext } from "../App";
  function checkUser(typeEmail: HTMLInputElement, typePassword: HTMLInputElement){
    // console.log(typeEmail.value);
    // console.log(typePassword.value);
    const user = users.filter((e)=>{
      if(e.email === typeEmail.value && e.password === typePassword.value){
        return e
      }
    })
    return user
  }



export default function SignIn() {
  const  {count, setCount, users, userPanel, setUserPanel, setShowSignUp, showSignUp} = useContext(myContext);
  const email = document.getElementById('sign-in-email') as HTMLInputElement
  const password = document.getElementById('sign-in-password') as HTMLInputElement;
  if(userPanel){
    const path = checkUser(email, password)[0].id;
    return <Navigate to={`/user/${path}`} />
  }
  
  function handleCreateClick(){
    setShowSignUp('block')
  }

  function handleSignClick(){
    const res = document.getElementById('res') as HTMLInputElement;
    if(checkUser(email, password).length > 0){
      setUserPanel(true);
    }else{
      res.textContent = `Email or Password is incorrect!`
    }
  }


  return (

    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>

      <div style={{display: 'flex'}}>
        <div className='logo'></div>

        <div className="sign">
          
          <form id="sign-in-form">
            <input id="sign-in-email" type="email" placeholder="Email"></input>
            <input id="sign-in-password" type="password" placeholder="Password"></input>
            <button 
            onClick={(e)=>{
              e.preventDefault();
              handleSignClick();
            }}
            >Log In</button>
            <h4 id="res"></h4>
            <hr style={{ width: "300px", marginTop: "30px" }}></hr>
          </form>

          <button
          id="create-acc-btn"
          onClick={handleCreateClick}
          >Create new Account</button>
        </div>
        <SignUp 
        />
      </div>
      

    </div>



    



    
  );
}
