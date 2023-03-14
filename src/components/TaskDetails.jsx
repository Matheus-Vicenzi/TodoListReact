import React from 'react';
import { useParams } from 'react-router-dom';

import './TaskDetails.css'
import Button from './Button';

const TaskDetails = () => {
    const params = useParams();

    return (
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio pariatur,
                    molestiae temporibus eos et quia nemo vero fuga, dolores nam magni? Aliquid
                    necessitatibus dolorum sequi accusantium molestiae earum distinctio!
                </p>
            </div>
        </>
    );
}

export default TaskDetails;