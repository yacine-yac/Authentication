# Authentication System based on Express.js

## Introduction

This app is built using Node.js and Express.js, which handle user interactions like authentication and authorization. It enables junior learners to have an idea of how authentication systems are built.

## Purposes

With this project, you will learn how to:

- Handle user requests
- Authenticate users based on credentials
- Register users in a database
- Implement authorization middleware
- Handle dynamic and static routes
- Create router dom

## Development Environment

This app runs on a Node.js development environment and MySQL for database management system.

The development server is running using the `supervisor` command.

     supervisor index.js

Change the `.env` file variables values according to your environment.

## App endpoints

This app has a limited number of resources:

- `/`: root app
- `/register`: sign up user
- `/about`: it's a protected page
- `/*`: for the rest of pages, it will be redirected to a 404 page.

## Folder structure

- `router`: route handlers
- `controller`: controller classes responsible for validating external inputs
- `model`: classes responsible for providing data
- `db`: handling database operations
- `passport`: handling authentication operations
- `static`: static resources like icons, style and scripts
- `views`: web pages matched by routes
- `templates`: providing templates