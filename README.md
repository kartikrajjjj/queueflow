# QueueFlow — Digital Queue Management System

QueueFlow is a full-stack digital queue management system designed to help businesses manage customer queues, reduce waiting times, and improve the customer experience.

The project is being built from scratch to gain practical experience in full-stack development, backend architecture, authentication, database management, and REST API development.

## 🚀 Features

### 🔐 Authentication
- User signup and login.
- JWT-based authentication.
- Secure HTTP-only authentication cookies.
- Password hashing using bcrypt.
- Logout functionality.
- Forgot-password functionality.
- Email-based password reset with token verification.
- Separate authentication flows for users and business owners.

### 🏢 Business Management
- Business registration for authenticated users.
- One business registration per owner.
- Business owner authentication.
- Input validation during business registration.
- Secure storage of business owner credentials.

### 🛠️ Service Management
- Add services offered by a registered business.
- Configure the estimated duration of each service.
- Validate service names and durations.
- Prevent duplicate service names within a business.
- Case-insensitive duplicate detection.
- Handle whitespace in service names.

### 📋 Planned Queue Management
- Customer queue registration without requiring an account.
- QR-code-based access to a business's queue.
- Automatic queue token generation.
- Live queue position tracking.
- Estimated waiting time calculation.
- Queue status management.
- Staff management.
- Queue activity and business analytics.

> **Note:** Queue management features listed above are planned features and should be marked as completed only after implementation and testing.

## 🧰 Tech Stack

### Frontend
- React
- Vite
- JavaScript
- Ant Design
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- JavaScript
- REST APIs
- JSON Web Tokens (JWT)
- bcrypt
- Nodemailer

### Database
- MongoDB
- Mongoose

### Development Tools
- Git
- GitHub
- Visual Studio Code
- Postman

## 📁 Project Structure

```text
QueueFlow/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env
│
└── README.md
```

*The folder structure may evolve as development progresses.*

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB locally or a MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/kartikrajjjj/queueflow.git
```

### 2. Navigate to the Project

```bash
cd queueflow
```

### 3. Set Up the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` directory and configure the required environment variables.

Example:

```env
PORT=3000
ENVIRONMENT=DEV
DOMAIN=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
AUTH_SECRET=your_secure_auth_secret
FORGOT_TOKEN_SECRET=your_secure_reset_token_secret
```

Replace the example values with your actual configuration.

Start the backend using the script defined in `backend/package.json`. For example:

```bash
npm run dev
```

### 4. Set Up the Frontend

Open another terminal and navigate to the frontend directory from the project root:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `frontend` directory:

```env
VITE_BASE_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed in the terminal by Vite.

> **Note:** The environment variable names and commands above are examples based on the project's configuration. Adjust them if your local setup differs.

## 🔒 Security Practices

- Passwords are hashed using bcrypt before storage.
- JWTs are used for authentication.
- HTTP-only cookies are used to protect authentication tokens from direct JavaScript access.
- Password-reset tokens use a separate secret from normal authentication tokens.
- Backend validation helps reject invalid input.
- Duplicate business registrations and duplicate services are checked.
- Environment variables are used for sensitive configuration.

Additional security hardening and testing will be needed before production deployment.

## 🗺️ Development Roadmap

### Completed
- [x] User signup and login
- [x] JWT-based authentication
- [x] HTTP-only authentication cookies
- [x] Logout functionality
- [x] Forgot-password and password-reset flow
- [x] Business registration
- [x] Business owner authentication
- [x] Service creation and validation

### Upcoming
- [ ] Customer queue registration
- [ ] Queue token generation
- [ ] Live queue position tracking
- [ ] Estimated waiting time calculation
- [ ] Queue status management
- [ ] Staff management
- [ ] QR-code integration
- [ ] Queue analytics dashboard
- [ ] Automated testing
- [ ] Deployment

*The roadmap should be updated as features are implemented and tested.*

## 🎯 Project Goals

QueueFlow is being developed to gain hands-on experience with:

- Designing and developing REST APIs.
- Building full-stack applications using React and Node.js.
- Implementing authentication and authorization.
- Working with MongoDB and Mongoose.
- Validating user input and handling errors.
- Organizing backend code into routes, controllers, models, and middleware.
- Debugging and solving problems independently.
- Building a practical project incrementally without relying entirely on tutorials.

## 📌 Current Status

**Status: Active Development 🚧**

The current focus is on implementing the core backend functionality, authentication flows, business registration, and service management before developing the customer queue management system.

## 👨‍💻 Author

**Kartik Rajput**

- **GitHub:** [@kartikrajjjj](https://github.com/kartikrajjjj)
- **Project Repository:** [QueueFlow](https://github.com/kartikrajjjj/queueflow)

Built as a hands-on full-stack development project focused on learning, problem-solving, and practical software engineering.

---

⭐ If you find this project interesting, feel free to explore the repository!
