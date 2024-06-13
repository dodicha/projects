import { useState, useEffect, createContext } from 'react'
import { styled } from 'styled-components'
import { Route, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './components/HomePage';
import Test from './components/test';
import { MainProvider } from './components/MainContext';


const position: string[] = ['Manager of production', 'Head of production', 'Production operator'];


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/test' element={<Test />}/>
    </Route>
    
  )
)


function App() {
  
  return (
    <MainProvider>
      <RouterProvider router={router}/>
    </MainProvider>
      
  )
}

export default App
