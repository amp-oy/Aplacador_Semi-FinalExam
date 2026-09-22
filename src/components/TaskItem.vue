<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'toggle-task',
  'delete-task'
])

function completeTask() {
  emit('toggle-task')
}

function deleteTask() {
  emit('delete-task')
}
</script>

<template>
  <article
    class="task-item"
    :class="{ completed: task.completed }"
  >
    <div class="task-content">
      <h3>{{ task.name }}</h3>

      <p>{{ task.description }}</p>

      <p>
        <strong>Priority:</strong>
        {{ task.priority }}
      </p>

      <p>
        <strong>Due Date:</strong>
        {{ task.dueDate }}
      </p>

      <p>
        <strong>Status:</strong>
        {{ task.completed ? 'Completed' : 'Pending' }}
      </p>
    </div>

    <div class="actions">
      <button
        @click="completeTask"
        class="complete-button"
      >
        {{ task.completed ? 'Undo' : 'Complete' }}
      </button>

      <button
        @click="deleteTask"
        class="delete-button"
      >
        Delete
      </button>
    </div>
  </article>
</template>

