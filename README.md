# Piazza API

## About

A RESTful social media SaaS called Piazza. In Piazza, users post messages for a particular topic while others browse posts and perform basic interactions, including liking, disliking, or adding a comment.
This is a courswork project for the Cloud Computing module at Birkbeck, University of London.

### Getting started

Install node and yarn or npm on your computer.
Create a .env file and populate it with the database connector string that you can retrieve from mongodb.

## Setup

### Development Setup

The project uses yarn as package manager, prettier as linter and nodemon to run the development server and track changes during development. These are all listed as 'devdependencies' in the package.lock file.

### Project Setup

The Api is a Node.js application that uses the Express framework. The docker container that will be deployed to the virtual server in the cloud will have Node installed. This means Node will run the app on the virual server. During development, however, Nodemon is used, hence it is a developent dependency.

## Phase A

### App Directory Structure

All the logic is in the `App` directory. This helps to create a more maintainable and scalable structure for the app. As suggested in [this article](https://dev.to/mr_ali3n/folder-structure-for-nodejs-expressjs-project-435l) the directory is called `App` and instead of `Src` because the files run on the server and will not be compiled, transpiled, and minified to be sent to the client.
The routes forward the request to their corresponding controllers, which will then send the response. This is a good practise shown in the [Mozilla Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#overview)
Adding the `App` directory as 'imports' alias in the `package.json`, makes it easy to import functions from the right place.
![app directory structure](pictures/AppDirectoryStructure.svg)

### Infrastructure Setup Description

The app is containerized as described in [the docker docs](https://docs.docker.com/get-started/workshop/02_our_app/). The only thing that needs to be adjusted is on line 7: the app.js sits in the root directory and is not called index.js.

[Docker Build Cloud is used in CI (continuous integration)](https://docs.docker.com/build-cloud/ci/). For this, the docker username must be added as environment variable in the GitHub Repository. And a Personal Access Token (PAT) needs to be added as secret.
GitHub Actions secrets and variables:
![Screenshot of the GitHub Actions secrets and variables page](pictures/GitHubActionsVariables.png)
The docker manual triggers on push to the main branch, but I decided to use the manual workflow_dispatch event trigger instead.
In the docker build cloud, a cloud builder needs to be added, I added one and called it `piazza-builder`.
GitHub Actions let the docker cloud build the image:
![GitHub Actions let the docker cloud build the image](pictures/GitHubActionsCItoDockerCloudBuild.png)
Docker Build Cloud is fast, but it costs to build. They gave me 60 free minutes because I implemented CI from Github Actions, thanks Docker. Build minutes overview:
![Screenshot of build minutes overview](pictures/DockerBuildCloudMinutes.png)
As a result, the image was available on Docker Hub:
[Docker Hub Images](DockerHubImages.png)
To make the REST API endpoints available in the virtual machine, Docker was installed on the virtual machine and the docker-user was created like in [lab 5.1](https://github.com/warestack/cc/blob/master/Class-5/Lab5.1%20Introduction%20to%20Docker.md). [Video of lab 5.1](https://github.com/warestack/cc/blob/master/Class-5/Lab5.1%20Introduction%20to%20Docker.md)
The docker-user was logged in on docker hub using the PAT method from above. Then the docker container was started with port mapping like shown in lab 5.1. Because the image was only in the docker cloud, it was automatically pulled before the container was started:
![Screenshot of running the container in the virtual machine](pictures/RunContainerFromDockerHub.png)
Once the container was up and running, the endpoints were available under the virtual machine IP address. The following screenshots show the Home page, post list endpoint, topic detail, topic list and user profile endpoints:

![Home page availabe under the virtual machine IP address](pictures/HomeDeployedContainer.png)
![Post  endpoint availabe under the virtual machine IP address](pictures/PostEndpointDeployedConatiner.png)
![Topic detail endpoint availabe under the virtual machine IP address](pictures/TopicDetailDeployedContainer.png)
![Topic list endpoint availabe under the virtual machine IP address](pictures/TopicListDeployedContainer.png)
![User profile endpoint availabe under the virtual machine IP address](pictures/UserProfileDeployedContainer.png)

## Phase B

### Connecting to the database

To start the development server, the node environment is specified in the 'dev' script in the package.json file. So the app knows from which .env dotfile to take the environment variables.
The main function currently only connects to the database using the `connect` function from mongoose and console logs when it started and if it worked.

### Register a user

When a user posts to the `user/register` endpoint, route will forward to the corresponding controller. That controller uses a validation funciton to make sure that the input makes sense and is secure. The validation function is built with the `string, required, min, max` and `email` functions from the `joi` library.

> **IDEA:** For this purpose, the funcitons were used in a simple way, but the [joi api reference](https://joi.dev/api/?v=17.13.3#stringemailoptions) documents ways how this could be improved.

Using the `bcryptjs` library, the password is hashed and 5 rounds of salt are used before it gets stored in the database.

### Login as user

When a user posts to the `user/login` endpoint, there is, additional to the validation with `joi`, the password gets compared with a function from `bycryptjs` and, if the password matches, the response contains a json web token, that can later be used to access resources that require authentication.

The `jsonwebtoken` library creates that token using a secret variable from the .env dotfile.

> **SPECIAL:** The json web token expires after one hour and contains the [user ID as payload](https://www.npmjs.com/package/jsonwebtoken). This user Id can for example be used by the controllers to make sure that one user does not modify the profile of another user.

> **IDEA:** It would be useful if the token would refresh.

### Interact with an endpoint that requires authentication

To keep the repository clean and organised, a middleware folder is used like suggested by [this turorial.](https://dev.to/taiwo17/nodejs-authentication-and-authorization-with-jwt-building-a-secure-web-application-236f#set-up-file-structure) The routes that require use the `isAuthenticated` middleware funciton to make sure that the user is logged in and allowed to proceed. Logged in means that the request headers contain a key value pair of a key containing `auth-token` and a value containing the json web token.If the user is not logged in, or has a wrong json web token, `isAuthenticated` will send the corresponding response instead of letting the route forwarding the request to the controller.

## Phase C

### Models

The Models are created so that they are practical to use in this small project.

> **IDEA:** For projects that could have milions of users, it would make sense to store the comments in separate collections and also to track likes in documents that store which user liked/disliked which post.
