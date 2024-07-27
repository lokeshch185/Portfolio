import React, { useEffect, useState } from 'react';

const Leetcode = () => {
  const [userData, setUserData] = useState(null);
  const [totalData, setTotalData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/get-leetcode-data');
        const result = await response.json();
        console.log(result);
        if (result.success) {
          setUserData(result.data.matchedUser);
          const problems = result.data.problems;
          const totalProblems = problems.reduce((acc, item) => {
            acc[item.difficulty] = item.count;
            return acc;
          }, {});
          setTotalData(totalProblems);
        } else {
          setError(result.message || 'Error fetching data');
        }
      } catch (error) {
        setError('Error fetching LeetCode data');
      } finally {
        setLoading(false);
      }
    };

    fetchLeetcodeData();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  // Helper function to get total problems for a difficulty level
  const getTotalProblems = (difficulty) => {
    return totalData[difficulty] || 0;
  };

  // Helper function to calculate progress
  const getProgress = (count, total) => {
    return total > 0 ? (count / total) * 100 : 0;
  };

  return (
    <div className="max-w-xl mx-auto ">
      <h2 className="text-2xl font-semibold mb-4 text-white">LeetCode Content</h2>
      {userData ? (
        <div>
          <h3 className="text-xl font-medium mb-2 text-white">{userData.username}</h3>
          <div className="space-y-4">
            {['All', 'Easy', 'Medium', 'Hard'].map((difficulty) => {
              const total = getTotalProblems(difficulty);
              const count = userData.submitStats.acSubmissionNum.find(item => item.difficulty === difficulty)?.count || 0;
              const progress = getProgress(count, total);

              return (
                <div key={difficulty} className="flex items-center space-x-4">
                  <span className="w-20 font-medium text-white">{difficulty}</span>
                  <div className="flex-1">
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="text-xs font-semibold inline-block py-1 px-2 rounded text-white bg-slate-400 uppercase last:mr-0 mr-1">
                          {count} / {total}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-full bg-gray-200 h-1 rounded-full">
                          <div
                            className="bg-slate-800 h-full rounded-full"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
};

export default Leetcode;
