import styled, { css } from "styled-components";
import { COLORS } from "../../constantStyles";
import { TiDelete } from "react-icons/ti"

export const TaskRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const styledTaskData = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.darkGrey};
    padding: 10px;
    margin: 7px;
    height: 40px;
    width: 150px;
    color: ${COLORS.ligthGrey};
`;


export const TaskData = styled.div`
    ${styledTaskData}
`

export const TaskDataAnchor = styled.a`
    ${styledTaskData}

    &:hover {
        color: ${COLORS.purple};
    }
`
export const DeleteWrapper = styled.div``;

export const DeleteIcon = styled(TiDelete)`
    font-size: 35px;
    color:  ${COLORS.white};

    &:hover {
        color: ${COLORS.purple};
        cursor: pointer;
    }
`;