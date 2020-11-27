import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'

import Divider from '@material-ui/core/Divider'

import Todo from 'components/Todo'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
	return (
		<Paper>
			<List>
				{todos.map((todo, i) => (
					<div key={todo.id}>
						<Todo todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
						{i !== todos.length - 1 && <Divider />}
					</div>
				))}
			</List>
		</Paper>
	)
}

export default TodoList
