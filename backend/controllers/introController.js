const { Intro } = require('../models/portfolioModel');

const updateIntro = async (req, res) => {
  try {
    const id = req.body._id;
    const updatedIntro = await Intro.findByIdAndUpdate(
      id,
      req.body,
      { new: true}
    );
  res.status(200).send({
      data: updatedIntro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    console.error("Error updating intro:", error);
    res.status(500).send({ success: false, message: "An error occurred", error: error.message });
  }
};

module.exports = {
  updateIntro,
};
