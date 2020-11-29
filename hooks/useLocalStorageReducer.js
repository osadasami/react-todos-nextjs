import { useReducer, useEffect } from 'react'

const useLocalStorageReducer = (key, reducer, imitateLoading = false) => {
	const [state, dispatch] = useReducer(reducer)

	useEffect(() => {
		if (imitateLoading) {
			setTimeout(() => {
				dispatch({
					type: 'SET',
					todos: JSON.parse(localStorage.getItem(key) || '[]'),
				})
			}, 500)
		} else {
			dispatch({
				type: 'SET',
				todos: JSON.parse(localStorage.getItem(key) || '[]'),
			})
		}
	}, [])

	useEffect(() => {
		if (state === undefined || state === null) return

		localStorage.setItem(key, JSON.stringify(state))
	}, [state])

	return [state, dispatch]
}

export default useLocalStorageReducer
