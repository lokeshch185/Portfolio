// controllers/positionController.js
const Position = require('../models/portfolioModel');
const addPosition = async (req, res) => {
  try {
    const position = new Position(req.body);
    await position.save();
    res.status(200).send({
      data: position,
      success: true,
      message: "Position added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePosition = async (req, res) => {
  try {
    const position = await Position.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: position,
      success: true,
      message: "Position updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePosition = async (req, res) => {
  try {
    const position = await Position.findOneAndDelete({ _id: req.body._id });
    res.status(200).send({
      data: position,
      success: true,
      message: "Position deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addPosition,
  updatePosition,
  deletePosition,
};
