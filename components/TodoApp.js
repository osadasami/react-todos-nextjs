import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Grid from '@material-ui/core/Grid'
import Alert from '@material-ui/lab/Alert'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useState, useEffect, useContext } from 'react'

import useTodoState from 'hooks/useTodoState'
import TodoList from 'components/TodoList'
import TodoForm from 'components/TodoForm'
import { TodosContext } from 'contexts/TodosContext'

const TodoApp = () => {
	const { todos } = useContext(TodosContext)

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

			<Grid container justify="center" style={{ marginTop: '1rem' }}>
				<Grid item xs={12} md={8} lg={4}>
					<TodoForm />

					{!todos && <CircularProgress />}

					{todos && todos.length === 0 && (
						<Alert variant="outlined" severity="info">
							Start adding new tasks
						</Alert>
					)}

					{todos && todos.length > 0 && <TodoList todos={todos} />}
				</Grid>
			</Grid>
		</Paper>
	)
}

export default TodoApp
