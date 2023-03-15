import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './TaskDetails.css'
import Button from '../Button/Button';

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = (() => {
        navigate(-1);
    });

    return (
        <>
            <div className="back-button-container" onClick={handleBackButtonClick}>
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