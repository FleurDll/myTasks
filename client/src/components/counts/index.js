import React from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";
import CircleProgress from './CircleProgress';

import { CountsContainer, CountWrapper, Row1, Row2, CountAbout } from './CountsElements';

const Counts = ({ allTasksCount, backendTasksCount, frontendTasksCount }) => {
    const areDataLoaded = () => {
        if (allTasksCount !== null && backendTasksCount !== null && frontendTasksCount !== null) return true;
    };

    return (
        <>
            {areDataLoaded &&
                <CountsContainer>
                    <Row1>
                        <CountWrapper>
                            <CountAbout>Total</CountAbout>
                            <CircleProgress count={allTasksCount} maxValue="75" />
                        </CountWrapper>
                    </Row1>
                    <Row2>
                        <CountWrapper>
                            <CountAbout>Frontend</CountAbout>
                            <CircleProgress count={frontendTasksCount} maxValue="50" />
                        </CountWrapper>
                        <CountWrapper>
                            <CountAbout>Backend</CountAbout>
                            <CircleProgress count={backendTasksCount} maxValue="50" />
                        </CountWrapper>
                    </Row2>
                </CountsContainer>
            }
        </>
    )
};

const mapStateToProps = ({ tasks }) => {
    return {
        tasksList: tasks.tasksList,
        allTasksCount: tasks.allTasksCount,
        backendTasksCount: tasks.backendTasksCount,
        frontendTasksCount: tasks.frontendTasksCount,
    };
};

export default connect(mapStateToProps, actions)(Counts);