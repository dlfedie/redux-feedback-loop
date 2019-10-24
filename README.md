# Redux Feedback Loop

This is an application build to test our skills at React and Redux. It is an application designed to take user input for daily feedback, allow them to cycle them through all of their choices, allow them to move back and edit choices, and finally post those to a database. There is also an Admin page that an administrator can go and take a look at all posted feedback.

## Built With

React.js, Redux, Node.js, Express.js, SQL, Material UI.

## Getting Started
Clone this repo and extract it to a folder on your computer. 

### Prerequisites

- Node.js
- Postico (or another database application)

List other prerequisites here

### Installing

Download this project.

1. `npm install` - to get all required node dependencies.
2. `npm run server`
3. `npm run client`

Go to localhost:3000/ in a browser!







>Do not clone this repository. Instead, download the zip, extract the contents, create a new GitHub repository and `git init`, `git add .`, `git commit -m "initial commit - base project"` and add your remote. Please do this before you leave for the day.

**PLEASE COMMENT YOUR CODE.**

"And my last reminder of the day, which is my last reminder of every day, is...?" - Luke

 For this assignment, you will be creating a feedback form modeled after Prime's system. Feedback will be collected over 4 views. In a separate review page, display the current feedback values and a submit button. and when all steps are complete, your app will save the feedback in the database. 

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### Completed Features
- [X] Create feedback form.
- [X] Allow a user to go back and edit previous entries.
- [X] Refreshing the page does not break the full form.
- [X] Admin section to view all feedback and remove specific ones. 
- [x] First foray into snackbar notifications from MUI.

## This app was created by: 
- Dustin Fedie

