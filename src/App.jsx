import TaskEditor from './components/task-editor'
import Sidebar from './components/sidebar'

function App() {
	return (
		<div className='flex mx-auto h-screen overflow-x-auto min-w-[1000px] bg-gray-100'>
			<Sidebar />
			<div className='flex-1'>
				<TaskEditor />
			</div>
		</div>
	)
}

export default App
