const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();
/*
const users = require("./users.js");
const User = users.model;
const validUser = users.valid;
*/
const groupSchema = new mongoose.Schema({
  name: String
});

const Group = mongoose.model('Group', groupSchema);

/*API Endpoints*/

//add a group
router.post('/', async (req, res) => {
  const group = new Group({ name: req.body.name });
  try {
    await group.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

//check if group already exists
router.get('/:name', async (req, res) => {
  //console.log(req.params.name);
  try {
    let group = await Group.findOne({ _name: req.params.name });
    console.log("Group" + group);
    return res.send(group);
  } catch {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  routes: router,
  model: Group
}
