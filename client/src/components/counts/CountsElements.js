import styled from "styled-components";
import { COLORS } from "../../constantStyles";

export const CountsContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
`;

export const Row2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
 `;

export const Row1 = styled.div`
    display: flex;
    justify-content: center;
`;

export const CountWrapper = styled.div`
    text-align: center;
`;

export const CountAbout = styled.p`
    color: ${COLORS.ligthGrey};
    font-weight: bold;
`;

export const Circle = styled.div` 
    margin: 10px 50px;   
    width: 140px;
`;

