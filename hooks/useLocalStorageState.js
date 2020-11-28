import { useState, useEffect } from 'react'

const useLocalStorageState = ({
	key,
	initialState = null,
	imitateLoading = false,
}) => {
	const [state, setState] = useState(initialState)

	useEffect(() => {
		if (imitateLoading) {
			setTimeout(() => {
				setState(JSON.parse(localStorage.getItem(key) || '[]'))
			}, 500)
		} else {
			setState(JSON.parse(localStorage.getItem(key) || '[]'))
		}
	}, [])

	useEffect(() => {
		if (state === undefined || state === null) return

		localStorage.setItem(key, JSON.stringify(state))
	}, [state])

	return [state, setState]
}

export default useLocalStorageState
