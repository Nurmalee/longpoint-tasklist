/* eslint-disable react/prop-types */
import { useTasks } from '../../context/TasksContext'
import clsx from 'clsx'

const TaskItem = ({ task }) => {
	const { onCompleteTask, onSelectTask } = useTasks()

	return (
		<div className='flex justify-between items-center gap-2 p-3 py-4 bg-white rounded shadow-md'>
			<div className='flex items-center gap-3'>
				<span
					className={clsx(
						'w-6 h-6 rounded-full border-2 flex items-center text-gray-600 font-bold  justify-center border-primary-blue',
						task.completed && 'border-transparent bg-green-500'
					)}
					onClick={() => onCompleteTask(task.id)}>
					{task.completed && '✓'}
				</span>
				<span
					className={clsx(
						'font-semibold text-[15px] text-wrap break-words',
						task.completed && 'line-through text-gray-400'
					)}>
					{task.name}
				</span>
			</div>
			<button
				className='p-2 rounded text-sm font-semibold border-primary-blue border'
				onClick={() => onSelectTask(task)}>
				Edit
			</button>
		</div>
	)
}

export default TaskItem
