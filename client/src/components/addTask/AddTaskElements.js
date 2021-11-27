import styled from "styled-components";
import { COLORS } from "../../constantStyles";

export const AddTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AddTaskInputWrapper = styled.div`
    display: flex;
`

export const AddTaskInput = styled.input`
    padding: 10px;
    margin: 5px;
    background-color: ${COLORS.darkGrey};
    border: none;
    outline: none;
    color: ${COLORS.grey};
`

export const AddTaskButtonWrapper = styled.div`
`

export const AddTaskButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height : 35px;
    width : 35px;
    margin: 20px;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: ${COLORS.purple};
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.darkMode};

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: ${COLORS.grey};
    }
`