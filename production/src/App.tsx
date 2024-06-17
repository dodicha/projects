import { useState, useEffect, createContext } from 'react'
import { styled } from 'styled-components'
import { Route, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './components/HomePage';
import Test from './components/test';
import { MainProvider } from './components/MainContext';
import ManagerOfProduction from './components/ManagerOfProduction';
import HeadOfProduction from './components/HeadOfProduction';
import ProductionOperator from './components/ProductionOperator';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Manager-of-production' element={<ManagerOfProduction/>}/>
          <Route path='/Head-of-production' element={<HeadOfProduction/>}/>
          <Route path='/Production-operator' element={<ProductionOperator/>}/>
          <Route path='/test' element={<Test />}/>
    </Route>
  )
);

function App() {
  
  return (
    <MainProvider>
      <RouterProvider router={router}/>
    </MainProvider>
  )
}

export default App
