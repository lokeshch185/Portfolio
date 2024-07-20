const fetch = require('node-fetch');
const { getCodeforces } = require('./socialController');


const getCodeforcesData = async (req, res) => {
    try {
        const codeforcesUsername = await getCodeforces();

        if (!codeforcesUsername) {
            return res.status(404).send({
                success: false,
                message: "Codeforces username not found."
            });
        }

        const url = `https://codeforces.com/api/user.info?handles=${codeforcesUsername}`;
        const response = await fetch(url, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        res.status(200).send({
            data: data,
            success: true,
            message: "Codeforces data fetched successfully.",
        });
    } catch (error) {
        console.error('Error fetching Codeforces data:', error);
        res.status(500).send({
            success: false,
            message: "Error fetching Codeforces data.",
            error: error.message,
        });
    }
};

module.exports = {
    getCodeforcesData,
};
