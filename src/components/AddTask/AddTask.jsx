import { useEffect, useState } from 'react'
import TaskList from '../TaskList/TaskList'
import styles from './styles.module.css'

function AddTask() {
  const [taskId, setTaskId] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const [listTask, setListTask] = useState([])

  const handleEditFields = (task) => {
    setTaskId(task.id)
    setTitle(task.title)
    setCategory(task.category)
    setDate(task.date)
    setDescription(task.description)
  }

  const handleEditTask = () => {
    const newListTask = [...listTask]
    const currentTask = newListTask.findIndex((task) => task.id === taskId)

    newListTask[currentTask].title = title
    newListTask[currentTask].category = category
    newListTask[currentTask].date = date
    newListTask[currentTask].description = description
    setListTask(newListTask)
  }

  const handleAddTask = () => {
    setListTask([
      ...listTask,
      { id: Date.now(), title, category, date, description }
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title === '' || category === '' || date === '' || description === '') {
      alert('Preencha todos os campos')
      return
    }

    if (taskId) {
      handleEditTask()
    } else {
      handleAddTask()
    }

    setTaskId('')
    setTitle('')
    setCategory('')
    setDate('')
    setDescription('')
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={styles.formTitle}>
            {taskId ? 'Salvar tarefa' : 'Cadastrar Tarefa'}
          </h1>

          <input
            type="text"
            placeholder="Título"
            className={styles.formInput}
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className={styles.formSelect}
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Casa">Casa</option>
            <option value="Lazer">Lazer</option>
            <option value="Prioridades">Prioridades</option>
            <option value="Outros">Outros</option>
          </select>

          <input
            type="date"
            placeholder="Data"
            className={styles.formInput}
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descrição"
            className={styles.formInput}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            type="submit"
            className={styles.formButton}
            onClick={handleSubmit}
          >
            {taskId ? 'Salvar' : 'Cadastrar'}
          </button>
        </form>
      </div>
      {listTask.length > 0 && (
        <TaskList
          className={styles.list}
          listTask={listTask}
          setListTask={setListTask}
          handleEdit={handleEditFields}
        />
      )}
    </div>
  )
}

export default AddTask
