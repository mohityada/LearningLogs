package com.learning.logs.learning_logs_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;

/**
 * Represents a single learning log entry.
 * This is an Entity class, which means it maps to a table in the database.
 */
@Entity
public class LogEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String topic;
    private LocalDate date;
    private Integer durationInMinutes; // Duration of the learning session in minutes
    private Integer efficiencyRating; // A rating from 1 (low) to 5 (high)
    private String notes;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Integer getDurationInMinutes() {
        return durationInMinutes;
    }

    public void setDurationInMinutes(Integer durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
    }

    public Integer getEfficiencyRating() {
        return efficiencyRating;
    }

    public void setEfficiencyRating(Integer efficiencyRating) {
        this.efficiencyRating = efficiencyRating;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}