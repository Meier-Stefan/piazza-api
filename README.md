# Piazza API

## About

A RESTful social media SaaS called Piazza. In Piazza, users post messages for a particular topic while others browse posts and perform basic interactions, including liking, disliking, or adding a comment.
This is a courswork project for the Cloud Computing module at Birkbeck, University of London.

## Setup

### Development Setup

The project uses yarn as package manager, prettier as linter and nodemon to run the development server and track changes during development. These are all listed as 'devdependencies' in the package.lock file.

### Project Setup

The Api is a Node.js application that uses the Express framework. The docker container that will be deployed to the virtual server in the cloud will have Node installed. This means Node will run the app on the virual server. During development, however, Nodemon is used, hence it is a developent dependency.

### App Directory Structure

All the logic is in the `App` directory. This helps to create a more maintainable and scalable structure for the app. As suggested in [this article](https://dev.to/mr_ali3n/folder-structure-for-nodejs-expressjs-project-435l) the directory is called `App` and instead of `Src` because the files run on the server and will not be compiled, transpiled, and minified to be sent to the client.
The routes forward the request to their corresponding controllers, which will then send the response. This is a good practise shown in the [Mozilla Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#overview)
Adding the `App` directory as 'imports' alias in the `package.json`, makes it easy to import functions from the right place.
![app directory structure](pictures/AppDirectoryStructure.svg)

### Infrastructure Setup Description

The app is containerized as described in [the docker docs](https://docs.docker.com/get-started/workshop/02_our_app/). The only thing that needs to be adjusted is on line 7: the app.js sits in the root directory and is not called index.js.
