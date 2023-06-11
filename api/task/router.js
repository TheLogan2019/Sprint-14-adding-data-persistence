const router = require("express").Router();
const Task = require("./model");

router.get("/", (req, res, next) => {
  Task.getAllTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  try {
    const newTask = await Task.createNewTask(req.body);
    res.status(200).json(newTask);
  } catch (err) {
    next(err);
  }
});

//prettier-ignore
router.use((err, res, req, next) => {//eslint-disable-line
  res.status(500).json({
    customMessage: "something went wrong!",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
