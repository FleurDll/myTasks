import styled from "styled-components";
import { COLORS } from "../../constantStyles";
import { ImCross } from "react-icons/im";

export const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;

    opacity: ${({ show }) => (show ? "1" : "")};
    pointer-events: ${({ show }) => (show ? "visible" : "invisible")};
`;

export const ModalContent = styled.div`
    width: 500px;
    background-color: ${COLORS.darkGrey};
    transition: all 0.3s ease-in-out;
    border-radius: 0.1875rem;
    letter-spacing: .05rem;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const ModalTitle = styled.p`
    color: ${COLORS.white};
    font-size: 30px;
    font-weight: bold;
`;

export const ModalBody = styled.div`
    padding: 10px;
    border-top: 1px solid ${COLORS.grey};;
    color: ${COLORS.white};
    font-size: 20px;
`;

export const ModalFooter = styled.div`
    padding: 10px;
`;

export const ModalCloseButton = styled.button`
    border: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    color: ${COLORS.white};
    border-radius: 50px;
    background: ${COLORS.darkMode};
    padding: 12px;
    text-align: center;
    letter-spacing: 1px;
    box-shadow: rgb(0 0 0 / 30%) 0px 0.0625rem 0.1875rem 0px;
    cursor: pointer;
    float: right;

    &:hover{
        background: ${COLORS.purple};
        color: ${COLORS.darkMode};
    }
`;

export const CloseIcon = styled(ImCross)`
    font-size: 20px;
    cursor: pointer;

    &:hover{
        color: ${COLORS.purple};
    }
`;