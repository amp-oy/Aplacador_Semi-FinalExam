<template>
  <article
    class="task-card"
    :class="{ completed: task.completed }"
  >
    <div class="task-content">
      <div class="task-title">
        <h3>{{ task.name }}</h3>

        <span
          class="priority"
          :class="priorityClass"
        >
          {{ task.priority }}
        </span>
      </div>

      <p class="description">
        {{ task.description }}
      </p>

      <p class="due-date">
        Due: {{ formattedDate }}
      </p>

      <p class="status">
        Status:
        <strong>
          {{ task.completed ? 'Completed' : 'Pending' }}
        </strong>
      </p>
    </div>

    <div class="actions">
      <button
        class="complete-button"
        @click="toggleStatus"
      >
        {{ task.completed ? 'Mark Pending' : 'Complete' }}
      </button>

      <button
        class="delete-button"
        @click="deleteTask"
      >
        Delete
      </button>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'toggle-status',
  'delete-task'
])

const formattedDate = computed(() => {
  if (!props.task.dueDate) {
    return 'No due date'
  }

  return new Date(
    `${props.task.dueDate}T00:00:00`
  ).toLocaleDateString()
})

const priorityClass = computed(() => {
  return props.task.priority.toLowerCase()
})

function toggleStatus() {
  emit('toggle-status', props.task.id)
}

function deleteTask() {
  emit('delete-task', props.task.id)
}
</script>
