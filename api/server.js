// npm import
const express = require('express');
// router imports
const ProjectRouter = require('./project/router.js');
const ResourceRouter = require('./resource/router.js');
const TaskRouter = require('./task/router.js');
// server declaratiojn
const server = express();
// json
server.use(express.json());
// router middleware implementation
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);
// server export
module.exports = server;
