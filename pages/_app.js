import React from 'react'

import { TodosProvider } from 'contexts/TodosContext'
import { ThemeProvider } from 'contexts/ThemeContext'
import useThemeState from 'hooks/useThemeState'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <TodosProvider>
        <Component {...pageProps} />
      </TodosProvider>
    </ThemeProvider>
  )
}

export default MyApp
