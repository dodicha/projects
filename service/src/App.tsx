import React, { useEffect, useState } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import { users, user } from './components/users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Best from './components/Best';
function App() {

  const [count, setCount] = useState<number>(0);
  const [userPanel, setUserPanel] = useState<boolean>(false);

  useEffect(()=>{
    if(count>0){
      alert('Account created successfully')
    }
  }, [count])

  console.log(users);

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<SignIn  count={count} setCount={setCount} users={users} userPanel={userPanel} setUserPanel={setUserPanel}/>} />
          <Route path='/user'element={<Best />} />
        </Routes>
      </BrowserRouter>
    
  
        
  );
}

export default App;
