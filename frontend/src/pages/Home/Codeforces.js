// Codeforces.js
import React, { useEffect, useState } from 'react';

const Codeforces = () => {
    const [userData, setUserData] = useState(null);
    const username = 'lokeshch185';

    useEffect(() => {
        fetch(`https://codeforces.com/api/user.info?handles=${username}`)
            .then(response => response.json())
            .then(data => setUserData(data.result[0]))
            .catch(error => console.error('Error fetching Codeforces data:', error));
    }, []);

    return (
        <div>
            <h2>Codeforces Content</h2>
            {userData && (
                <div>
                    <h3>{userData.handle}</h3>
                    <p>Rank: {userData.rank}</p>
                    <p>Questions Solved: {userData.rating}</p>
                </div>
            )}
        </div>
    );
};

export default Codeforces;
