/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const TasksContext = createContext()
export const useTasks = () => useContext(TasksContext)

export const TasksProvider = ({ children }) => {
	const [tasks, setTasks] = useState([
		{ id: 1, name: 'Training at the Gym', completed: true },
		{ id: 2, name: 'Play Paddle with friends', completed: false },
		{ id: 3, name: 'Burger BBQ with family', completed: false },
	])

	const [selectedTask, setSelectedTask] = useState(null)

	const onAddTask = (newTaskName) => {
		setTasks((prevTasks) => [
			...prevTasks,
			{ id: prevTasks.length + 1, name: newTaskName, completed: false },
		])
	}

	const onSelectTask = (task) => {
		setSelectedTask(task)
	}

	const onDeleteTask = (taskId) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
	}

	const onCompleteTask = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const onEditTask = (newTask) => {
		setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)))
	}

	const contextValue = {
		onCompleteTask,
		onDeleteTask,
		onSelectTask,
		selectedTask,
		onEditTask,
		onAddTask,
		tasks,
	}

	return (
		<TasksContext.Provider value={contextValue}>
			{children}
		</TasksContext.Provider>
	)
}
