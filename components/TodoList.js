import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

const TodoList = ({ todos }) => {
	return (
		<Paper>
			<List>
				{todos.map((todo, i) => (
					<div key={todo.id}>
						<ListItem>
							<ListItemText>{todo.task}</ListItemText>
						</ListItem>
						{i !== todos.length - 1 && <Divider />}
					</div>
				))}
			</List>
		</Paper>
	)
}

export default TodoList
