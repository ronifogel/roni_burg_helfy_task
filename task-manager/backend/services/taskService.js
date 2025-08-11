const Task = require('../models/taskModel');
const tasksArray = [];
let idCounter = 1;
const getTasks = async () => { return tasksArray; };

const createTask = async (title, description, priority) => {
    const task = new Task.createTask({ id: idCounter, title: title, description: description, priority: priority });
    tasksArray.push(task);
    idCounter++;
    return task;
};
const getTaskById = async (id) => {
    const task = tasksArray.find(task => task.id === parseInt(id));
     return task; };

const updateTask = async (id, body) => {
    const task = await getTaskById(id);
    if (!task) return null;
    task.title = body.title;
    task.description = body.description;
    task.priority = body.priority;
    return task;
};
const deleteTask = async (id) => {
    const task = await getTaskById(id);
    if (!task) return null;
    tasksArray.splice(tasksArray.indexOf(task), 1);
    return task;
};
const toggleTaskCompletion = async (id) => {
    const task = await getTaskById(id);
    if (!task) return null;
    task.completed = !task.completed;
    return task;
}

module.exports = { createTask, getTaskById, getTasks,  updateTask, deleteTask, toggleTaskCompletion }