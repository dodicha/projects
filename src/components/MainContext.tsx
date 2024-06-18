import React, { createContext, useState, ReactNode } from 'react';
import { order } from './data';

interface ContextProps {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>;
    windowOn: boolean,
    setWindowOn: React.Dispatch<React.SetStateAction<boolean>>;
    setOrderData: React.Dispatch<React.SetStateAction<order[]>>;
    orderData: order[];
    setOrderCount: React.Dispatch<React.SetStateAction<number>>;
    orderCount: number
  }

export const  MainContext = createContext<ContextProps> ({
    count: 0,
    setCount: ()=> {},
    windowOn: false,
    setWindowOn: ()=>{},
    setOrderData: ()=>{},
    orderData: [],
    orderCount: 0,
    setOrderCount: ()=>{}
}) 

export const MainProvider : React.FC<{ children: ReactNode }> = ({children}) => {
    const [count, setCount] = useState(()=>{
        const storedNumber = localStorage.getItem('count');
        return storedNumber ? Number(storedNumber) : 0;
    });
    const [orderData, setOrderData] = useState<order[]>(()=>{
        const storedData = localStorage.getItem('orderData');
        return storedData ? JSON.parse(storedData) : []
    })
    const [orderCount, setOrderCount] = useState(()=>{
        const currentOrdercount = localStorage.getItem('ordecount')
        return currentOrdercount ? Number(currentOrdercount) : 0
    });

    const [windowOn, setWindowOn] = useState(false)

    const contextValue = {
        count,
        setCount,
        windowOn,
        setWindowOn,
        orderData,
        setOrderData,
        orderCount,
        setOrderCount
    }

    return(
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    )
}