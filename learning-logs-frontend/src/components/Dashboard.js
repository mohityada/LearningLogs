import React from 'react';

function Dashboard({ logs }) {
  const getTotalHours = () => {
    if (!logs || logs.length === 0) return 0;
    const totalMinutes = logs.reduce((sum, log) => sum + log.durationInMinutes, 0);
    return (totalMinutes / 60).toFixed(2);
  };

  const getAverageEfficiency = () => {
    if (!logs || logs.length === 0) return 'N/A';
    const totalEfficiency = logs.reduce((sum, log) => sum + log.efficiencyRating, 0);
    return (totalEfficiency / logs.length).toFixed(1);
  };
  
  const getLogsThisWeek = () => {
    const today = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);
    return logs.filter(log => new Date(log.date) >= oneWeekAgo).length;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
          <span className="font-semibold text-gray-700">Total Hours Logged</span>
          <span className="font-bold text-lg text-indigo-600">{getTotalHours()}h</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
          <span className="font-semibold text-gray-700">Average Efficiency</span>
          <span className="font-bold text-lg text-green-600">{getAverageEfficiency()} / 5</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
          <span className="font-semibold text-gray-700">Logs This Week</span>
          <span className="font-bold text-lg text-blue-600">{getLogsThisWeek()}</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;