import {ref, computed, watch, onMounted} from 'vue'

const STORAGE_KEY = 'student-task-manager-tasks'

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

  
  const completedTasks = computed(() => {
    return tasks.value.filter(
      task => task.completed
    ).length
  })

  
  const pendingTasks = computed(() => {
    return tasks.value.filter(
      task => !task.completed
    ).length
  })

  
  watch(
    tasks,
    (newTasks) => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(newTasks)
      )
    },
    {
      deep: true
    }
  )

  
  onMounted(() => {
    loadTasks()
  })

  return {
    tasks,
    completedTasks,
    pendingTasks,
    addTask,
    removeTask,
    toggleTaskStatus
  }
}
