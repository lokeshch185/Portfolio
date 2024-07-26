const fetch = require('node-fetch');
const  {getLeetcode}  = require('./socialController');

const url = 'https://leetcode.com/graphql/';

const getLeetcodeData = async (req, res) => {
  try {
    const leetcodeUsername = await getLeetcode();
    
    if (!leetcodeUsername) {
      return res.status(404).send({
        success: false,
        message: "Leetcode username not found."
      });
    }

    const query = `
    {

    problems: allQuestionsCount { 
            difficulty 
            count 
        }

      matchedUser(username: "${leetcodeUsername}") {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
            
          }
        }
      }
    }
    `;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    res.status(200).send({
      data: data.data,
      success: true,
      message: "LeetCode data fetched successfully.",
    });
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    res.status(500).send({
      success: false,
      message: "Error fetching LeetCode data.",
      error: error.message,
    });
  }
};

module.exports = {
 getLeetcodeData,
};
