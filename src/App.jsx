import styles from './styles.module.css'
import AddTask from './components/AddTask/AddTask'
import TaskList from './components/TaskList/TaskList'

function App() {
  return (
    <>
      <AddTask className={styles.form} />
    </>
  )
}

export default App
