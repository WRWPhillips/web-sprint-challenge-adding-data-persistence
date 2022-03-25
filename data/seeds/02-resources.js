
exports.seed = function(knex, Promise) {
    return knex('resources').insert([
        {
            resource_name: "cheetos",
            resource_description: "salty corn puffs with fake cheese"
        }, 
        {
            resource_name: "horse lard",
            resource_description: "rendered horse fat purified into lard"
        },
        {
            resource_name: "money",
            resource_description: "liquid fiat currency"
        },
        {
            resource_name: "steel girders",
            resource_description: "I think that's how it's spelled"
        },
        {
            resource_name: "libertarian ideology",
            resource_description: "if my neighbor starts feeding bears and they eat my kid there's nothing I can do about it"
        }, 
        {
            resource_name: "elbow grease",
            resource_description: "when I was a kid we all drank from the hose and got beat for saying cuss words"
        },
        {
            resource_name: "occult energies",
            resource_description: "I can't say too much about it"
        },
        {
            resource_name: "self hate",
            resource_description: "the best motivator"
        },
    ])
}