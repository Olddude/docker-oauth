-- TABLES

CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
  last_login TIMESTAMP
);

CREATE TABLE roles(
  role_id serial PRIMARY KEY,
  role_name VARCHAR (255) UNIQUE NOT NULL
);

CREATE TABLE account_roles (
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  grant_date TIMESTAMP,
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (role_id) REFERENCES roles (role_id),
  FOREIGN KEY (user_id) REFERENCES accounts (user_id)
);

-- INITIAL DATA

-- reader

INSERT INTO accounts(username, password, email, created_on)
VALUES (
  'john.doe',
  '$2y$10$cyTih/GBQUJMwpwkw3AqM.0ECT8.eCbvdyKmnlQe4tUUiamxK55GG', -- reader
  'john.doe@localhost',
  NOW()
);

INSERT INTO roles(role_name) VALUES ('reader');

INSERT INTO account_roles(user_id, role_id, grant_date)
VALUES (
  (SELECT user_id FROM accounts ORDER BY user_id DESC LIMIT 1),
  (SELECT role_id FROM roles ORDER BY role_id DESC LIMIT 1),
  NOW()
);

-- writer

INSERT INTO accounts(username, password, email, created_on)
VALUES (
  'jane.doe',
  '$2y$10$139EUOuBD3Yctza6.D7ZFuP1jeBWlLylqKPtMONsqWPi652eIOBA2', -- writer
  'jane.doe@localhost',
  NOW()
);

INSERT INTO roles(role_name) VALUES ('writer');

INSERT INTO account_roles(user_id, role_id, grant_date)
VALUES (
  (SELECT user_id FROM accounts ORDER BY user_id DESC LIMIT 1),
  (SELECT role_id FROM roles ORDER BY role_id DESC LIMIT 1),
  NOW()
);
