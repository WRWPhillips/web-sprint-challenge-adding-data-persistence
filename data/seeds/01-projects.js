
exports.seed = function(knex, Promise) {
    return knex('projects').insert([
        {project_name: "Large Hadron Collider", 
        project_description: "the goal is to smash particles together until we make the world end", 
        project_completed: false},
        {project_name: "Eat Cheetos", 
        project_description: "I want to eat some cheetos", 
        project_completed: false},
        {project_name: "Massive Underwater City", 
        project_description: "I want to build a Randian libertarian paradise under the water", 
        project_completed: false},
        {project_name: "Graduate high school", 
        project_description: "they wont even let me flip burgers", 
        project_completed: false}
    ]);
};