
exports.seed = async (knex) => {
  await knex("tasks").insert([
    {projects_id: "1", description: "Create database", notes: "Make sure to plan out with pen and paper", completed: false}
  ])  
};
