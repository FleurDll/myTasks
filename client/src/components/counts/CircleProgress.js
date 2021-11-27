import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Circle } from './CountsElements';

const CircleProgress = ({ count, maxValue }) => {
    return (
        <Circle>
            <CircularProgressbar
                strokeWidth="8"
                value={count}
                text={count}
                maxValue={maxValue}
                styles={buildStyles({
                    textSize: '16px',
                    pathColor: `rgb(187, 134, 252`,
                    textColor: '#909090',
                    trailColor: '#1F1F1F',
                })}
            />
        </Circle>
    );
};

export default CircleProgress;