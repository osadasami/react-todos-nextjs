import { createContext, useEffect } from 'react'

import TodosReducer from 'reducers/TodosReducer'
import useLocalStorageReducer from 'hooks/useLocalStorageReducer'

export const TodosContext = createContext()
export const DispatchContext = createContext()

export const TodosProvider = ({ children }) => {
	const [todos, dispatch] = useLocalStorageReducer('todos', TodosReducer, true)

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	)
}
