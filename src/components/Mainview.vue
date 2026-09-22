<script setup>
import { ref } from 'vue'
import TaskForm from './TaskForm.vue'
import TaskList from './TaskList.vue'

const tasks = ref([
  {
    id: 1,
    name: 'Task Manager',
    description: 'Complete the Vue task management application.',
    priority: 'High',
    dueDate: '2026-09-30',
    completed: false
  }
])

function addTask(task) {
  tasks.value.push({
    ...task,
    id: Date.now(),
    completed: false
  })
}

function toggleTask(taskId) {
  const task = tasks.value.find(task => task.id === taskId)

  if (task) {
    task.completed = !task.completed
  }
}

function deleteTask(taskId) {
  tasks.value = tasks.value.filter(task => task.id !== taskId)
}
</script>

<template>
  <main class="main-view">
    <h1>Task Manager</h1>

    <TaskForm @task-added="addTask" />

    <TaskList
      :tasks="tasks"
      @toggle-task="toggleTask"
      @delete-task="deleteTask"
    />
  </main>
</template>