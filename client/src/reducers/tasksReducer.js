/* eslint-disable import/no-anonymous-default-export */
import { GET_TASKS, GET_ALL_TASKS_COUNT, GET_BACKEND_TASKS_COUNT, GET_FRONTEND_TASKS_COUNT } from "../actions/types"

const INITIAL_STATE = {
    tasksList: [],
    allTasksCount: null,
    backendTasksCount: null,
    frontendTasksCount: null
};


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_TASKS:
            return { ...state, tasksList: action.payload };
        case GET_ALL_TASKS_COUNT:
            return { ...state, allTasksCount: action.payload };
        case GET_BACKEND_TASKS_COUNT:
            return { ...state, backendTasksCount: action.payload };
        case GET_FRONTEND_TASKS_COUNT:
            return { ...state, frontendTasksCount: action.payload };
        default:
            return state;
    }
};