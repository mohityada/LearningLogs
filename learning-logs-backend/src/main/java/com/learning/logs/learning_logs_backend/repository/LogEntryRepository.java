package com.learning.logs.learning_logs_backend.repository;

import com.learning.logs.learning_logs_backend.model.LogEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the LogEntry entity.
 * This interface provides all the standard CRUD (Create, Read, Update, Delete) operations
 * on the LogEntry entity without needing to write any implementation code.
 */
@Repository
public interface LogEntryRepository extends JpaRepository<LogEntry, Long> {
    // JpaRepository provides methods like findAll(), findById(), save(), deleteById(), etc.
    // You can also define custom query methods here if needed. For example:
    // List<LogEntry> findByTopic(String topic);
}
