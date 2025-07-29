package com.learning.logs.learning_logs_backend.service;

import com.learning.logs.learning_logs_backend.model.LogEntry;
import com.learning.logs.learning_logs_backend.repository.LogEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/**
 * Service layer that contains the business logic for managing log entries.
 * It acts as an intermediary between the Controller and the Repository.
 */
@Service
public class LogEntryService {

    @Autowired
    private LogEntryRepository logEntryRepository;

    /**
     * Retrieves all log entries from the database.
     * @return A list of all LogEntry objects.
     */
    public List<LogEntry> getAllLogEntries() {
        return logEntryRepository.findAll();
    }

    /**
     * Retrieves a single log entry by its ID.
     * @param id The ID of the log entry to find.
     * @return An Optional containing the LogEntry if found, or an empty Optional otherwise.
     */
    public Optional<LogEntry> getLogEntryById(Long id) {
        return logEntryRepository.findById(id);
    }

    /**
     * Creates and saves a new log entry.
     * @param logEntry The LogEntry object to be saved.
     * @return The saved LogEntry object, which will include the generated ID.
     */
    public LogEntry createLogEntry(LogEntry logEntry) {
        return logEntryRepository.save(logEntry);
    }

    /**
     * Deletes a log entry by its ID.
     * @param id The ID of the log entry to delete.
     */
    public void deleteLogEntry(Long id) {
        logEntryRepository.deleteById(id);
    }
}

