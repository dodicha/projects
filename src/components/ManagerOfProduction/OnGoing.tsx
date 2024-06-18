import { useContext } from "react";
import { styled } from "styled-components";
import { MainContext } from "../MainContext";


const Main = styled.div`
    width: 30%;
    height: max-content;
    border-radius: 15px;
    border: 3px solid #d2ed09;
`;
const OngoingHeader = styled.h3`
    color: #d2ed09;
    text-align: center;
`;
const OnGoingList = styled.h3`
    margin: 5px;
    border: 1px solid black;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
`;
export default function OnGoing(){
    const { count, setCount, windowOn, setWindowOn, setOrderData, orderData, setOrderCount, orderCount } = useContext(MainContext);

    function OnGoingOrders(){
        const OnGoingOrders = orderData.map((e, index)=>{
            if(e.status === 'OnGoing'){
                return <OnGoingList key={index}>{e.company} INV: {e.inv} </OnGoingList>
            }
        })
        return(
            <div>
                {OnGoingOrders}
            </div>
        )
    }


    return(
        <Main>
            <OngoingHeader>
                On Going
            </OngoingHeader>

            <OnGoingOrders />
        </Main>
    )
}