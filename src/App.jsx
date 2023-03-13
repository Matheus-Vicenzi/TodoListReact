import React, { useState } from "react";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"
import './app.css';

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: "1",
			title: "Estudar Programação",
			completed: false
		},
		{
			id: "2",
			title: "Ler Livros",
			completed: true
		}
	]);

	return (
		<>
			<div className="container">
				<Tasks tasks={tasks} />
			</div>

		</>
	)
};

export default App;