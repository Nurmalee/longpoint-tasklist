import { useEffect, useState } from 'react'
import { useTasks } from '../../context/TasksContext'

const TaskEditor = () => {
	const { onEditTask, onDeleteTask, selectedTask } = useTasks()
	const [taskName, setTaskName] = useState(selectedTask?.name || '')

	useEffect(() => {
		setTaskName(selectedTask?.name || '')
	}, [selectedTask?.name])

	const handleSave = () => {
		onEditTask({ ...selectedTask, name: taskName })
		setTaskName('')
	}

	const handleDelete = () => {
		onDeleteTask(selectedTask.id)
		setTaskName('')
	}

	return (
		<div className='flex flex-col h-full'>
			<div className='bg-secondary-blue text-white p-8 min-h-22 text-center flex items-center justify-center'>
				<h1 className='text-lg font-semibold'>Edit Task</h1>
			</div>

			<div className='p-4 h-full flex flex-col justify-between'>
				<div>
					<h2 className='text-[15px] mb-2 font-semibold tracking-widest text-gray-800'>
						Task Name
					</h2>
					<input
						type='text'
						value={taskName}
						onChange={(e) => setTaskName(e.target.value)}
						className='border-2 border-gray-300 rounded w-full p-3 text-[15px] text-blue-950'
					/>
				</div>

				<div className='flex gap-3'>
					<button
						className='bg-red-800 text-white cursor-pointer p-2.5 rounded-md text-[15px] w-28'
						disabled={!selectedTask}
						onClick={handleDelete}
						type='button'>
						Delete
					</button>
					<button
						className='bg-secondary-blue cursor-pointer text-white p-2.5 rounded-md text-[15px] w-full'
						disabled={!selectedTask}
						onClick={handleSave}
						type='button'>
						Save
					</button>
				</div>
			</div>
		</div>
	)
}

export default TaskEditor
