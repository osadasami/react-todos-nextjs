import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Grid from '@material-ui/core/Grid'
import Alert from '@material-ui/lab/Alert'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useContext } from 'react'
import TodoList from 'components/TodoList'
import TodoForm from 'components/TodoForm'
import { TodosContext } from 'contexts/TodosContext'
import ThemeSwitcher from './ThemeSwitcher'

const TodoApp = () => {
  const todos = useContext(TodosContext)

  return (
    <>
      <AppBar
        color="primary"
        position="static"
        style={{
          height: '64px',
        }}
      >
        <ToolBar style={{ dispaly: 'flex', justifyContent: 'space-between' }}>
          <Typography>Todos</Typography>
          <ThemeSwitcher />
        </ToolBar>
      </AppBar>

      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={12} md={8} lg={4}>
          <TodoForm />

          {!todos && <CircularProgress />}

          {todos && todos.length === 0 && (
            <Alert variant="outlined" severity="info">
              Start adding new tasks
            </Alert>
          )}

          {todos && todos.length > 0 && <TodoList />}
        </Grid>
      </Grid>
    </>
  )
}

export default TodoApp
