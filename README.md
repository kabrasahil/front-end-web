# Welcome to IGTS Front-End

Welcome to the IGTS Front-End project! This is a beginner-friendly React application that will help you get started with building web applications. In this README, we'll walk you through the steps to set up the basic React application by downloading all the necessary dependencies.

## Getting Started

### Step 1: Clone the Git Repo

To begin, you'll need to **clone the Git repository** to your local machine. Cloning the repository is like making a copy of all the project files onto your computer. Don't worry, it's really simple!

1. Open your **command line interface** (also known as the terminal). If you're using Windows, you can use the **Command Prompt** or **PowerShell**. If you're on macOS or Linux, you can use the built-in **Terminal**.

2. In the terminal, **copy and paste** the following command and press **Enter**:
   
   ```bash
   git clone https://github.com/IGTS-NSUT-ACCOUNT/front-end-web.git
   ```

   This command tells your computer to download the project files from the specified URL.

### Step 2: Install Dependencies

Now that you have the project files on your computer, it's time to install the **dependencies**. Dependencies are like building blocks that the project needs to work properly. Again, it's simpler than it sounds!

1. Navigate to the project folder. In the terminal, type:

   ```bash
   cd front-end-web
   ```

   This command will move you into the project folder you just cloned.

2. To install the dependencies, type the following command and press **Enter**:

   ```bash
   npm install
   ```

   Wait for a moment while npm (Node Package Manager) installs all the necessary packages. This might take a little time, so be patient!

### Step 3: Configure Backend Server URL

Before starting the application, you need to configure the backend server URL in the `src/Config.js` file. This step ensures that your front-end communicates with the correct backend.

1. Open the `src/Config.js` file in your preferred code editor.

2. Locate the `server_url` variable and change its value to the appropriate URL where your backend is running. For a local setup, set it to `http://localhost:5000` or the port your backend is using.

   ```javascript
   export const SERVER_URL = "http://localhost:5000";
   ```

### Step 4: Run the Application

You're almost there! Now that you've cloned the repo, installed the dependencies, and configured the backend URL, it's time to see the application in action.

1. In the terminal, type:

   ```bash
   npm start
   ```

   This command will start the development server and open the application in your default web browser. You'll see a new tab open with your shiny new React app!

Congratulations! 🎉 You've successfully set up the basic IGTS Front-End React application on your computer. Feel free to explore the code and make changes to see how things work.

## Additional Resources

If you're new to React or web development in general, don't worry! There are plenty of resources available to help you learn and grow:

- [React Documentation](https://reactjs.org/docs/getting-started.html): Official documentation for React.
- [MDN Web Docs](https://developer.mozilla.org/): A fantastic resource for web development tutorials and explanations.

Happy coding! If you have any questions or run into any issues, feel free to reach out to the IGTS community for help.

---

*Note: This README is designed to provide a beginner-friendly introduction to setting up the IGTS Front-End project. If you're already familiar with React and web development concepts, you might find some of the explanations simplified.*