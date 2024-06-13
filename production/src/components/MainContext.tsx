import React, { createContext, useState, ReactNode } from 'react';

interface ContextProps {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }

export const  MainContext = createContext<ContextProps> ({
    count: 0,
    setCount: ()=> {}
}) 

export const MainProvider : React.FC<{ children: ReactNode }> = ({children}) => {
    const [count, setCount] = useState(()=>{
        const storedNumber = localStorage.getItem('count');
        return storedNumber ? Number(storedNumber) : 0;
    });


    const contextValue = {
        count,
        setCount,
    }

    return(
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    )
}