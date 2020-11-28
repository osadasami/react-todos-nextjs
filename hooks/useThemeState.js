import useLocalStorageState from 'hooks/useLocalStorageState'

const useThemeState = () => {
	const [theme, setTheme] = useLocalStorageState({
		key: 'theme',
		initialState: 'light',
	})

	const toggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return { theme, toggle }
}

export default useThemeState
