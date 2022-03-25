// db import
const db = require('../../data/dbConfig');

// find model function
async function find() {
  const projects = await db('projects');
  projects.forEach(project => {
  !project.project_completed ? project.project_completed = false: project.project_completed = true;
  });
  return projects;
}; 

// add model function
async function add(project) {
  const newProject = await  db('projects')
    .insert(project)
    .then(([project_id]) => {
      return db('projects')
	.where('project_id', project_id)
	.first();
    });
  !newProject.project_completed ? newProject.project_completed = false : newProject.project_completed = true;
  return newProject;
}

// model exports
module.exports = {
  find, 
  add
} 
