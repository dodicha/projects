import { useContext, useEffect, useState } from "react"
import { MainContext } from "../MainContext";
import { styled } from "styled-components";
import { order } from "../data";
import AddButton from "./AddButton";
import AddWindow from "./AddWindow";
import Awaiting from "./Awaiting";
import OnGoing from "./OnGoing";
import Done from "./Done";



export default function ManagerOfProduction (){
    const { count, setCount, windowOn, setWindowOn, setOrderData, orderData, setOrderCount, orderCount } = useContext(MainContext);
    
    useEffect(()=>{
        localStorage.setItem('orderData', JSON.stringify(orderData));

    }, [orderData, orderCount, count])

    return (
        <div style={{position: 'relative', display: 'flex', width: '100%'}}>  
            <AddButton/>
            { windowOn ?  <AddWindow /> : null}
            <div style={{width: '100%', marginTop: '70px', marginLeft: '-170px', display: 'flex'}}>
                <Awaiting />
                <OnGoing/>
                <Done/>
            </div>

        </div>
    )
}

