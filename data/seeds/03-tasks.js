exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
        {
            task_description: "construct large hadron collider",
            task_notes: "build like pipe tunnel and particle pushers or magnets or something",
            task_completed: true,
            project_id: 1
        },
        {
            task_description: "plunge the world into a multiversal cthonic hellscape by tampering with universal laws laid down by the most holy",
            task_notes: "we will live to see manmade horrors beyond comprehension",
            task_completed: false,
            project_id: 1
        },
        {
            task_description: "buy some cheetos",
            task_notes: "you gotta go to the store for this",
            task_completed: false,
            project_id: 2
        },
        {
            task_description: "eat them",
            task_notes: "put them in your mouth, masticate, swallow",
            task_completed: false,
            project_id: 2
        },
        {
            task_description: "gather stakeholders",
            task_notes: "pitch your twisted ideology to various oligarchs, sell an empty dream to the most depraved parasitical people on earth, get them to buy into your underwater city",
            task_completed: false,
            project_id: 3
        },
        {
            task_description: "create underwater city",
            task_notes: "complete with those weird drill guys and creepy kids",
            task_completed: false,
            project_id: 3
        },
        {
            task_description: "allow your city to plunge into disarray",
            task_notes: "I forgot the plot to the game I played it when I was like 12",
            task_completed: false,
            project_id: 3
        },
        {
            task_description: "remove hateful neck tattoo",
            task_notes: "they wont even let me in the building",
            task_completed: false,
            project_id: 4
        },
        {
            task_description: "pass GED",
            task_notes: "the test is easy, it's getting myself there",
            task_completed: false,
            project_id: 4
        },
    ]);
};