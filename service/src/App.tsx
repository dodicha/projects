import React, { useEffect, useState } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { users, user } from './components/users';
function App() {
  const [showSignUp, setShowSignUp] = useState<string>('none')
  const [count, setCount] = useState<number>(0)

  useEffect(()=>{
    if(count>0){
      alert('Account created successfully')
    }
  }, [count])

  // console.log(users);


  return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
          <div className='logo'>
          </div>
            <SignIn
               showSignUp = {showSignUp}
               setShowSignUp = {setShowSignUp}
            />
            <SignUp 
              count = {count}
              setCount = {setCount}
              showSignUp = {showSignUp}
              setShowSignUp = {setShowSignUp}
              users = {users}
              user = {user}
            />
      </div>
        
  );
}

export default App;
