import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import useInput from 'hooks/useInput'

const TodoForm = ({ addTodo }) => {
	const [value, handleChange, reset] = useInput('')

	const handleFormSubmit = (e) => {
		e.preventDefault()
		addTodo(value)
		reset()
	}

	return (
		<Paper>
			<form onSubmit={handleFormSubmit}>
				<TextField value={value} onChange={handleChange} />
			</form>
		</Paper>
	)
}

export default TodoForm
