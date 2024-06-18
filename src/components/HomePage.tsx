import { useContext } from 'react'
import { MainContext } from './MainContext';
import Test from './test';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const position: string[] = ['Manager of production', 'Head of production', 'Production operator', 'Test'];

const ChoosePosition = styled.button`
    background-color: #179e2b;
    height: 60px;
    width: 250px;
    border-radius: 20px;
    border-color: black;

    &:hover{
        background-color: #36e851;
        color: white;
        border: none;
        transition: 0.3s;
    }
`;
const Header = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    gap: 40px;
    padding: 100px;
`

export default function HomePage(){
    const navigate = useNavigate();
    function heandleRoute(event: any){
        let target = event.target.textContent;
        const path = target.split(' ').join('-');
        console.log(path)
        navigate(`/${path}`)
    }
    
    function PositionList (){
        const positions = position.map((e, index) => {
            return <ChoosePosition key={index} onClick={heandleRoute}>{e}</ChoosePosition>
        })
        return (
            <Header> 
                {positions}
            </Header>
        )
    };

    return(
            <PositionList/>
    )
}





// {Number(localStorage.getItem('count'))}