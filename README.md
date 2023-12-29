Run: yarn start:dev

.env: thay đổi phù hợp với db DATABASE_URL="mysql://root:1234@localhost:3306/db_AT?schema=public"

CSDL: USE db_AT;
CREATE TABLE `users` (
`user_id` INT NOT NULL AUTO_INCREMENT,
`user_name` VARCHAR(255) DEFAULT NULL,
`email` VARCHAR(255) NOT NULL,
`phone` VARCHAR(255) DEFAULT NULL,
`password` VARCHAR(255) NOT NULL,
`user_deleted` BOOLEAN DEFAULT NULL,
`position_id` INT DEFAULT NULL,
`company_id` INT DEFAULT NULL,
`department_id` INT DEFAULT NULL,
`roles_name` VARCHAR(255) NOT NULL,
PRIMARY KEY (`user_id`),
FOREIGN KEY (`company_id`) REFERENCES `companies`(`company_id`),
FOREIGN KEY (`position_id`) REFERENCES `position`(`position_id`),
FOREIGN KEY (`department_id`) REFERENCES `departments`(`departments_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `companies` (
`company_id` INT NOT NULL AUTO_INCREMENT,
`company_name` VARCHAR(255) DEFAULT NULL,
`company_address` VARCHAR(255) DEFAULT NULL,
`company_email` VARCHAR(255) DEFAULT NULL,
`company_phone` VARCHAR(255) DEFAULT NULL,
`company_deleted` BOOLEAN DEFAULT NULL,
PRIMARY KEY (`company_id`),
UNIQUE (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `position` (
`position_id` INT NOT NULL AUTO_INCREMENT,
`position_name` VARCHAR(255) DEFAULT NULL,
PRIMARY KEY (`position_id`),
UNIQUE (`position_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `departments` (
`departments_id` INT NOT NULL AUTO_INCREMENT,
`departments_name` VARCHAR(255) DEFAULT NULL,
PRIMARY KEY (`departments_id`),
UNIQUE (`departments_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `leave_form` (
`Leave_form_id` INT NOT NULL AUTO_INCREMENT,
`Leave_form_quantity` INT DEFAULT NULL,
`discription` VARCHAR(255) DEFAULT NULL,
`status` BOOLEAN DEFAULT NULL,
`Leave_form_deleted` BOOLEAN DEFAULT NULL,
`user_id` INT NOT NULL,
PRIMARY KEY (`Leave_form_id`),
FOREIGN KEY (user_id) REFERENCES `users`(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO roles (roles_name) VALUES
('admin'),
('user');

INSERT INTO companies (company_name, company_address, company_email, company_phone, company_deleted) VALUES
('Company HCM', '789 Main Street', 'companyA@example.com', '123-456-7890', 0),
('Company DN', '1011 Main Street', 'companyA@example.com', '123-456-7890', 0),
('Company HN', '1213 Avenue', 'companyB@example.com', '987-654-3210', 0);

INSERT INTO position (position_name) VALUES
('CEO'),
('Manager'),
('Developer'),
('Sales Representative');

INSERT INTO departments (departments_name) VALUES
('Finance'),
('Marketing'),
('IT');

INSERT INTO users (user_name, email, phone, password, user_deleted, position_id, company_id, department_id, roles_name) VALUES
('Nguyễn HN 1', 'john@example.com', '123-456-7890', 'hashed_password1', 0, 3, 3, 1, 'user'),
('Nguyễn HN 2', 'john2@example.com', '123-456-7891', 'hashed_password2', 0, 3, 3, 2, 'user'),
('Nguyễn HN 3', 'john3@example.com', '123-456-7892', 'hashed_password3', 0, 1, 3, 3, 'user'),
('Nguyễn HN 4', 'john4@example.com', '123-456-7893', 'hashed_password4', 0, 2, 3, 1, 'user'),
('Nguyễn HN 5', 'john5@example.com', '123-456-7894', 'hashed_password5', 0, 4, 3, 2, 'user'),
('Nguyễn HN 6', 'jane@example.com', '987-654-3210', 'hashed_password6', 0, 4, 3, 3, 'user'),

('Nguyễn HN 1', 'john@example.com', '123-456-7890', 'hashed_password1', 0, 3, 2, 1, 'user'),
('Nguyễn HN 2', 'john2@example.com', '123-456-7891', 'hashed_password2', 0, 3, 2, 2, 'user'),
('Nguyễn HN 3', 'john3@example.com', '123-456-7892', 'hashed_password3', 0, 1, 2, 3, 'user'),
('Nguyễn HN 4', 'john4@example.com', '123-456-7893', 'hashed_password4', 0, 2, 2, 1, 'user'),
('Nguyễn HN 5', 'john5@example.com', '123-456-7894', 'hashed_password5', 0, 4, 2, 2, 'user'),
('Nguyễn HN 6', 'jane@example.com', '987-654-3210', 'hashed_password6', 0, 4, 2, 3, 'user'),

('Nguyễn HCM 1', 'john@example.com', '123-456-7890', 'hashed_password1', 0, 3, 1, 1, 'user'),
('Nguyễn HCM 2', 'john2@example.com', '123-456-7891', 'hashed_password2', 0, 3, 1, 2, 'user'),
('Nguyễn HCM 3', 'john3@example.com', '123-456-7892', 'hashed_password3', 0, 1, 1, 3, 'user'),
('Nguyễn HCM 4', 'john4@example.com', '123-456-7893', 'hashed_password4', 0, 2, 1, 1, 'user'),
('Nguyễn HCM 5', 'john5@example.com', '123-456-7894', 'hashed_password5', 0, 4, 1, 2, 'user'),
('Nguyễn HCM 6', 'jane@example.com', '987-654-3210', 'hashed_password6', 0, 4, 1, 3, 'user');

INSERT INTO users (user_name, email, phone, password, user_deleted, position_id, company_id, department_id, roles_name) VALUES
('Nguyễn Trung Nguyên', 'ntnguyen@gmail.com', '123-456-7890', '123', 0, NULL, NULL, NULL, 'admin');

INSERT INTO Leave_form (Leave_form_quantity, discription, status, Leave_form_deleted, user_id) VALUES
(3, 'Annual leave request', 1, 0, 1),
(1, 'Sick leave request', 1, 0, 2);

INSERT INTO leave_form (Leave_form_quantity, discription, status, Leave_form_deleted, user_id) VALUES
(3, 'Annual leave request', 0, 0, 9),
(2, 'Sick leave request', 0, 0, 12),
(4, 'Personal leave request', 0, 0, 3),
(1, 'Vacation leave request', 0, 0, 4),
(2, 'Family leave request', 0, 0, 11),
(3, 'Emergency leave request', 0, 0, 6);

INSERT INTO leave_form (Leave_form_quantity, discription, status, Leave_form_deleted, user_id) VALUES
(3, 'Annual leave request', 0, 0, 2),
(2, 'Sick leave request', 0, 0, 5),
(4, 'Personal leave request', 0, 0, 7),
(1, 'Vacation leave request', 0, 0, 8),
(2, 'Family leave request', 0, 0, 10),
(3, 'Emergency leave request', 0, 0, 13);

INSERT INTO leave_form (Leave_form_quantity, discription, status, Leave_form_deleted, user_id) VALUES
(3, 'Annual leave request', 0, 0, 14),
(2, 'Sick leave request', 0, 0, 15),
(4, 'Personal leave request', 0, 0, 16),
(1, 'Vacation leave request', 0, 0, 17),
(2, 'Family leave request', 0, 0, 18),
(3, 'Emergency leave request', 0, 0, 19);
