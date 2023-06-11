const router = require("express").Router();
const Resource = require("./model");

router.get("/", (req, res, next) => {
  Resource.getAllResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  try {
    const newResource = await Resource.createNewResource(req.body);
    res.status(200).json(newResource);
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
