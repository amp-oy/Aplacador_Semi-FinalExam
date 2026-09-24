<template>
  <section class="form-card">
    <h2>Add New Task</h2>

    <form @submit.prevent="submitTask">
      <div class="form-group">
        <label for="name">Task Name</label>

        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="e.g. Programming Activity"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>

        <textarea
          id="description"
          v-model="form.description"
          rows="4"
          placeholder="Describe the task..."
        ></textarea>
      </div>

      <div class="form-group">
        <label for="priority">Priority</label>

        <select
          id="priority"
          v-model="form.priority"
        >
          <option value="">Select priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div class="form-group">
        <label for="dueDate">Due Date</label>

        <input
          id="dueDate"
          v-model="form.dueDate"
          type="date"
        />
      </div>

      <p v-if="errorMessage" class="error">
        {{ errorMessage }}
      </p>

      <button class="add-button" type="submit">
        Add Task
      </button>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['task-added'])

const form = reactive({
  name: '',
  description: '',
  priority: '',
  dueDate: ''
})

const errorMessage = ref('')

function submitTask() {
  errorMessage.value = ''

  
  if (
    !form.name.trim() ||
    !form.description.trim() ||
    !form.priority ||
    !form.dueDate
  ) {
    errorMessage.value =
      'Please complete all required fields.'

    return
  }

  const newTask = {
    id: Date.now(),
    name: form.name.trim(),
    description: form.description.trim(),
    priority: form.priority,
    dueDate: form.dueDate,
    completed: false
  }

  
  emit('task-added', newTask)

  
  form.name = ''
  form.description = ''
  form.priority = ''
  form.dueDate = ''
}
</script>

