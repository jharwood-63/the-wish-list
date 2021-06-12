const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;
//Wish Schema
const wishSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  wish: String,
  isCalledFor: false,
  isBought: false
});

const Wish = mongoose.model('List', wishSchema);

/*API Endpoints*/

//create a new wish
router.post('/', validUser, async (req, res) => {
  const wish = new Wish({
    user: req.user,
    wish: req.body.wish,
    isCalledFor: false,
    isBought: false
  });
  try {
    await wish.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

//get my wishes

router.get('/', validUser, async (req, res) => {
  try {
    let wishes = await Wish.find({
      user: req.user
    }).sort({
      created: -1
    });
    return res.send(wishes);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.put('/:id', validUser, async (req, res) => {
  try {
    let wish = await Wish.findOne({ _id: req.params.id });
    wish.wish = req.body.wish;
    wish.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
})

module.exports = {
  routes: router,
  model: Wish
}
