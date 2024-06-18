import { useContext } from "react";
import { MainContext } from "../MainContext";
import { styled } from "styled-components";
import { order } from "../data";

const Main = styled.div`
    width: 30%;
    height: max-content;
    border-radius: 15px;
    border: 3px solid red;
`;
const AwaitingHeader = styled.h3`
    color: red;
    text-align: center;
`;
const Awaitinglist = styled.div`
    /* text-align: center; */
    margin: 5px;
    border: 1px solid black;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
`;
const Confirm = styled.button`
    float: right;
    height: 25px;
    border-radius: 5px;
    background-color: #d2ed09;
    &:hover{
        background-color: green;
    }
`;
export default function Awaiting(){
    const { count, setCount, setOrderData, orderData } = useContext(MainContext);

    function confirm(obj: order){
        obj.status = 'OnGoing';
        console.log(orderData)
        setOrderData(orderData);
        setCount(count+1)
        
    }
    function AwaitingOrders (){
        const AwaitingOrders = orderData.map((e, index)=>{
            if(e.status === 'awaiting'){
                return <Awaitinglist key={index}>{e.company} INV: {e.inv} <Confirm onClick={()=>{confirm(e)}}>Confirm</Confirm> </Awaitinglist>
            }
        });

        return (
            <div >
                {AwaitingOrders}
            </div>
        )
    }
    
    
    return (
        <Main>
            <AwaitingHeader>
                Awaiting
            </AwaitingHeader>

            <AwaitingOrders/>
                    
        </Main>
    )
}