import { useState, useEffect } from 'react'
import { v4 } from 'uuid'

const useTodoState = () => {
	const [todos, setTodos] = useState()

	useEffect(() => {
		setTimeout(() => {
			setTodos(JSON.parse(localStorage.getItem('todos') || '[]'))
		}, 500)
	}, [])

	useEffect(() => {
		if (todos === undefined || todos === null) return

		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

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
