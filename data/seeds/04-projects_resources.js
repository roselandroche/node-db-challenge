
exports.seed = async (knex) => {
  await knex("projects_resources").insert([
    {projects_id: 1, resources_id: 1}
  ])  
};
