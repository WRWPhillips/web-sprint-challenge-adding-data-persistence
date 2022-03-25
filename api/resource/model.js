// db import
const db = require('../../data/dbConfig');

// find model function 
function find() {
  return db('resources');
}; 

// add model function
function add(resource) {
  return db('resources')
    .insert(resource)
    .then(() => {
      return(resource)
    });
}

// model exports
module.exports = {
  find, 
  add
} 
