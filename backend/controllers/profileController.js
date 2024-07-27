const { Intro, About, Project, Social, Experience } = require('../models/portfolioModel');

const getProfileData = async (req, res) => {
  try {
    // Fetch data from all collections
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const experiences = await Experience.find();
    const socials = await Social.find();

    // Send the fetched data in the response
    res.status(200).send({
      intro: intros[0] || {},
      about: abouts[0] || {},
      projects: projects || [],
      experiences: experiences || [],
      socials: socials[0] || {},
    });
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).send({
      success: false,
      message: "Error fetching profile data.",
      error: error.message,
    });
  }
};

module.exports = { getProfileData };
