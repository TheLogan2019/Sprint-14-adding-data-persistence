const db = require("../../data/dbConfig");

async function getTaskById(task_id) {
  const task = await db("task").where(task_id).first();
  return task;
}

async function getAllTasks() {
  const tasks = await db("tasks as t").join(
    "projects as p",
    "p.project_id",
    "t.project_id"
  );
  return tasks;
}

async function createNewTask(task) {
  const [task_id] = await db("tasks").insert(task);
  const newTask = await db("tasks").where("task_id", task_id).first();
  return newTask;
}

module.exports = { getTaskById, getAllTasks, createNewTask };
