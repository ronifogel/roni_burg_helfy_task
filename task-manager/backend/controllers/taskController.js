const taskService = require('../services/taskService');

const getTasks = async (req, res) => {
    res.json(await taskService.getTasks());
};
const createTask = async (req, res) => {
    res.json(await taskService.createTask(req.body.title, req.body.description, req.body.priority));
    if (!req.body.title || !req.body.description || !req.body.priority) { {
        return res.status(400).json({ errors: ['Title, description and priority is required'] });
    }
   
};
};

const updateTask = async (req, res) => {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) {
        return res.status(404).json({ errors: ['Task not found'] });
    }
    res.json(task);
};
const deleteTask = async (req, res) => {
    const task = await taskService.deleteTask(req.params.id);
    if (!task) {
        return res.status(404).json({ errors: ['Task not found'] });
    }
    res.json(task);
};
const toggleTaskCompletion = async (req, res) => {
    const task = await taskService.toggleTaskCompletion(req.params.id);
    if (!task) {
        return res.status(404).json({ errors: ['Task not found'] });
    }
    res.json(task);
}
module.exports = { createTask, getTasks, updateTask, deleteTask, toggleTaskCompletion };