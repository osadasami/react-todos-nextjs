import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Grid from '@material-ui/core/Grid'

import { useState } from 'react'

import TodoList from 'components/TodoList'

const TodoApp = () => {
	const initialState = [
		{ id: 1, task: 'Learn React', completed: true },
		{ id: 2, task: 'Learn Next.js', completed: false },
		{ id: 3, task: 'Earn money', completed: false },
	]

	const [todos, setTodos] = useState(initialState)

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa',
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<ToolBar>
					<Typography>Todos</Typography>
				</ToolBar>
			</AppBar>

			<TodoList todos={todos} />
		</Paper>
	)
}

export default TodoApp