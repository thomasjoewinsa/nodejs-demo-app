# Node.js CI/CD Pipeline

## Project Overview
This project demonstrates an automated CI/CD pipeline for a Node.js web application using GitHub Actions and Docker.

## Technologies Used
- Node.js
- Express.js
- Jest and Supertest
- Git and GitHub
- GitHub Actions
- Docker and Docker Hub

## Application Endpoints
- `/` — Displays a welcome message.
- `/health` — Returns the application health status.

## CI/CD Workflow
Whenever code is pushed to the `main` branch, GitHub Actions automatically:
1. Checks out the source code.
2. Sets up Node.js and installs dependencies.
3. Runs application tests.
4. Builds the Docker image.
5. Authenticates with Docker Hub using GitHub Secrets.
6. Pushes the image to the private Docker Hub repository.

## Security
Docker Hub credentials are stored in GitHub Actions Secrets rather than in the source code.

## Run Locally
Install dependencies and start the application:

```bash
npm ci
npm start
```

Open `http://localhost:3000`.

## Run with Docker

```bash
docker build -t nodejs-demo-app:1.0 .
docker run -d --name nodejs-demo -p 3000:3000 nodejs-demo-app:1.0
```

Open `http://localhost:3000` to view the application.

## Conclusion
This project demonstrates automated testing, Docker image building, and image publishing through a GitHub Actions CI/CD pipeline.
