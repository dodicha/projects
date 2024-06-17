import { useContext, useEffect, useState } from "react"
import { MainContext } from "./MainContext";
import { styled } from "styled-components";
import { order } from "./data";


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

const AddWindow = styled.div`
    display: none;
    width: 40%;
    height: max-content;
    background-color: aqua;
    position: absolute;
    margin-left: 30%;
    margin-top: 70px;
    /* padding-left: %; */
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
const Machines = styled.button`
    width: 100px;
    height: 30px;
    margin: 5px;
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






const Awaiting = styled.div`
    
`;


const OnGoing = styled.div`
    
`

const Done = styled.div`
    
`;
const Save = styled.button`
    // on save button setOrderCount(orderCount + 1 );
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




export default function ManagerOfProduction (){
    const { count, setCount } = useContext(MainContext);
    const [orderCount, setOrderCount] = useState(()=>{
        const currentOrdercount = localStorage.getItem('ordecount')
        return currentOrdercount ? Number(currentOrdercount) : 0
    });
    

    

    function GetMachinebuttons(){
        const machines: string[] = ['machine1', 'machine2', 'machine3'];
        const allMachines = machines.map((e, index)=>{
            return <Machines key={index}>{e}</Machines>
        })
        return (
            <div>
                {allMachines}
            </div>
        )
    };
    function GetMaterialButtons(){
        const materials: string[] = ["material1", 'material2', 'material3'];
        const allMaterials = materials.map((e, index)=>{
            return <Materials 
            key={index} 
            onClick={()=>{
                console.log(e)
                // get material name and set to the data;
            }}
            >{e}</Materials>
        });
        return (
            <div>
                {allMaterials}
            </div>
        )
    }

    function  addOrder(){
        const addWindow = document.getElementById('addWindow') as HTMLElement
        addWindow.style.display = 'block';
        
    };
    function saveOrder(){
        const company = document.getElementById('company') as HTMLInputElement
        const inv = document.getElementById('inv') as HTMLInputElement
        const endDate = document.getElementById('endDate') as HTMLInputElement
        const discription = document.getElementById('discription') as HTMLInputElement
        console.log(company.value, inv.value, endDate.value, discription.value);
        const newOrder = new order(company.value, +inv.value, endDate.value, discription.value)
    }

    return (
        <div style={{position: 'relative', display: 'flex', width: '100%'}}>
           <Add 
           onClick={addOrder}
           >
            New Order +
           </Add>
           <AddWindow id="addWindow">
                <Company id="company" placeholder="Company/Person"/>
                <InvNumber id="inv" placeholder="INV N:" type="number"/>
                {/* <GetMachinebuttons/> */}
                <GetMaterialButtons />
                <EndDate id="endDate" type="date" placeholder="start date"/>
                <Discriptio id="discription" />
                <SaveButton 
                onClick={saveOrder}
                >
                    SAVE
                </SaveButton>
           </AddWindow>
        </div>
    )
}

