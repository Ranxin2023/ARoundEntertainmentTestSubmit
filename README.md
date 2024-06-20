# ARound Entertainment Test

This project consists of a frontend and a backend that together form the ARound Entertainment Test application. Follow the steps below to set up and run the application.

## Prerequisites

- [Node.js and npm](https://nodejs.org/) installed on your system
- [Nodemon](https://www.npmjs.com/package/nodemon) installed globally (optional, but recommended)

## Installation

### Step 1: Install Dependencies
First, install the necessary dependencies for both the frontend and backend:

# Navigate to the project directory
```sh

cd path/to/your/project
```

# Install frontend dependencies
```sh
cd frontend
npm install
```

# Install backend dependencies
```sh
cd ../backend
npm install
```
### Step 2: Start the Frontend
To start the frontend, run the following commands:
# Navigate to the frontend directory
```sh
cd ../frontend
```

# Start the frontend server
```sh
npm start
```
Alternatively, you can visit the following link to start the frontend:
https://ranxin2023.github.io/ARoundEntertainmentTest/

### Step3: Start the backend server

To start the backend server, run the following commands:
# Open a new Terminal and navigate to the backend directory

```sh
cd ../backend
```

# Start the backend server
```sh
npx nodemon index.js
```

# To start the backend server, run the following commands:
```sh
npx nodemon index.js
```
### Step 4: Kill the Task After Execution
After you are done running the server, remember to kill the process to free up the port. Use the following commands to find and kill the process running on port 5000:
# run the following command to kill the process
```sh
# Find the process ID (PID) running on port 5000
netstat -ano | findstr :5000

# Kill the process using the PID
taskkill /PID <PID> /F
#Replace <PID> with the actual process ID obtained from the first command.
```
## Notes
-Ensure that both the frontend and backend are running simultaneously for the application to function correctly.
-Make sure to replace path/to/your/project with the actual path to your project directory.