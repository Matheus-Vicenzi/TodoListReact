import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

import Tasks from "../components/Tasks/Tasks";
import AddTask from "../components/AddTask/AddTask"
import TaskDetails from "../components/TaskDetails/TaskDetails";
import Header from "../components/Header/Header";

import './App.css';
import axios from "axios";

const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fatchTasks = async () => {
			const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
			setTasks(data);
		};

		fatchTasks();
	}, []);

	const handleTaskAddition = (taskTitle) => {
		if (taskTitle !== "") {
			const newTask = [
				...tasks,
				{
					title: taskTitle,
					id: uuidv4(),
					completed: false,
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
				<Routes>
					<Route path='/'
						exact
						element={[
							<AddTask handleTaskAddition={handleTaskAddition} />,
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDelete={handleTaskDelete}
							/>
						]} />
					<Route path="/:taskTitle" exact element={<TaskDetails />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;