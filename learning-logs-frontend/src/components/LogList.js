import React from 'react';

function LogList({ logs, onDeleteLog, loading }) {

  const EfficiencyStars = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (loading) {
    return <div className="text-center p-10">Loading logs...</div>;
  }
  
  if (!logs || logs.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-2">No Logs Found</h2>
        <p className="text-gray-600">Start by adding a new learning log!</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Learning History</h2>
      <div className="space-y-4">
        {logs.map(log => (
          <div key={log.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-indigo-700">{log.topic}</h3>
                <p className="text-sm text-gray-500">{new Date(log.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</p>
              </div>
              <button onClick={() => onDeleteLog(log.id)}
                      className="text-red-500 hover:text-red-700 font-semibold transition-colors">
                &times;
              </button>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
                <span className="font-semibold">{log.durationInMinutes} minutes</span>
                <EfficiencyStars rating={log.efficiencyRating} />
            </div>
            {log.notes && (
              <p className="mt-3 text-gray-700 bg-gray-50 p-3 rounded-md">{log.notes}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogList;
