import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import LogForm from './components/LogForm';
import LogList from './components/LogList';
import Dashboard from './components/Dashboard';

// The base URL for your Spring Boot backend API.
const API_URL = 'http://localhost:8080/api/logs';

function App() {
  // State to hold the list of log entries.
  const [logs, setLogs] = useState([]);
  // State to manage loading status to give user feedback.
  const [loading, setLoading] = useState(true);
  // State to handle any errors during API calls.
  const [error, setError] = useState(null);

  // Function to fetch logs from the backend.
  // useCallback is used to memoize the function, preventing unnecessary re-renders.
  const fetchLogs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(API_URL);
      // Sort logs by date, most recent first.
      const sortedLogs = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setLogs(sortedLogs);
    } catch (err) {
      console.error("Error fetching logs:", err);
      setError("Failed to fetch learning logs. Please make sure the backend server is running.");
    } finally {
      setLoading(false);
    }
  }, []);

  // useEffect hook to call fetchLogs when the component mounts.
  // The empty dependency array [] ensures this runs only once.
  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  // Handler function to add a new log.
  // This function will be passed as a prop to the LogForm component.
  const addLog = async (log) => {
    try {
      await axios.post(API_URL, log);
      // After successfully adding a log, refresh the list.
      fetchLogs();
    } catch (err) {
      console.error("Error adding log:", err);
      setError("Failed to add new log entry.");
    }
  };

  // Handler function to delete a log.
  // This will be passed to the LogList component.
  const deleteLog = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      // Refresh the list after deletion.
      fetchLogs();
    } catch (err) {
      console.error("Error deleting log:", err);
      setError("Failed to delete log entry.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">LearningLogs</h1>
          <p className="text-gray-600 mt-1">Track your daily learning journey</p>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">{error}</div>}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form and Dashboard */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <LogForm onAddLog={addLog} />
            <Dashboard logs={logs} />
          </div>

          {/* Right Column: Log List */}
          <div className="lg:col-span-2">
            <LogList logs={logs} onDeleteLog={deleteLog} loading={loading} />
          </div>
        </div>
      </main>
      
      <footer className="text-center py-4 mt-8 text-gray-500 text-sm">
        <p>LearningLogs &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
