# Job Management Admin Interface

This is a full-stack job management Admin Interface that allows job providers to create job listings and job seekers to view them. The application consists of a backend API to manage job data and a frontend interface for interacting with the system.

## Features

- **Job Creation**: Employers can post new job openings with job details such as title, company name, location, salary range, application deadline, and more.
- **Job Search and Filtering**: Users can search for jobs and filter them based on title, location, job type, salary range, etc.
- **Responsive Design**: The user interface is designed to work on both desktop and mobile devices.
- **Easy to Use Interface**: With an intuitive UI to add and manage job listings.
- **CORS Support**: The backend supports cross-origin requests, making it easy to connect with the frontend.

## Tech Stack

### Frontend
- **React.js**: A JavaScript library for building the user interface.
- **Vite**: A fast and modern build tool for React applications.
- **TailwindCSS**: A utility-first CSS framework to style the app.
- **Axios**: A promise-based HTTP client to make requests to the backend API.
- **React Toastify**: Used for displaying notifications and toasts on the frontend.
- **Date-fns**: A library to handle date formatting and manipulation.
- **RC Slider**: A React-based slider component used for salary range selection.

### Backend
- **Express.js**: A fast, unopinionated web framework for Node.js.
- **MongoDB**: A NoSQL database to store job listings and related information.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Cors**: A package for enabling Cross-Origin Resource Sharing in the backend.
- **dotenv**: A package for managing environment variables.
- **Nodemon**: A tool that helps during development by automatically restarting the server when file changes are detected.
