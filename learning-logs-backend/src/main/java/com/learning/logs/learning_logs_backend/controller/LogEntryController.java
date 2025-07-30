package com.learning.logs.learning_logs_backend.controller;

import com.learning.logs.learning_logs_backend.model.LogEntry;
import com.learning.logs.learning_logs_backend.service.LogEntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller to handle HTTP requests related to learning log entries.
 * This class exposes the API endpoints that the React frontend will interact with.
 */
@RestController
@RequestMapping("/api/logs") // Base path for all endpoints in this controller
@CrossOrigin(origins = "https://learning-logs-pi.vercel.app/") // Allows requests from the React dev server
public class LogEntryController {

    @Autowired
    private LogEntryService logEntryService;

    /**
     * GET endpoint to fetch all log entries.
     * Maps to GET /api/logs
     * @return A list of all log entries.
     */
    @GetMapping
    public List<LogEntry> getAllLogs() {
        return logEntryService.getAllLogEntries();
    }

    /**
     * POST endpoint to create a new log entry.
     * Maps to POST /api/logs
     * @param logEntry The log entry data from the request body.
     * @return The created log entry with a 201 Created status.
     */
    @PostMapping
    public ResponseEntity<LogEntry> createLog(@RequestBody LogEntry logEntry) {
        LogEntry createdLog = logEntryService.createLogEntry(logEntry);
        return new ResponseEntity<>(createdLog, HttpStatus.CREATED);
    }
    
    /**
     * DELETE endpoint to remove a log entry by its ID.
     * Maps to DELETE /api/logs/{id}
     * @param id The ID of the log to delete, passed as a path variable.
     * @return A response with no content and a 204 No Content status.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLog(@PathVariable Long id) {
        logEntryService.deleteLogEntry(id);
        return ResponseEntity.noContent().build();
    }
}
