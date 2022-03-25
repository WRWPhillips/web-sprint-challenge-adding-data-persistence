// npm import
const express = require('express');
// model import
const Projects = require('./model.js');
// router declaration
const ProjectRouter = express.Router();
// route GET localhost:9000/api/projects/
ProjectRouter.get('/', (req, res, next) => {
  Projects.find()
    .then(projects => {
      res.json(projects)
    })
    .catch(next)
});
// route POST localhost:9000/api/projects/
ProjectRouter.post('/', (req, res, next) => {
  const project = req.body;

  Projects.add(project)
    .then(project => {
     res.status(201).json(project);
    })
    .catch(next)
});
// router export
module.exports = ProjectRouter;