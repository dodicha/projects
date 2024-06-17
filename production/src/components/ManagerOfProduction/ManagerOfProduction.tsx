import { useContext, useEffect, useState } from "react"
import { MainContext } from "../MainContext";
import { styled } from "styled-components";
import { order } from "../data";


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
    width: 40%;
    height: max-content;
    background-color: aqua;
    position: absolute;
    margin-left: 30%;
    margin-top: 70px;
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
    width: 30%;
    height: max-content;
    border-radius: 15px;
    border: 3px solid red;
`;

const AwaitingHeader = styled.h3`
    color: red;
    text-align: center;
`
const Awaitinglist = styled.div`
    /* text-align: center; */
    margin: 5px;
    border: 1px solid black;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
`


const OnGoing = styled.div`
    width: 30%;
    height: max-content;
    border-radius: 15px;
    border: 3px solid #d2ed09;
`
const OngoingHeader = styled.h3`
    color: #d2ed09;
    text-align: center;
`
const Done = styled.div`
    width: 30%;
    height: max-content;
    border-radius: 15px;
    border: 3px solid green;
`;
const DoneHeader = styled.h3`
    color: green;
    text-align: center;
`
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
    const [orderData, setOrderData] = useState<order[]>(()=>{
        const storedData = localStorage.getItem('orderData');
        return storedData ? JSON.parse(storedData) : []
    })
    const [windowOn, setWindowOn] = useState(false)

    useEffect(()=>{
        localStorage.setItem('orderData', JSON.stringify(orderData));
        console.log(orderData)
        // localStorage.clear();
    }, [orderData])



    // function GetMachinebuttons(){
    //     const machines: string[] = ['machine1', 'machine2', 'machine3'];
    //     const allMachines = machines.map((e, index)=>{
    //         return <Machines key={index}>{e}</Machines>
    //     })
    //     return (
    //         <div>
    //             {allMachines}
    //         </div>
    //     )
    // };
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
        setWindowOn(!windowOn)
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
    }

    function AwaitingOrders (){
        const AwaitingOrders = orderData.map((e, index)=>{
            if(e.status === 'awaiting'){
                return <Awaitinglist key={index}>{e.company} INV: {e.inv}</Awaitinglist>
            }
        })
        console.log(orderData)


        return (
            <div >
                {AwaitingOrders}
            </div>
        )
    }





    return (
        <div style={{position: 'relative', display: 'flex', width: '100%'}}>
                <Add 
                    onClick={addOrder}
                >
                New Order +
                </Add>
           

            { windowOn ? 
            
            <AddWindow id="addWindow">
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
           </AddWindow>  : null}

            <div style={{width: '100%', marginTop: '70px', marginLeft: '-170px', display: 'flex'}}>
                <Awaiting>
                    <AwaitingHeader>
                        Awaiting
                    </AwaitingHeader>
                    <AwaitingOrders/>
                </Awaiting>
                <OnGoing>
                    <OngoingHeader>
                        On Going
                    </OngoingHeader>
                </OnGoing>
                <Done>
                    <DoneHeader>
                        Done
                    </DoneHeader>
                </Done>
            </div>
                

           




        </div>
    )
}

