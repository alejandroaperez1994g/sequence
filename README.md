# API Recommendation System

## Description

This project is a TypeScript backend that uses Express and Mongoose to provide a sequence management API. Additionally, Docker is used to set up a MongoDB instance and run the API in a containerized environment.

## Technologies Used

- TypeScript
- Express
- Mongoose
- Docker
- JSON Web Tokens (JWT)

## Prerequisites

Before getting started with the project, make sure you have the following prerequisites installed:

- Node.js
- npm
- Docker

## Installation

Follow these steps to install and configure the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   ```

2. Create a `.env` file based on `.env.example` and configure the environment variables as needed.

3. Install the dependencies:

   ```bash
   npm install
   ```

## Docker Execution

If you want to run the project in Docker, follow these steps:

1. Ensure that Docker is installed on your system. You can download it from the official Docker website: [https://www.docker.com/get-started](https://www.docker.com/get-started).

2. Open a terminal and navigate to the project's root directory where the `docker-compose.yml` file is located.

3. Run the following command to build Docker images and create containers:

   ```bash
   docker-compose up --build
   ```

4. Once the containers are up and running, you can access your application on the port specified in the `docker-compose.yml` file. In this case, the project will be available on port `4000`.

5. To stop the containers and terminate the project's execution, you can either press `Ctrl + C` in the terminal running Docker Compose or execute the following command:

   ```bash
   docker-compose down
   ```

## Configuration

Make sure to correctly configure the environment variables in the `.env` file. Key variables include `PORT` for the server port, `TOKEN_SECRET` and `REFRESH_TOKEN_SECRET` for JWT keys, and `MONGODB_URI` for the MongoDB database URI.

## Directory Structure

The project's directory structure is as follows:

```
/
-- src/
---- config/
----- config.ts
---- controllers/
---- db/
---- middleware/
---- models/
---- routes/
---- utils/
-- server.ts
-- index.ts
```

## Key Features

### Authentication

- JWT Token Creation: `/api/v1/jwt`
    - Allows creating a JWT token with a 10-minute expiration.
- JWT Token Refresh: `/api/v1/jwt/refresh`
    - Allows updating a JWT token using a refresh token.

### Sequence Management

- Sequence Creation: `/api/v1/sequence`
    - Allows creating a new sequence and generating subsequences from it.
- Subsequence Retrieval: `/api/v1/sequence`
    - Allows fetching previously generated subsequences and the original sequence.

## Data Model

The `Sequence` data model is used to store sequences and their subsequences in the MongoDB database. The model is defined in the `sequence.model.ts` file and configured with Mongoose.

## Authentication Middleware

The `verifyJWT` middleware is used to verify the validity of JWT tokens in routes requiring authentication. It is applied to sequence management routes, ensuring that only authenticated users can access them.

## Configuration Customization

The project is configured using a `config.ts` configuration file, allowing for customization of various settings. Configurations can be adjusted using environment variables to accommodate specific environments and individual requirements.
