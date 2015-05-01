# [HackingEDU Web App](http://107.170.247.179:8080) [![Build Status](https://travis-ci.org/HackingEDU/app.svg?branch=master)](https://travis-ci.org/HackingEDU/app)

## Table of contents

 - [Prerequisites](#prerequisites)
 - [Installation](#installation)
 - [Running Locally](#running-locally)
 - [Server Stuff](#server-stuff)

## Prerequisites
 - [node](http://nodejs.org/)
 - [npm](https://www.npmjs.com/) (usually included with node)
 - [mongo](https://www.mongodb.org/)

## Installation
Clone the repo. Navigate to the app's directory and run:
```bash
npm install
```
Keep in mind whenever a npm package is added, we'll have to re-run `npm install`

## Running Locally
1. Create a local MongoDB database called tweets (configured in server.js).
2. Replace credentials for Twitter API (configured in config.js). I don't intend to have my twitter locked.
After running `npm install`, `sudo service mongod start`,  and making a sandwich, here's a set of commands to get it up and running.
 - `npm run watch` – Running this command starts a watchify watch, so when we edit our js files, they get browserified on save.
 - `npm run build` – Running this command builds our bundle.js and minifies it for production
 - `npm start` – Running this command sets up a watch and runs our app via nodemon
 - `node server` – This command is what we use to run our app.
 - `pm2 start server.js` - This command runs it as a background process. (requires pm2)

## Server Stuff
 - Option 1: For easy deployment, run this in your local repo and enter the server password that you received from me:
```bash
git remote add prod james@107.170.247.179:app
```
Now you can just `git push prod master` on your local repo to deploy without ssh-ing in. Thank git hooks for this.
 - Option 2: If the changes don't propogate on the live server
```bash
ssh james@107.170.247.179
```
and ask me for the password. The repo is located at /home/james/app. Just `git pull` to update it. You may need to restart the app with `pm2 restart server.js`.
