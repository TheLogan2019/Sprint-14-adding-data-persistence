const router = require("express").Router();

router.use((err, res, req, next) => {
  //eslint-disable-line
  res.status(500).json({
    customMessage: "something went wrong!",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
