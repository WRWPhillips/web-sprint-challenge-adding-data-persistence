// npm import
const express = require('express')

// model import
const Resources = require('./model.js');

// router declaration
const ResourceRouter = express.Router();

// route GET localhost:9000/api/resource/
ResourceRouter.get('/', (req, res, next) => {
  Resources.find()
    .then(resources => {
      res.json(resources)
    })
    .catch(next)
});

// route POST localhost:9000/api/resource/
ResourceRouter.post('/', (req, res, next) => {
  const resource = req.body;

  Resources.add(resource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(next)
});

// router export
module.exports = ResourceRouter;