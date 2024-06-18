import { styled } from "styled-components";

const Main = styled.div`
    width: 30%;
    height: max-content;
    border-radius: 15px;
    border: 3px solid green;
`;
const DoneHeader = styled.h3`
    color: green;
    text-align: center;
`;

export default function Done(){
    return (
        <Main>
            <DoneHeader>
                 Done
            </DoneHeader>
        </Main>
    )
}