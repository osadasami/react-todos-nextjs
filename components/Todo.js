import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
	return (
		<ListItem>
			<Checkbox checked={todo.completed} onClick={() => toggleTodo(todo)} />
			<ListItemText
				style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
			>
				{todo.task}
			</ListItemText>
			<ListItemSecondaryAction>
				<IconButton aria-label="Delete" onClick={() => deleteTodo(todo)}>
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="Edit">
					<EditIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	)
}

export default Todo
