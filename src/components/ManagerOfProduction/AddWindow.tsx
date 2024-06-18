import { useContext, useEffect, useState } from "react"
import { MainContext } from "../MainContext";
import { styled } from "styled-components";
import { order } from "../data";


const Window = styled.div`
    width: 40%;
    height: max-content;
    background-color: aqua;
    position: absolute;
    margin-left: 30%;
    margin-top: 71px;
    /* padding: auto; */
`
const Company = styled.input`
    width: 200px;
    height: 30px;
    margin-bottom: 15px;
`
const InvNumber = styled.input`
    width: 100px;
    height: 30px;
`
const Materials = styled.button`
    width: 100px;
    height: 30px;
    margin: 5px;
`
const EndDate = styled.input`
    width: 100px;
    height: 20px;
    margin-top: 15px;
`
const Discriptio = styled.textarea`
    width: 300px;
    height: 150px;
    background-color: #ffffff;
    display: block;
    margin-top: 15px;
`
const SaveButton = styled.button`
    width: 80px;
    height: 23px;
    background-color: green;
    margin-top: 15px;
    &:hover{
        background-color: #3dc33d;
    }
`
export default function AddWindow(){
    const { windowOn, setWindowOn, setOrderData, orderData, setOrderCount, orderCount } = useContext(MainContext);

    function GetMaterialButtons(){
        const materials: string[] = ["material1", 'material2', 'material3'];
        const allMaterials = materials.map((e, index)=>{
            return <Materials 
            key={index} 
            onClick={()=>{
                console.log(e)
                // localStorage.clear();
                // get material name and set to the data;
            }}
            >{e}</Materials>
        });
        return (
            <div>
                {allMaterials}
            </div>
        )
    };
    function saveOrder(){
        const company = document.getElementById('company') as HTMLInputElement
        const inv = document.getElementById('inv') as HTMLInputElement
        const endDate = document.getElementById('endDate') as HTMLInputElement
        const discription = document.getElementById('discription') as HTMLInputElement
        const newOrder = new order(company.value, +inv.value, endDate.value, discription.value, 'awaiting');
        setOrderData([...orderData, newOrder]);
        setWindowOn(!windowOn)
        setOrderCount(orderCount + 1);
        console.log(orderData)
    }

    return(
        <>
            { windowOn ? 
                
                <Window id="addWindow">

                    <Company id="company" placeholder="Company/Person"/>
                    <InvNumber id="inv" placeholder="INV N:" type="number"/>
                    {/* <GetMachinebuttons/> */}
                    <GetMaterialButtons />
                    <EndDate id="endDate" type="date" placeholder="start date"/>
                    <Discriptio id="discription" placeholder="Order Description"/>
                    <SaveButton 
                    onClick={saveOrder}
                    >
                        SAVE
                    </SaveButton>
            </Window>  : null
            }
        </>
    )
}







   


           