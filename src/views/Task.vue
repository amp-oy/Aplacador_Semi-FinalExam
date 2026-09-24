<template>
  <div class="task-page">
    <div class="page-heading">
      <h2>Task Dashboard</h2>
      <p>
        Organize your school requirements and keep
        track of your progress.
      </p>
    </div>

    <div class="statistics">
      <div class="stat-card">
        <span>Total Tasks</span>
        <strong>{{ totalTasks }}</strong>
      </div>

      <div class="stat-card">
        <span>Pending</span>
        <strong>{{ pendingTasks }}</strong>
      </div>

      <div class="stat-card">
        <span>Completed</span>
        <strong>{{ completedTasks }}</strong>
      </div>
    </div>

    <TaskForm @task-added="handleTaskAdded" />

    <TaskList
      :tasks="tasks"
      @toggle-status="handleToggleStatus"
      @delete-task="handleDeleteTask"
    />
  </div>
</template>

<script setup>
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
import { useTasks } from '../composables/useTasks'

const {
  tasks,
  addTask,
  updateTaskStatus,
  removeTask,
  totalTasks,
  completedTasks,
  pendingTasks
} = useTasks()

function handleTaskAdded(task) {
  addTask(task)
}

function handleToggleStatus(id) {
  updateTaskStatus(id)
}

function handleDeleteTask(id) {
  removeTask(id)
}
</script>

