import React, { useEffect, useState, createContext } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import { users, ContextProps } from './components/types';
import { Route, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import UserPage from './components/UserPage';




export const myContext = createContext<ContextProps>({
  users : [],
  count: 0,
  setCount: ()=>{},
  userPanel: false,
  setUserPanel: ()=>{},
  setShowSignUp: ()=>{},
  showSignUp: 'none'

});
function App() {

  const [count, setCount] = useState<number>(0);
  const [userPanel, setUserPanel] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<string>('none');


  const value = {
    count: count,
    setCount: setCount,
    users: users,
    userPanel: userPanel,
    setUserPanel: setUserPanel,
    setShowSignUp: setShowSignUp,
    showSignUp: showSignUp
  }

  useEffect(()=>{
    if(count>0){
      alert('Account created successfully')
    }
  }, [count])

  console.log(users);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<SignIn />} />
        <Route 
          path='/user/:id'
          element={<UserPage />} />
      </Route>
    )
  )


  return (
 
    <myContext.Provider value={value}>
      <RouterProvider router={router}/>
    </myContext.Provider>
        
  );
}

export default App;
