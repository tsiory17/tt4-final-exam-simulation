<!-- src/App.vue -->
<template>
  <div class="container">
    <h1>📋 Task Manager</h1>

    <form @submit.prevent="handleCreate">
      <input v-model="newTask.title" placeholder="Title" required />
      <input v-model="newTask.description" placeholder="Description" required />
      <button type="submit">Add Task</button>
    </form>

    <TaskList :tasks="tasks" :onToggle="toggleComplete" :onDelete="handleDelete" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TaskList from './components/TaskList.vue';
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from './services/taskService';

const tasks = ref([]);
const newTask = ref({
  title: '',
  description: '',
  completed: false,
});

const fetchTasks = async () => {
  const res = await getTasks();
  tasks.value = res.data;
};

onMounted(fetchTasks);

const handleCreate = async () => {
  await createTask(newTask.value);
  newTask.value = { title: '', description: '', completed: false };
  fetchTasks();
};

const handleDelete = async (id) => {
  await deleteTask(id);
  fetchTasks();
};

const toggleComplete = async (task) => {
  await updateTask({ ...task, completed: !task.completed });
  fetchTasks();
};
</script>

<style>
.container {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
  font-family: sans-serif;
}
input {
  margin: 0.2rem;
}
button {
  margin-left: 0.3rem;
}
</style>
