# Blog Application

## Overview
A simple blog application with a list view and detail view for blog posts. The application is built with Node.js, Express.js, SQLite, and React.js.

## Features
- Create, read, update, and delete blog posts.
- Responsive design.

## Setup Instructions

### Installation
1. Navigate to the `blog-app/backend` directory.
2. Run `npm install` to install backend dependencies.
3. Navigate to the `blog-app/frontend` directory.
4. Run `npm install` to install frontend dependencies.

### Running the Application
1. From the `blog-app/frontend` directory, run `npm run build` to build the React app.
2. Move the `build/` directory to the `blog-app/backend` directory.
3. From the `blog-app/backend` directory, run `npm start` to start the server.

### Deployment
- Deployed the combined backend on Render, ensuring it serves both the API and the static files from the React build.
