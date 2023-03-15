import styles from './styles.module.css'

import { FiEdit, FiTrash2 } from 'react-icons/fi'

function TaskListItem(props) {
  const { title, category, date, description, deleteTask, editTask } = props
  return (
    <li className={styles.taskListItem}>
      <h2 className={styles.taskListItemTitle}>{title}</h2>
      <div className={styles.taskListItemFirstRow}>
        <span className={styles.taskCategory}>{category}</span>
        <strong>{date}</strong>
      </div>

      <div className={styles.taskListItemSecondRow}>
        <p className={styles.taskDescription}>{description}</p>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.editButton}
            onClick={editTask}
          >
            <FiEdit size={20} />
          </button>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={deleteTask}
          >
            <FiTrash2 size={20} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TaskListItem
