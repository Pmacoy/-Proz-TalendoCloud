CREATE DATABASE IF NOT EXISTS my_database;

USE my_database;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE profiles (
    user_id INT NOT NULL,
    data_nascimento DATE,
    foto_perfil VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
