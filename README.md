# Piazza API
## About
A RESTful social media SaaS called Piazza. In Piazza, users post messages for a particular topic while others browse posts and perform basic interactions, including liking, disliking, or adding a comment.
This is a courswork project for the Cloud Computing module at Birkbeck, University of London.

## Setup
### Development Setup
The project uses yarn as package manager, prettier as linter and nodemon to run the development server and track changes during development. These are all listed as 'devdependencies' in the package.lock file.
### Project Setup
The Api is a Node.js application that uses the Express framework. The docker container that will be deployed to the virtual server in the cloud will have Node installed. This means Node will run the app on the virual server. During development, however, Nodemon is used, hence it is a developent dependency.