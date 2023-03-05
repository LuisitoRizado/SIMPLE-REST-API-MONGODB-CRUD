const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// create user
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all users
router.get("/users", (req, res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
 
  //get one user
router.get("/user/:id", (req, res) => {
    const {id} = req.params;
    userSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
 
    //put one user
router.put("/user/:id", (req, res) => {
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchema
      .updateOne({_id:id}, { $set:{name:name, age:age, email:email}})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
     //delete user
router.delete("/user/:id", (req, res) => {
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchema
      .deleteOne({_id:id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
module.exports = router;