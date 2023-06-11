const db = require("../../data/dbConfig");

async function getTaskById(task_id) {
  const task = await db("task").where(task_id).first();
  return task;
}

async function getAllTasks() {
  const tasks = await db("tasks");
  return tasks;
}

async function createNewTask(task) {
  const [task_id] = await db("tasks").insert(task);
  return await getTaskById(task_id);
}

module.exports = { getTaskById, getAllTasks, createNewTask };
