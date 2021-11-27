import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Modal from "../modal";
import { AddTaskContainer, AddTaskInputWrapper, AddTaskInput, AddTaskButtonWrapper, AddTaskButton } from "./AddTaskElements";

import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({ authId, addTask, fetchTasks, fetchAllTasksCount, fetchBackendTasksCount, fetchFrontendTasksCount, tasksList }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        type: "",
        difficulty: ""
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleAddTask = (event) => {
        event.preventDefault();

        if (tasksList.filter(task => task.name === inputs.name).length > 0) {
            alert("This task is already saved")
        } else {
            const payload = {
                name: inputs.name,
                type: inputs.type,
                difficulty: inputs.difficulty,
                date: startDate.toLocaleDateString()
            };

            if (authId === "110515974302084909828" && payload.name !== "" && payload.type !== "" && payload.difficulty !== "") {
                addTask(payload);
                fetchTasks();
                fetchAllTasksCount();
                fetchBackendTasksCount();
                fetchFrontendTasksCount();

                setInputs({
                    name: "",
                    type: "",
                    difficulty: ""
                });
                setStartDate(new Date());
            } else {
                setShowModal(true);
            }
        }
    }

    return (
        <AddTaskContainer>
            <AddTaskInputWrapper>
                <AddTaskInput autoComplete="off" name="name" placeholder="Name" value={inputs.name}
                    onChange={handleChange} />
                <AddTaskInput autoComplete="off" name="type" type="text" list="type" placeholder="Type" value={inputs.type}
                    onChange={handleChange} />
                <datalist id="type">
                    <option>Backend</option>
                    <option>Frontend</option>
                </datalist>
                <AddTaskInput autoComplete="off" name="difficulty" type="text" list="difficulty" placeholder="Difficulty" value={inputs.difficulty}
                    onChange={handleChange} />
                <datalist id="difficulty">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </datalist>
                <DatePicker className="date-picket-input" name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
            </AddTaskInputWrapper>

            <AddTaskButtonWrapper>
                <AddTaskButton onClick={handleAddTask}>+</AddTaskButton>
            </AddTaskButtonWrapper>

            <Modal
                title="Oups"
                text="You are not allowed, sorry."
                onClose={() => setShowModal(false)}
                show={showModal}
                buttonText="Close"
                handeButtonClicked={() => setShowModal(false)}
            />
        </AddTaskContainer>
    )
};

const mapStateToProps = ({ tasks, auth }) => {
    return {
        authId: auth.userId,
        tasksList: tasks.tasksList
    };
};

export default connect(mapStateToProps, actions)(AddTask);

