import React from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";
import { TaskRow, TaskDataAnchor, TaskData, DeleteWrapper, DeleteIcon } from "./HistoryElements"

const History = ({ tasksList, authId, deleteTask, fetchTasks }) => {
    const onDeleteClick = (taks) => {
        deleteTask(taks._id);
        fetchTasks();
    };

    tasksList.sort((a, b) => {
        const nameA = Number(a.name.slice(4));
        const nameB = Number(b.name.slice(4));
        return nameB - nameA;
    });

    const rowOfData = tasksList.map(task => {
        return (
            <TaskRow key={task.name} >
                <TaskDataAnchor href={`https://mphase.atlassian.net/browse/${task.name}`} target="_blank">{task.name}</TaskDataAnchor>
                <TaskData>{task.type}</TaskData>
                <TaskData>{task.difficulty}</TaskData>
                <TaskData>{task.date}</TaskData>
                <DeleteWrapper >
                    {authId === "110515974302084909828" && <DeleteIcon onClick={() => { onDeleteClick(task) }} />}
                </DeleteWrapper>
            </TaskRow>
        )
    });

    return (
        <>
            {rowOfData}
        </>
    );
};

const mapStateToProps = ({ tasks, auth }) => {
    return {
        tasksList: tasks.tasksList,
        authId: auth.userId
    };
};

export default connect(mapStateToProps, actions)(History);