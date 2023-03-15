import { useState } from 'react'
import TaskList from '../TaskList/TaskList'
import styles from './styles.module.css'

function AddTask() {
  const [taskId, setTaskId] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const [listTask, setListTask] = useState([])

  const handleFormValidation = () => {
    let title = document.getElementById('title').value
    let category = document.getElementById('category').value
    let date = document.getElementById('date').value
    let description = document.getElementById('description').value

    if (title !== '' && category !== '' && date !== '' && description !== '') {
      return true
    }

    if (title == '') {
      document.getElementById('warningTitle').innerHTML =
        'Este campo é obrigatório'
    }

    if (category == '') {
      document.getElementById('warningCategory').innerHTML =
        'Este campo é obrigatório'
    }

    if (date == '') {
      document.getElementById('warningDate').innerHTML =
        'Este campo é obrigatório'
    }

    if (description == '') {
      document.getElementById('warningDescription').innerHTML =
        'Este campo é obrigatório'
    }

    return false
  }

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
    const newTask = {
      id: Date.now(),
      title,
      category,
      date,
      description
    }

    setListTask([...listTask, newTask])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (handleFormValidation()) {
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
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={styles.formTitle}>
            {taskId ? 'Salvar tarefa' : 'Cadastrar Tarefa'}
          </h1>

          <div>
            <input
              type="text"
              placeholder="Título"
              className={styles.formInput}
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
            />
            {!title && (
              <span className={styles.warningField} id="warningTitle"></span>
            )}
          </div>

          <div>
            <select
              className={styles.formSelect}
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
            >
              <option value="">Categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Casa">Casa</option>
              <option value="Lazer">Lazer</option>
              <option value="Prioridades">Prioridades</option>
              <option value="Outros">Outros</option>
            </select>
            {!category && (
              <span className={styles.warningField} id="warningCategory"></span>
            )}
          </div>

          <div>
            <input
              type="date"
              placeholder="Data"
              className={styles.formInput}
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="date"
            />
            {!date && (
              <span className={styles.warningField} id="warningDate"></span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Descrição"
              className={styles.formInput}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
            />
            {!description && (
              <span
                className={styles.warningField}
                id="warningDescription"
              ></span>
            )}
          </div>

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

      {listTask.length === 0 && (
        <div className={styles.emptyList}>
          <p>Você ainda não tem tarefas cadastradas!</p>
        </div>
      )}
    </div>
  )
}

export default AddTask
