const {Social} = require('../models/portfolioModel');

const updateSocial = async (req, res) => {
  try {
    const social = await Social.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data: social,
      success: true,
      message: "Social updated successfully",
    });
  } catch (error) {
    console.error('Error updating social:', error);
    res.status(500).send({
      success: false,
      message: "Error updating social.",
      error: error.message,
    });
  }
};

const getLeetcode = async () => {
  try {
    const social = await Social.find();
    return social[0]?.leetcode;
  } catch (error) {
    console.error('Error fetching leetcode username:', error);
    throw new Error('Error fetching letcode username.');
  }
};

const getCodeforces = async () => {
    try {
      const social = await Social.find();
      return social[0]?.codeforces;
    } catch (error) {
      console.error('Error fetching codeforces username:', error);
      throw new Error('Error fetching codeforces username.');
    }
  };

module.exports = {
  updateSocial,
  getLeetcode,
  getCodeforces,
};
