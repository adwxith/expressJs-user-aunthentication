# User Authentication System

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Using .env for Secure Configuration](#using-env-for-secure-configuration)
  - [Without .env for Basic Configuration](#without-env-for-basic-configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

This project is a user authentication system built with Node.js, Express, MySQL, and bcrypt for password hashing. It provides endpoints for user registration and login. You can choose to use a secure configuration using a `.env` file for sensitive data or a basic configuration without it.

## Features

- User registration with password hashing
- User login with secure password verification
- Protection of sensitive data using environment variables
- Database connection with minimal permissions for added security

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MySQL database installed
- A text editor or IDE of your choice

## Getting Started

### Using .env for Secure Configuration

1. Clone the repository:

   ```bash
   git clone https://github.com/adwxith/expressJs-user-aunthentication.git
   ```

2. Install the project dependencies:

   ```bash
   cd your-repo
   npm install
   ```

3. Install `nodemon` and `dotenv` as development dependencies:

   ```bash
   npm i nodemon dotenv --save-dev
   ```

4. Create a `.env` file in the project root and add the following configuration:

   ```
   DB_HOST=your-db-host
   DB_USER=your-db-user
   DB_PASSWORD=your-db-password
   DB_DATABASE=your-db-name
   ```

   Replace `your-db-host`, `your-db-user`, `your-db-password`, and `your-db-name` with your actual database information. Ensure this file is not committed to version control for security.

 5. To enhance the security of your MySQL database, it's recommended to create a new user with limited privileges. Follow these steps to create the new user:

   1. Open your MySQL database management tool (e.g., phpMyAdmin).

   2. Click on the "Administration" tab on the top left.

   3. Navigate to "Users and Privileges."

   4. Click the "(ADD ACCOUNT)" button on the bottom.

   5. Fill in the user details as follows:
      - **Login Name:** newuser
      - **Authentication Type:** Standard
      - **Limit to Hosts Matching:** localhost
      - **Password:** password1#

   6. Under the "Global Privileges" or "Database-Specific Privileges" section, assign limited privileges to this user, such as:
      - SELECT
      - INSERT
      - DELETE

   7. Ensure you do not assign Database Administrator privileges to the new user.

6. Add '.env' to index.js:
  
   ```
   require("dotenv").config()
   ```
   copy this to index.js file

7. Start the application with `node`:

   ```bash
   node index.js
   ```

   This will run your application with the secure configuration and automatic code reloading.

### Without .env for Basic Configuration

1. Clone the repository:

   ```bash
   git clone https://github.com/adwxith/expressJs-user-aunthentication.git
   ```

2. Install the project dependencies:

   ```bash
   cd your-repo
   npm install
   ```

3. Adjust the server configuration in the `index.js` file. Update the following details directly in the code:

   ```javascript
   const db = mysql.createConnection({
     host: 'your-db-host',
     user: 'your-db-user',
     password: 'your-db-password',
     database: 'your-db-name'
   });
   ```

4. Start the application:

   ```bash
   npm index.js
   
   ```

   This will run your application with the basic configuration.

## Usage

1. The server will be running on port 3000 by default. You can change this in the code if needed.

2. You can now use the `/createUser` and `/login` endpoints for user registration and login.

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the project.
2. Create your feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This `readme.md` covers both scenarios: one with secure configuration using a `.env` file for sensitive data and the other with a basic configuration directly in the code. It also includes the necessary instructions for installing `nodemon` and `dotenv` when using the `.env` file.
