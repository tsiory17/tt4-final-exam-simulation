<!-- src/components/TaskList.vue -->
<template>
  <ul>
    <li v-for="task in props.tasks" :key="task.id">
      <input type="checkbox" v-model="task.completed" @change="toggle(task)" />
      <strong :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">
        {{ task.title }}
      </strong>
      - {{ task.description }}
      <button @click="remove(task.id)">🗑️</button>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['tasks', 'onToggle', 'onDelete']);

function toggle(task) {
  if (typeof props.onToggle === 'function') props.onToggle(task);
}

function remove(id) {
  if (typeof props.onDelete === 'function') props.onDelete(id);
}
</script>