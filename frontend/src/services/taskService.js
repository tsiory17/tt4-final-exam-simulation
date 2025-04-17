// src/services/taskService.js
import axios from 'axios';

const API_URL = '/api/tasks';

export const getTasks = () => axios.get(API_URL);
export const getTask = (id) => axios.get(`${API_URL}/${id}`);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (task) => axios.put(`${API_URL}/${task.id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
