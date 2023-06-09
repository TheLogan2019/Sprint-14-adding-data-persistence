const router = require("express").Router();

const Project = require("./model");

router.get("/", (req, res, next) => {
  Project.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.use((err, res, req, next) => {
  //eslint-disable-line
  res.status(500).json({
    customMessage: "something went wrong!",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
