import useLocalStorageState from 'hooks/useLocalStorageState'

const useThemeState = ({ key, initialState }) => {
	const [theme, setTheme] = useLocalStorageState({key, initialState})

	const toggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return { theme, toggle }
}

export default useThemeState
