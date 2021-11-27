import styled from "styled-components";
import { COLORS } from "../../constantStyles";

export const NavbarContainer = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    background-color: ${COLORS.darkGrey};
    height: 70px;
    padding: 0 20px;
`;

export const NavbarLeft = styled.div`
`;

export const NavbarRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavbarTitle = styled.h1`
    color: ${COLORS.purple};
`;

export const NavbarItem = styled.h2`
    color: ${COLORS.ligthGrey};
    margin: 0 10px;

    &:hover {
        color: ${COLORS.purple};
    }
`;

export const NavbarAnchor = styled.a`
`;
