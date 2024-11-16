Project Title: Contact Management System
Project Description
The Contact Management System is a web application considered to manage and unite contact information for individuals. It allows users to create, edit, delete, and view contact information such as first name, last name, email, phone number, company, and job title. The system is built using React for the frontend, Express.js for the backend, and MongoDB for the database.
This application allows users to:
•	Add new contacts with detailed information.
•	Edit existing contact details.
•	Delete contacts.
•	View a list of all contacts in a user-friendly table.
Technologies Used
•	Frontend: React.js, Material UI
•	Backend: Node.js, Express.js
•	Database: MongoDB (NoSQL)
Steps for Setup
1. Clone the repository:
git clone <repository-url>
cd <project-directory>
2. Install the dependencies:
•	Backend dependencies (Node.js):
o	Go to the backend directory.
o	Run the following command to install necessary packages:
                        npm install
•	Frontend dependencies (React):
o	Go to the frontend directory.
o	Run the following command to install necessary packages:
                        npm install
3. Set up environment variables:
•	Create a .env file in the backend root directory and add your MongoDB connection URI:
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/<your-database>?retryWrites=true&w=majority
4. Start the application:
•	Backend: In the backend directory, run the following command to start the Express server:
            npm start
•	Frontend: In the frontend directory, run the following command to start the React development server:
            npm start
Your application should now be running at http://localhost:3000 (frontend) and http://localhost:5000 (backend).
Database Schema Script (MongoDB)
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true  },
    phone: { type: String },
    company: { type: String },
    job: { type: String }
});


Challenges and Solutions
1.	Challenge: CORS issues
o	When connecting the frontend (React) with the backend (Express), I faced problem of Cross-Origin Resource Sharing (CORS) issues, preventing the frontend from making requests to the backend.
o	Solution: I solved this issue by using the cors middleware in the Express server, which allows cross-origin requests from different domains.

