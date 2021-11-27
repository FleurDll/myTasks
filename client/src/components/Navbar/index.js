import React from 'react';
import { connect } from "react-redux";
import GoogleAuth from "../googleAuth";
import { NavbarContainer, NavbarTitle, NavbarLeft, NavbarRight, NavbarItem, NavbarAnchor } from "./NavbarElements"

const Navbar = ({ authId }) => {
    return (
        <NavbarContainer>
            <NavbarLeft>
                <NavbarTitle>
                    <NavbarAnchor href="/">My Tasks</NavbarAnchor>
                </NavbarTitle>
            </NavbarLeft>

            <NavbarRight>
                {authId === "110515974302084909828" &&
                    <NavbarItem>
                        <NavbarAnchor href="/history">History</NavbarAnchor>
                    </NavbarItem>
                }
                <GoogleAuth />
            </NavbarRight>
        </NavbarContainer>
    );
};

const mapStateToProps = ({ tasks, auth }) => {
    return {
        authId: auth.userId
    };
};

export default connect(mapStateToProps, null)(Navbar);