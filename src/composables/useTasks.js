import { ref } from 'vue'

const STORAGE_KEY = 'tasks'

export function useTasks() {
  const tasks = ref([])

  function loadTasks() {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY)

      if (savedTasks) {
        tasks.value = JSON.parse(savedTasks)
      }
    } catch (error) {
      console.error('Unable to load tasks:', error)
      tasks.value = []
    }
  }

  function addTask(task) {
    tasks.value.push(task)
  }

  function removeTask(id) {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }

  return {
    tasks,
    loadTasks,
    addTask,
    removeTask
  }
}
