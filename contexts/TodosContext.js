import { createContext, useReducer, useEffect } from 'react'

import TodosReducer from 'reducers/TodosReducer'

export const TodosContext = createContext()

export const TodosProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(TodosReducer, [])

	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodosContext.Provider>
	)
}
