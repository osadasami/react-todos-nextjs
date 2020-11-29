import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { useContext } from 'react'

import useInput from 'hooks/useInput'
import { DispatchContext } from 'contexts/TodosContext'

const TodoForm = () => {
	const [value, handleChange, reset] = useInput('')
	const dispatch = useContext(DispatchContext)

	const handleFormSubmit = (e) => {
		e.preventDefault()
		dispatch({ type: 'ADD', task: value })
		reset()
	}

	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			<form onSubmit={handleFormSubmit}>
				<TextField
					value={value}
					onChange={handleChange}
					margin="normal"
					label="Add new todo"
					fullWidth
				/>
			</form>
		</Paper>
	)
}

export default TodoForm
