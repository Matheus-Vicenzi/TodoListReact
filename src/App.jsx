import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"
import TaskDetails from "./components/TaskDetails";
import Header from "./components/Header";

import './App.css';

const App = () => {
	const [tasks, setTasks] = useState([]);

	const handleTaskAddition = (taskTitle) => {
		if (taskTitle !== "") {
			const newTask = [
				...tasks,
				{
					title: taskTitle,
					id: uuidv4(),
					completed: false
				},
			];
			setTasks(newTask);
		}
	}

	const handleTaskDelete = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(newTasks);
	}

	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };
			return task;
		});
		setTasks(newTasks);
	}

	return (
		<Router>
			<div className="container">
				<Header />
				<Route path='/'
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDelete={handleTaskDelete}
							/>
						</>
					)}>

				</Route>
				<Route path="/:taskTitle" exact component={TaskDetails}>
				</Route>
			</div>
		</Router>
	)
};

export default App;