// npm import
const express = require('express');
// model import
const Tasks = require('./model.js');
// router declaration
const TaskRouter = express.Router();
// GET route localhost:9000/api/tasks
TaskRouter.get('/', (req, res, next) => {
  Tasks.find()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(next)
});
// POST route localhost:9000/api/tasks
TaskRouter.post('/', (req, res, next) => {
  const task = req.body;

  Tasks.add(task)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(next)
});
// router export
module.exports = TaskRouter;