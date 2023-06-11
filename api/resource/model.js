const db = require("../../data/dbConfig");

async function getResourceById(resource_id) {
  const resource = await db("resources")
    .where("resource_id", resource_id)
    .first();
  return resource;
}

async function getAllResources() {
  const resources = await db("resources");
  return resources;
}

async function createNewResource(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return await getResourceById(resource_id);
}

module.exports = { getResourceById, getAllResources, createNewResource };
