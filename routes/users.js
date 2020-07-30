const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res, next) => {
  res.render();
});

router
  .route("/:id")
  //! User.find() absent car on affichera pas TOUS les Users
  .get((req, res, next) => {
    User.findById(req.params.id)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch(next);
  })
  .patch((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((updatedUser) => {
        res.status(200).json(updatedUser);
      })
      .catch(next);
  })
  .delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  });

module.exports = router;
