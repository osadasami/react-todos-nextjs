import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { useContext } from 'react'

import Todo from 'components/Todo'
import { TodosContext } from 'contexts/TodosContext'

const TodoList = () => {
	const { todos } = useContext(TodosContext)

	return (
		<Paper>
			<List>
				{todos.map((todo, i) => (
					<div key={todo.id}>
						<Todo todo={todo} />
						{i !== todos.length - 1 && <Divider />}
					</div>
				))}
			</List>
		</Paper>
	)
}

export default TodoList
