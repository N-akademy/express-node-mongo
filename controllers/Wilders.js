const WilderModel = require("../models/Wilder");
const controllers = {};


controllers.create = async (req, res) => {
  await WilderModel.init()
  try {
    const wilder = new WilderModel(req.body);
    const result = await wilder.save()
    res.json(result);
  } catch (error) {
    console.error(err);
        res.status(500).json({ message: 'db error' })
  }
}

controllers.read = async(req, res) => {
  await WilderModel.find({})
  res.json({ wilders })
}

controllers.readOne = async(req, res) => {
  await WilderModel.findById(req.params.id)
  res.json({ wilders })
}

controllers.update = async(req, res) => {
  await WilderModel.findById(req.params.id)
  try {
    if (wilder) {
      Object.assign(wilder, req.body);
      wilder.save().then(() => {
        res.json(wilder)
      })
    } else {
      res.json({ success: false, result: "No such wilder exists" })
    }
  } catch (error) {
    res.json({ success: false, result: "ERR" })
  }
},

controllers.delete = async(req, res) => {
  await WilderModel.findById(req.params.id)
  try {
    wilder.remove();
    res.json(wilder);
  } catch (error) {
    res.status(404).json({message:"Wilder not found!"})
  }
}

module.exports = controllers





