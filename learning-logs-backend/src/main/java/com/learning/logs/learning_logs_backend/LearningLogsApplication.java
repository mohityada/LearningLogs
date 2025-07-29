package com.learning.logs.learning_logs_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * The main entry point for the Spring Boot application.
 */
@SpringBootApplication
@EnableJpaRepositories("com.learning.logs.learning_logs_backend.repository")
@EntityScan("com.learning.logs.learning_logs_backend.model")
public class LearningLogsApplication {

    public static void main(String[] args) {
        SpringApplication.run(LearningLogsApplication.class, args);
    }

}