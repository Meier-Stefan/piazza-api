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
