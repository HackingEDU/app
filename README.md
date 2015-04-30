# [HackingEDU Web App](http://107.170.247.179:8080) [![Build Status](https://travis-ci.org/HackingEDU/app.svg?branch=master)](https://travis-ci.org/HackingEDU/app)

## Table of contents

 - [Installation](#installation)
 - [Running Locally](#running-locally)
 - [Prerequisites](#prerequisites)
 - [Server Stuff](#server-stuff)

## Installation
```bash
npm install
```
Keep in mind whenever a npm package is added, we'll have to re-run `npm install`

## Running Locally
Navigate to the app's directory and run:
```bash
npm start
```
jsx files in `public/js/src` should be set up to build automatically to `public/js/build` thanks to gulp

## Prerequisites
- [node](http://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually included with node)

## Server Stuff
- Ssh into my server
```bash
ssh james@107.170.247.179
```
and ask me for the password

- Changes should update automatically. Should the app stop running on the server, navigate to `/home/james/app` and run:
```bash
forever start -c "npm start" .
```
