import { createContext } from 'react'

import useTodoState from 'hooks/useTodoState'

export const TodosContext = createContext()

export const TodosProvider = ({ children }) => {
	const todosState = useTodoState()

	return (
		<TodosContext.Provider value={todosState}>{children}</TodosContext.Provider>
	)
}
