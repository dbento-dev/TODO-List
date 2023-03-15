import styles from './styles.module.css'
import TaskListItem from '../TaskListItem/TaskListItem'

function TaskList(props) {
  const { listTask, setListTask, handleEdit } = props

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir essa tarefa?')) {
      setListTask(listTask.filter((task) => task.id !== id))
    }
  }

  return (
    <div className={styles.taskList}>
      <div className={styles.header}>
        <h1 className={styles.taskListTitle}>Minhas Tarefas</h1>
        <span className={styles.taskListCounter}>
          Total: {listTask.length} tarefas
        </span>
      </div>

      <div>
        <ul className={styles.list}>
          {listTask.length > 0 &&
            listTask.map((task) => (
              <TaskListItem
                key={String(task.id)}
                title={task.title}
                category={task.category}
                date={task.date}
                description={task.description}
                deleteTask={() => handleDelete(task.id)}
                editTask={() => handleEdit(task)}
              />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default TaskList
