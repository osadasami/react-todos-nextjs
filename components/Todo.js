import { useRef, useEffect } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import useToggle from 'hooks/useToggle'
import useInput from 'hooks/useInput'

const Todo = ({ todo, deleteTodo, toggleTodo, updateTodo }) => {
	const [isEditing, toggle] = useToggle(false)
	const [value, handleChange] = useInput(todo.task)

	const stopEditing = () => {
		toggle()
		updateTodo(todo, value)
	}

	return (
		<ListItem>
			<Checkbox checked={todo.completed} onClick={() => toggleTodo(todo)} />

			{!isEditing && (
				<ListItemText
					style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
				>
					{todo.task}
				</ListItemText>
			)}
			{isEditing && (
				<TextField
					value={value}
					onChange={handleChange}
					onBlur={stopEditing}
					autoFocus
					fullWidth
				/>
			)}

			{!isEditing && (
				<ListItemSecondaryAction>
					<IconButton aria-label="Delete" onClick={() => deleteTodo(todo)}>
						<DeleteIcon />
					</IconButton>
					<IconButton aria-label="Edit" onClick={toggle}>
						<EditIcon />
					</IconButton>
				</ListItemSecondaryAction>
			)}
		</ListItem>
	)
}

export default Todo
