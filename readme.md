Humble Superheroes
A simple web application that allows users to create, view, and delete superheroes with unique superpowers and humility scores. The app uses a React frontend connected to a NestJS backend with Prisma ORM for PostgreSQL database integration.

Features
Add new superheroes by entering their name, superpower, and humility score (between 1 and 10).
View a list of superheroes, including their name, superpower, and humility score.
Delete superheroes from the list.
Frontend built with React and Bootstrap for responsive design.
Backend powered by NestJS, connected to a PostgreSQL database via Prisma ORM.
Tech Stack
Frontend: React, Bootstrap
Backend: NestJS
Database: PostgreSQL
ORM: Prisma
State Management: React Hooks (useState, useEffect)
HTTP Requests: Axios
Installation
Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js
PostgreSQL
Steps to Set Up the Backend
Clone the repository:

bash
Copy
Edit
git clone <repository-url>
cd backend
Install backend dependencies:

bash
Copy
Edit
npm install
Set up the PostgreSQL database and create a .env file with the following:

ini
Copy
Edit
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database-name>?schema=public"
Run the migrations using Prisma to set up the database schema:

bash
Copy
Edit
npx prisma migrate dev
Start the backend server:

bash
Copy
Edit
npm run start
Steps to Set Up the Frontend
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install frontend dependencies:

bash
Copy
Edit
npm install
Start the React development server:

bash
Copy
Edit
npm start
API Endpoints
GET /superheroes: Fetch all superheroes
POST /superheroes: Add a new superhero
DELETE /superheroes/{id}: Delete a superhero by ID
Usage
Open the React frontend in your browser (usually at http://localhost:3000).
Add superheroes by filling out the form with their name, superpower, and humility score.
View the list of superheroes displayed in a table.
Delete superheroes as needed.
Contributions
Feel free to fork the repository and submit pull requests for bug fixes or enhancements.

License
This project is licensed under the MIT License - see the LICENSE file for details.