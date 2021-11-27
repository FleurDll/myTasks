import React, { useEffect } from 'react';
import { ModalContainer, ModalContent, ModalHeader, ModalTitle, CloseIcon, ModalBody, ModalFooter, ModalCloseButton } from "./ModalElements";

const Modal = ({ onClose, handeButtonClicked, show, title, text, buttonText }) => {
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charcode || e.keyCode) === 27) {
            onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ModalContainer onClick={onClose} show={show}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <CloseIcon onClick={onClose} />
                </ModalHeader>
                <ModalBody>{text}</ModalBody>
                <ModalFooter>
                    <ModalCloseButton onClick={handeButtonClicked}>{buttonText}</ModalCloseButton>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>

    );
};

export default Modal;