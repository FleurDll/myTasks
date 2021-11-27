import React from 'react';
import AddTask from '../addTask';
import Counts from '../counts';
import { HomeContainer } from "./HomeElements";

const Home = () => {
    return (
        <HomeContainer>
            <AddTask />
            <Counts />
        </HomeContainer>
    );
};

export default Home;
