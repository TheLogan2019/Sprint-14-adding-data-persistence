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
  const taskTest = tasks.map((task) => {
    if (task.task_completed === 1) {
      return { ...task, task_completed: true };
    } else {
      return { ...task, task_completed: false };
    }
  });
  return taskTest;
}

async function createNewTask(task) {
  const [task_id] = await db("tasks").insert(task);
  const newTask = await db("tasks").where("task_id", task_id).first();
  if (newTask.task_completed === 1 || newTask.task_completed === true) {
    return { ...newTask, task_completed: true };
  } else {
    return { ...newTask, task_completed: false };
  }
}

module.exports = { getTaskById, getAllTasks, createNewTask };
