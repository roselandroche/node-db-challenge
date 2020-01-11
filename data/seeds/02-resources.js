
exports.seed = async (knex) => {
  await knex("resources").insert([
    {name: "MacBook Air", description: "Laptop"}
  ])  
};
