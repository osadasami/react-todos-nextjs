import { v4 } from 'uuid'

import useLocalStorageState from 'hooks/useLocalStorageState'

const useTodoState = () => {
	const [todos, setTodos] = useLocalStorageState({
		key: 'todos',
		imitateLoading: true,
	})

	const addTodo = (newTodoText) => {
		setTodos((prev) => [
			...prev,
			{
				id: v4(),
				task: newTodoText,
				completed: false,
			},
		])
	}

	const deleteTodo = (deletingTodo) => {
		const newTodos = todos.filter(
			(filteringTodo) => filteringTodo.id !== deletingTodo.id
		)

		setTodos(newTodos)
	}

	const toggleTodo = (toggelingTodo) => {
		const newTodos = todos.map((mappingTodo) => {
			if (mappingTodo.id === toggelingTodo.id) {
				return { ...mappingTodo, completed: !mappingTodo.completed }
			}
			return mappingTodo
		})

		setTodos(newTodos)
	}

	const updateTodo = (updatingTodo, newName) => {
		const newTodos = todos.map((mappingTodo) => {
			if (mappingTodo.id === updatingTodo.id) {
				return { ...mappingTodo, task: newName }
			}
			return mappingTodo
		})

		setTodos(newTodos)
	}

	return {
		todos,
		addTodo,
		deleteTodo,
		toggleTodo,
		updateTodo,
	}
}

export default useTodoState
