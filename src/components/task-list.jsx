import { useTasks } from '../../context/TasksContext'
import TaskItem from './task-item'

const TaskList = () => {
	const { tasks } = useTasks()

	return (
		<div className='p-4 flex flex-col gap-5 overflow-y-auto'>
			{tasks.map((task) => (
				<TaskItem key={task.id} task={task} />
			))}
		</div>
	)
}

export default TaskList
