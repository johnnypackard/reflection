# Project Title

Reflection is a simple app which allows users to submit feedback to an admin.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Basic understanding Webpack, Gulp, or Grunt
Intro to JSX
Installation of React
PostreSQL and/or Postico for Database usage

```

### Installing

A step by step series of examples that tell you how to get a development env running

```
fork and clone/download this repo to your computer
```

```
npm install
npm start server
```

Then press Cmd + t to open a new tab in Terminal

```
npm start client
```

Using Postico, create a new database by running the queries provided

Have fun!

## Deployment
# Heroku Prerequisite (one time)

1. Sign up for an account on [Heroku.com](https://www.heroku.com/)
2. Install Heroku CLI by typing `brew install heroku` in Terminal
3. Authenticate by typing `heroku login` in Terminal

  > Note: Your project also needs to have a git repository.

# Heroku Setup

Run the following commands from within your project folder.

1. In terminal, navigate to your project folder and type `heroku create`
2. Login in if prompted
3. Type `git remote -v` to ensure it added successfully

Make sure your PORT is configured correctly as:

```JavaScript
var port = process.env.PORT || 5000;
```

Next, commit your changes and push them to Heroku:

```
git add .
git commit -m "MESSAGE"
git push heroku master
```

   > Note: You'll need to commit and push each time you make a change that you want to deploy to Heroku. **Keep in mind you CAN NOT pull from Heroku. This is not a replacement for GitHub!**

Lastly, open terminal and type `heroku open` as a shortcut to open your website in a browser.

   > Note: It is best to fully test your code locally before deploying to Heroku. Bugs are much harder to troubleshoot on a live website.

# Miscellaneous

- `heroku logs` - Display error logs
- `heroku config` - Show basic app info
- `heroku restart` - Sometimes it helps to turn things off an on again
- `heroku open` - Opens the website for you project in the browser

# Resources

More detailed instructions can be found here: 

- [https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)


## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Axios](https://github.com/axios/axios) - A Promise-based HTTP client for JavaScript
* [Express](https://expressjs.com/) - Framework for Node.js
* [PostgreSQL](https://www.postgresql.org/) - Open source object-relational databse
* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [Nodemon](https://nodemon.io/) - Utility which monitors any changes to the source and automatically restarts your server

## TODO

In the future, I will be adding: 

[] styling using Material-UI
[] ability to flag feedback for further review by admin
[] user authentication

## Authors

* **Johnny Packard** - *Initial work* - [Johnny Packard](https://github.com/JohnnyPackard)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Prime Digital Academy and all its staff.
* Mary Mosman for her continued guidance.
* The Menkar cohort for all their assistance.