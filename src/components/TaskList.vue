<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
  tasks: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'toggle-task',
  'delete-task'
])

function toggleTask(taskId) {
  emit('toggle-task', taskId)
}

function deleteTask(taskId) {
  emit('delete-task', taskId)
}
</script>

<template>
  <section class="task-list">
    <h2>Task List</h2>

    <p v-if="tasks.length === 0">
      No tasks available.
    </p>

    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle-task="toggleTask"
      @delete-task="deleteTask"
    />
  </section>
</template>