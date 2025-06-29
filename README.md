# Job Board Application

## Overview
This is a full-stack MERN (MongoDB, Express.js, React/Next.js, Node.js) job board application. It allows users to:
- Register and log in to manage job postings.
- Create, update, and delete job listings (authenticated users only).
- View all job listings and job details (public).
- View their own job postings on a dashboard (authenticated users).

## Project Structure
```
job-board/
├── server/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── jobController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── userModal.js
│   │   └── jobModel.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── jobs.js
│   ├── .env
│   └── server.js
├── client/
│   ├── src/
│   │   ├── app/
│   │   │   ├── Components/
│   │   │   │   ├── FeatureSection.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── Navbar.jsx
│   │   │   ├── dashboard/
│   │   │   │   ├── Components/
│   │   │   │   │   ├── Forminput.jsx
│   │   │   │   │   ├── FormSection.jsx
│   │   │   │   │   ├── LoadingButton.jsx
│   │   │   │   │   └── PageHeader.jsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── edit/
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.jsx
│   │   │   │   ├── page.js
│   │   │   ├── job/
│   │   │   │   └── [id]/
│   │   │   │       └── page.js
│   │   │   ├── jobs/
│   │   │   │   ├── Components/
│   │   │   │   │   ├── Header.jsx
│   │   │   │   │   ├── JobCard.jsx
│   │   │   │   │   ├── SearchBar.jsx
│   │   │   │   │   └── StatusBar.jsx
│   │   │   │   ├── page.js
│   │   │   ├── login/
│   │   │   │   └── page.js
│   │   │   ├── register/
│   │   │   │   └── page.js
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css
│   │   │   ├── layout.js
│   │   │   ├── page.js
│   ├── middleware.js
│   ├── .env.local
├── .env.example
└── README.md
```

## Prerequisites
- **Node.js**: Version 18.x or higher
- **MongoDB**: A running MongoDB instance (local or cloud, e.g., MongoDB Atlas)
- **npm**: For package management

## Server Setup
1. **Navigate to the server directory**:
   ```
   cd server
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env`:
     ```
     cp .env.example .env
     ```
   - Update `.env` with your MongoDB connection string and JWT secret:
     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
     JWT_SECRET=your-secret-key
     PORT=5000
     ```

4. **Start the server**:
   ```
   npm start
   ```
   The server will run on `http://localhost:5000`.

## Client Setup
1. **Navigate to the client directory**:
   ```
   cd client
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env.local` file in the `client` directory.
   - Add the API base URL:
     ```env
     NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
     ```

4. **Start the development server**:
   ```
   npm run dev
   ```
   The client will run on `http://localhost:3000`.

## API Endpoints
### Authentication (`/api/auth`)
- **POST /register**: Register a new user (`email`, `password`, `name`).
- **POST /login**: Log in a user (`email`, `password`). Sets an HTTP-only cookie with a JWT.
- **POST /logout**: Log out a user by clearing the JWT cookie.

### Jobs (`/api/jobs`)
- **GET /**: Get all jobs (public).
- **GET /:id**: Get a job by ID (public).
- **GET /my-jobs**: Get jobs posted by the logged-in user (protected).
- **POST /**: Create a new job (protected, requires `title`, `company`, `location`, `category`, `description`).
- **PUT /:id**: Update a job (protected, only by the job’s employer).
- **DELETE /:id**: Delete a job (protected, only by the job’s employer).

## Environment Variables
See `.env.example` for required variables. Ensure these are set in the `server/.env` and `client/.env.local` files.

## Notes
- The server uses HTTP-only cookies for secure JWT storage. The client sends requests with `credentials: 'include'` to include cookies.
- Protected routes (e.g., `/dashboard`, `/api/jobs/my-jobs`) require a valid JWT, enforced by `middleware.js` (client) and `auth.js` (server).
- The client uses Tailwind CSS for styling. Ensure `globals.css` and `layout.js` are correctly configured.
- MongoDB connection issues can often be resolved by verifying the `MONGO_URI` and ensuring the database is accessible.
- The client’s middleware redirects unauthenticated users from `/dashboard` routes to `/login`.