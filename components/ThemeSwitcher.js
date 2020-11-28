import { useContext } from 'react'
import { ThemeContext } from 'contexts/ThemeContext'

const ThemeSwitcher = () => {
  const { theme, toggle } = useContext(ThemeContext)

  return (
    <div style={{ cursor: 'pointer' }} onClick={toggle}>
      {theme === 'light' ? '☀️' : '🌒'}
    </div>
  )
}

export default ThemeSwitcher
