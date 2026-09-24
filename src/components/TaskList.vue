<template>
  <section>
    <div class="list-header">
      <h2>My Tasks</h2>

      <p v-if="tasks.length">
        {{ tasks.length }} task{{ tasks.length !== 1 ? 's' : '' }}
      </p>
    </div>

    <div v-if="tasks.length === 0" class="empty">
      <p>No tasks yet. Add your first task above.</p>
    </div>

    <div v-else class="task-list">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle-status="handleToggleStatus"
        @delete-task="handleDeleteTask"
      />
    </div>
  </section>
</template>

<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
  tasks: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'toggle-status',
  'delete-task'
])

function handleToggleStatus(id) {
  emit('toggle-status', id)
}

function handleDeleteTask(id) {
  emit('delete-task', id)
}
</script>

