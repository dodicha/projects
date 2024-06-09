import React, { useEffect, useState, createContext } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import { users, ContextProps, user } from './components/types';
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
  showSignUp: 'none',
  setUsersArray: ()=>{},
  usersArray: []
});



function App() {

  const [count, setCount] = useState<number>(0);
  const [userPanel, setUserPanel] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<string>('none');
  const [usersArray, setUsersArray] = useState<user[]>(()=>{
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const value = {
    count: count,
    setCount: setCount,
    users: users,
    userPanel: userPanel,
    setUserPanel: setUserPanel,
    setShowSignUp: setShowSignUp,
    showSignUp: showSignUp,
    setUsersArray: setUsersArray,
    usersArray: usersArray
  }

  

  useEffect(()=>{
    if(count>0){
      localStorage.setItem('users', JSON.stringify(usersArray));
      alert('Account created successfully');
      let usr = localStorage.getItem('users') as string
      usr = JSON.parse(usr);
      console.log('test render',  usr);
    }
  }, [count])

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
