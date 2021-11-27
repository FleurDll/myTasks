import React, { useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import Home from "./components/home";
import History from "./components/history";
import Navbar from './components/Navbar';

const App = ({ fetchTasks, fetchAllTasksCount, fetchBackendTasksCount, fetchFrontendTasksCount }) => {

  useEffect(() => {
    fetchTasks();
    fetchAllTasksCount();
    fetchBackendTasksCount();
    fetchFrontendTasksCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/" component={Home} exact />
        <Route path="/history" component={History} />
      </BrowserRouter>
    </div>
  );
}


export default connect(null, actions)(App);