CREATE DATABASE taskApp;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE users(
    id varchar(255) PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id varchar(255) REFERENCES users(id) ON DELETE CASCADE,
    task_name varchar(255) NOT NULL
);

CREATE TABLE subtasks(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    subtask varchar(1000),
    task_order INT
);