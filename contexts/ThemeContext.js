import { createContext, useMemo } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
	createMuiTheme,
	ThemeProvider as MaterialThemeProvider,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import useThemeState from 'hooks/useThemeState'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const { theme, toggle } = useThemeState({
		key: 'theme',
		initialState: 'light',
	})

	console.log(theme)

	const materialTheme = useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: theme,
				},
			}),
		[theme]
	)

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			<MaterialThemeProvider theme={materialTheme}>
				<CssBaseline />
				{children}
			</MaterialThemeProvider>
		</ThemeContext.Provider>
	)
}
