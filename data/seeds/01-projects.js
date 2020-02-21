
exports.seed = async (knex) => {
  await knex("projects").insert([
    {name: "Node-DB Challenge", description: "Code", completed: false}
  ])  
};
