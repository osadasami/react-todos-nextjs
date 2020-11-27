import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Grid from '@material-ui/core/Grid'
import Alert from '@material-ui/lab/Alert'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useState, useEffect } from 'react'

import useTodoState from 'hooks/useTodoState'
import TodoList from 'components/TodoList'
import TodoForm from 'components/TodoForm'

const TodoApp = () => {
	const { todos, addTodo, deleteTodo, toggleTodo, updateTodo } = useTodoState()

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
					<TodoForm addTodo={addTodo} />

					{!todos && <CircularProgress />}

					{todos && todos.length === 0 && (
						<Alert variant="outlined" severity="info">
							Start adding new tasks
						</Alert>
					)}

					{todos && todos.length > 0 && (
						<TodoList
							todos={todos}
							deleteTodo={deleteTodo}
							toggleTodo={toggleTodo}
							updateTodo={updateTodo}
						/>
					)}
				</Grid>
			</Grid>
		</Paper>
	)
}

export default TodoApp
