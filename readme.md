# Humble Superheroes

A simple web application that allows users to create, view, and delete superheroes with unique superpowers and humility scores. The app uses a React frontend connected to a NestJS backend with Prisma ORM for PostgreSQL database integration.

## Features
- Add new superheroes by entering their name, superpower, and humility score (between 1 and 10).
- View a list of superheroes, including their name, superpower, and humility score.
- Delete superheroes from the list.
- Frontend built with React and Bootstrap for responsive design.
- Backend powered by NestJS, connected to a PostgreSQL database via Prisma ORM.

## Tech Stack
- **Backend:** NestJS
- **Frontend:** React, Bootstrap
- **Database:** PostgreSQL
- **ORM:** Prisma
- **State Management:** React Hooks (useState, useEffect)
- **HTTP Requests:** Axios

## Installation

### Prerequisites
Before you begin, ensure you have the following installed on your system:
- Node.js
- PostgreSQL

### Steps to Set Up the Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/STcoderNew/SimpleSuperHero_Project.git
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Set up the PostgreSQL database and create a `.env` file with the following:
   ```ini
   DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database-name>?schema=public"
   ```
4. Run the migrations using Prisma to set up the database schema:
   ```bash
   npx prisma migrate dev
   ```
5. Start the backend server:
   ```bash
   npm run start
   ```

### Steps to Set Up the Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## API Endpoints
- **GET** `/superheroes`: Fetch all superheroes
- **POST** `/superheroes`: Add a new superhero
- **DELETE** `/superheroes/{id}`: Delete a superhero by ID

## Usage
1. Open the React frontend in your browser (usually at `http://localhost:3000`).
2. Add superheroes by filling out the form with their name, superpower, and humility score.
3. View the list of superheroes displayed in a table.
4. Delete superheroes as needed.




## If I had more time
If I had more time, I would implement the following features to further enhance the Humble Superheroes application:

#### User Authentication:

Implement user login and registration functionality using JWT (JSON Web Tokens) to allow users to create and manage their own superheroes.
#### Superhero Details Page:

Create a detailed view page for each superhero, where users can see more information about their superhero, such as their origin story or detailed abilities.
#### Search and Filtering:

Add a search feature to allow users to quickly find superheroes by name or superpower.
Implement filtering options to sort superheroes by their humility score or superpower.
#### Error Handling and User Feedback:

Improve the error handling and validation across the app with more detailed messages and better feedback on success or failure events.
#### Unit and Integration Testing:

Write comprehensive unit tests for both the frontend (React components) and backend (NestJS endpoints) to ensure the robustness of the application.
#### Responsive Design Enhancements:

While the app is built with Bootstrap, additional enhancements could be made to ensure an even better user experience across all devices, especially on mobile screens.
#### Deployment:

Deploy the backend on platforms like Heroku or AWS and the frontend on Netlify or Vercel to make the application publicly accessible.
#### 