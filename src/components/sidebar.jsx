import { useTasks } from '../../context/TasksContext'
import Trophy from '../assets/trophy.png'
import User from '../assets/user.png'
import TaskList from './task-list'
import { useState } from 'react'

const Sidebar = () => {
	const { onAddTask } = useTasks()
	const [taskName, setTaskName] = useState('')

	const handleAddTask = () => {
		if (taskName) {
			onAddTask(taskName)
			setTaskName('')
		}
	}

	return (
		<div className='relative w-[30%] shadow-xl '>
			{/* USER */}
			<div className='bg-secondary-blue text-white p-5 min-h-22 flex items-start gap-3'>
				<img src={User} alt='user-image' className='h-10 w-10' />

				<div>
					<h1 className='text-[15px] font-semibold'>Hello, Jhon</h1>

					{/* ADD TASK INPUT */}
					<input
						className='border-2 bg-transparent border-none italic placeholder:text-gray-400 font-thin text-lg text-white focus:outline-none'
						placeholder='What are your plans for today?'
						onChange={(e) => setTaskName(e.target.value)}
						value={taskName}
						type='text'
					/>
				</div>
			</div>

			{/* UPGRADE AREAD */}
			<div className='relative bg-primary-lemon p-4 rounded-sm text-center h-20 flex gap-3 items-center shadow-md'>
				<img src={Trophy} alt='trophy-image' className='h-10 w-10' />
				<h2 className='font-bold'>Go Pro Upgrade Now</h2>
				<p className='text-sm absolute top-0 right-4 text-yellow-500 flex items-center justify-center h-11 w-11 bg-blue-950'>
					$1
				</p>
			</div>

			{/* TASK LIST */}
			<TaskList />

			{/* ADD TASK */}
			<button
				className='absolute bottom-5 right-5 bg-secondary-blue text-white p-2 h-12 w-12 font-bold text-xl rounded-full'
				onClick={handleAddTask}>
				+
			</button>
		</div>
	)
}

export default Sidebar
