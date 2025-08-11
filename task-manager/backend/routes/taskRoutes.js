const express = require('express');
var router = express.Router();
const taskController = require('../controllers/taskController');
router.route('/')
    .get(taskController.getTasks)
    .post(taskController.createTask);
router.route('/:id')
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);
router.route('/:id/toggle')
      .patch(taskController.toggleTaskCompletion);

module.exports = router;