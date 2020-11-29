import { v4 } from 'uuid'

const TodosReducer = (state, action) => {
	switch (action.type) {
		case 'SET':
			return action.todos
		case 'ADD':
			return [
				...state,
				{
					id: v4(),
					task: action.task,
					completed: false,
				},
			]
		case 'REMOVE':
			return state.filter((filteringTodo) => filteringTodo.id !== action.id)
		case 'TOGGLE':
			return state.map((mappingTodo) => {
				if (mappingTodo.id === action.id) {
					return { ...mappingTodo, completed: !mappingTodo.completed }
				}
				return mappingTodo
			})
		case 'EDIT':
			return state.map((mappingTodo) => {
				if (mappingTodo.id === action.id) {
					return { ...mappingTodo, task: action.task }
				}
				return mappingTodo
			})
		default:
			return state
	}
}

export default TodosReducer
