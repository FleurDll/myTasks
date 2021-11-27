import axios from "axios";
import { SIGN_IN, SIGN_OUT, GET_TASKS, GET_ALL_TASKS_COUNT, GET_BACKEND_TASKS_COUNT, GET_FRONTEND_TASKS_COUNT } from "./types"

export const signIn = (userId, name) => {
    return {
        type: SIGN_IN,
        payload: {
            userId,
            name
        }
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const fetchTasks = () => async dispatch => {
    const res = await axios.get("/api/tasks");
    dispatch({ type: GET_TASKS, payload: res.data });
};

export const fetchAllTasksCount = () => async dispatch => {
    const res = await axios.get("/api/tasks/all-count");
    dispatch({ type: GET_ALL_TASKS_COUNT, payload: res.data });
};

export const fetchBackendTasksCount = () => async dispatch => {
    const res = await axios.get("/api/tasks/backend-count");
    dispatch({ type: GET_BACKEND_TASKS_COUNT, payload: res.data });
};

export const fetchFrontendTasksCount = () => async dispatch => {
    const res = await axios.get("/api/tasks/frontend-count");
    dispatch({ type: GET_FRONTEND_TASKS_COUNT, payload: res.data });
};

export const addTask = payload => async dispatch => {
    const res = await axios({
        url: '/api/tasks/add',
        method: 'POST',
        data: payload
    });
    console.log(res.status + " Task saved.");
};

export const deleteTask = id => async dispatch => {
    const res = await axios({
        url: '/api/tasks/delete',
        method: 'POST',
        data: id
    });
    console.log(res.status + " Task deleted.");
};