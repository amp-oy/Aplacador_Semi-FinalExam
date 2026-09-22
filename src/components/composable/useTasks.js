import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'student-task-manager-tasks'

export function useTasks() {
  const tasks = ref([])

  function loadTasks() {
    const savedTasks = localStorage.getItem(STORAGE_KEY)

    if (savedTasks) {
      try {
        tasks.value = JSON.parse(savedTasks)
      } catch (error) {
        console.error('Unable to load saved tasks:', error)
        tasks.value = []
      }
    }
  }

  function addTask(task) {
    tasks.value.push(task)
  }

  function removeTask(id) {
    tasks.value = tasks.value.filter(
      task => task.id !== id
    )
  }

  function toggleTaskStatus(id) {
    const task = tasks.value.find(
      task => task.id === id
    )

    if (task) {
      task.completed = !task.completed
    }
  }

  function updateTask(id, updatedTask) {
    const index = tasks.value.findIndex(
      task => task.id === id
    )

    if (index !== -1) {
      tasks.value[index] = {
        ...tasks.value[index],
        ...updatedTask
      }
    }
  }

  const completedTasks = computed(() => {
    return tasks.value.filter(task => task.completed)
  })

  const pendingTasks = computed(() => {
    return tasks.value.filter(task => !task.completed)
  })

  watch(
    tasks,
    newTasks => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(newTasks)
      )
    },
    { deep: true }
  )

  loadTasks()

  return {
    tasks,
    completedTasks,
    pendingTasks,
    addTask,
    removeTask,
    toggleTaskStatus,
    updateTask
  }
}
