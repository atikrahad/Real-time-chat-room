# Real-Time Chat Application (Backend)

## Introduction

Welcome to our Real-Time Chat Application backend! This application provides real-time communication using Node.js, Express, and Socket.io. It utilizes a PostgreSQL database to store chat messages and chat rooms. The backend exposes RESTful API endpoints for managing chat rooms and messages, and Socket.io handles real-time communication between users.

## Features

- **Node.js Server with Express**: Sets up a Node.js server using Express for handling HTTP requests.
- **Socket.io Integration**: Implements Socket.io for real-time communication between users.
- **PostgreSQL Database**: Utilizes a PostgreSQL database to store chat messages and chat rooms.
- **API Endpoints**:
  - `GET /rooms`: Fetches all chat rooms.
  - `GET /rooms/:id/messages`: Fetches messages for a specific chat room.
  - `POST /rooms`: Creates a new chat room.
  - `POST /rooms/:id/messages`: Sends a new message to a chat room.
- **Input Validation**: Implements input validation for API requests.
- **Error Handling**: Provides error handling for API requests.
- **Security Best Practices**: Implements security best practices to ensure data integrity and prevent common vulnerabilities.

## Setup Instructions

1. **Clone the Repository**: Clone this repository to your local machine.
    ```bash
    git clone <repository-url>
    ```

2. **Install Dependencies**: Navigate to the project directory and install dependencies.
    ```bash
    cd server
    npm install
    ```

3. **Set Up PostgreSQL Database**: Create a PostgreSQL database and update the database configuration in `config/db.js`.

4. **Run Migrations**: Run database migrations to create the necessary tables.
    ```bash
    nodemon index.js
    ```

5. **Start the Server**: Start the Node.js server.
    ```bash
    node index.js
    ```

## API Endpoints

- `GET /rooms`: Fetch all chat rooms.
- `GET /rooms/:id/messages`: Fetch messages for a specific chat room.
- `POST /rooms`: Create a new chat room.
- `POST /rooms/:id/messages`: Send a new message to a chat room.

## Socket.io Implementation

Socket.io is used for real-time communication between users. Messages are broadcasted to all users in the chat room in real-time.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Open a pull request for review.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or support, please contact [Your Name](mailto:your.email@example.com).
