import React, { useState } from 'react';

function LogForm({ onAddLog }) {
  const [topic, setTopic] = useState('');
  const [durationInMinutes, setDuration] = useState('');
  const [efficiencyRating, setEfficiency] = useState(3);
  const [notes, setNotes] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default to today

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic || !durationInMinutes) {
      alert("Please fill in the topic and duration.");
      return;
    }
    onAddLog({
      topic,
      date,
      durationInMinutes: parseInt(durationInMinutes),
      efficiencyRating: parseInt(efficiencyRating),
      notes,
    });
    // Reset form fields after submission
    setTopic('');
    setDuration('');
    setEfficiency(3);
    setNotes('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Log</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Topic</label>
          <input type="text" id="topic" value={topic} onChange={(e) => setTopic(e.target.value)}
                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 placeholder="e.g., React Hooks" required />
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
          <input type="number" id="duration" value={durationInMinutes} onChange={(e) => setDuration(e.target.value)}
                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 placeholder="e.g., 60" required />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}
                 className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                 required />
        </div>
        <div>
          <label htmlFor="efficiency" className="block text-sm font-medium text-gray-700">Efficiency (1-5)</label>
          <input type="range" id="efficiency" min="1" max="5" value={efficiencyRating} onChange={(e) => setEfficiency(e.target.value)}
                 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
          <div className="text-center font-semibold">{efficiencyRating}</div>
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    rows="3" placeholder="Any key takeaways or challenges?"></textarea>
        </div>
        <button type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
          Add Log
        </button>
      </form>
    </div>
  );
}

export default LogForm;