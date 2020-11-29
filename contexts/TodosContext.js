import { createContext, useReducer, useEffect } from 'react'

import TodosReducer from 'reducers/TodosReducer'

export const TodosContext = createContext()
export const DispatchContext = createContext()

export const TodosProvider = ({ children }) => {
	const [todos, dispatch] = useReducer(TodosReducer, [])

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	)
}
