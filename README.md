# QueueFlow

**A digital queue management system designed to reduce waiting-time uncertainty and simplify queue handling for businesses.**

QueueFlow aims to replace confusing physical queues with a digital experience where customers can join a queue and track their progress while businesses manage services and customer flow.

## Features

- **User Authentication** — Account signup, login, and logout.
- **Password Recovery** — Forgot-password email flow with token-based password reset.
- **Business Setup** — Business owners can configure their business.
- **Service Management** — Add and manage business services.
- **Queue Management** — Planned core functionality for customer queue handling and service tracking.

## Tech Stack

**Frontend**
- React
- Vite
- Ant Design
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- Nodemailer

## Project Structure

```text
QueueFlow/
├── frontend/    # React application
└── backend/     # Express API and database logic
```

## Current Status

QueueFlow is under active development. Authentication, password recovery, and initial business/service management functionality have been implemented. Customer queue workflows and additional features are planned as development continues.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/kartikrajjjj/queueflow.git
cd QueueFlow
```

Install dependencies in the frontend and backend directories:

```bash
cd frontend
npm install
```

```bash
cd ../backend
npm install
```

Configure the required environment variables in the backend and frontend environment files before running the applications.

## Goals

- Enable customers to join queues digitally.
- Provide queue position and estimated waiting-time information.
- Allow staff to manage queue progression.
- Help businesses understand their service activity.

## Author

**Kartik Rajput**

GitHub: [kartikrajjjj](https://github.com/kartikrajjjj)
