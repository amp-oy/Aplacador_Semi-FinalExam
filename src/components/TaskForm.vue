<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['task-added'])

const form = reactive({
  name: '',
  description: '',
  priority: 'Medium',
  dueDate: ''
})

const errors = reactive({
  name: '',
  description: '',
  dueDate: ''
})

function validateForm() {
  errors.name = ''
  errors.description = ''
  errors.dueDate = ''

  let valid = true

  if (!form.name.trim()) {
    errors.name = 'Task name is required.'
    valid = false
  }

  if (!form.description.trim()) {
    errors.description = 'Description is required.'
    valid = false
  }

  if (!form.dueDate) {
    errors.dueDate = 'Due date is required.'
    valid = false
  }

  return valid
}

function submitTask() {
  if (!validateForm()) {
    return
  }

  
  emit('task-added', {
    name: form.name,
    description: form.description,
    priority: form.priority,
    dueDate: form.dueDate
  })

 
  form.name = ''
  form.description = ''
  form.priority = 'Medium'
  form.dueDate = ''
}
</script>

<template>
  <section class="form-section">
    <h2>Add New Task</h2>

    <form @submit.prevent="submitTask">

      <div class="form-group">
        <label for="name">Task Name</label>

        <input
          id="name"
          type="text"
          v-model="form.name"
          placeholder="Enter task name"
        />

        <p v-if="errors.name" class="error">
          {{ errors.name }}
        </p>
      </div>

      <div class="form-group">
        <label for="description">Description</label>

        <textarea
          id="description"
          v-model="form.description"
          placeholder="Enter task description"
          rows="4"
        ></textarea>

        <p v-if="errors.description" class="error">
          {{ errors.description }}
        </p>
      </div>

      <div class="form-group">
        <label for="priority">Priority</label>

        <select id="priority" v-model="form.priority">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div class="form-group">
        <label for="dueDate">Due Date</label>

        <input
          id="dueDate"
          type="date"
          v-model="form.dueDate"
        />

        <p v-if="errors.dueDate" class="error">
          {{ errors.dueDate }}
        </p>
      </div>

      <button type="submit">
        Add Task
      </button>

    </form>
  </section>
</template>
