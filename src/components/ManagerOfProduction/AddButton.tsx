import { useContext, useEffect, useState } from "react"
import { styled } from "styled-components";
import { MainContext } from "../MainContext";

const Add = styled.button`
    background-color: green;
    font-weight: bold;
    font-size: 20px;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    &:hover{
        background-color: #5cd15c;
        border-color: #5cd15c;
    }
`;

export default function AddButton(){
    const {windowOn, setWindowOn} = useContext(MainContext);

    function  addOrder(){
        setWindowOn(!windowOn)
    };
    
    return(
        <Add
        onClick={addOrder}
        >
            New Order +
        </Add>
    )
}