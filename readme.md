Created by: Meet Virani

-------------------------------------------------------------------------------------------------------------------------------------

# Social Media API Project

This project provides a set of APIs for creating, reading, updating, and deleting posts and comments for social media applications. It utilizes JSON Web Tokens (JWT) for authentication and authorization.

# Description

The project is built using Express.js, a popular web framework for Node.js, and follows a RESTful architecture. It includes endpoints for user registration, login, post management, comment management, and like functionality.

Swagger documentation is available to help users understand how to interact with the APIs. The documentation can be accessed by navigating to `/api-docs` after running the server.

-------------------------------------------------------------------------------------------------------------------------------------

# Getting Started

To use this project, follow these steps:

1. Clone the repository:

2. Install dependencies:
    bash
    npm install

3. Run the server:

    bash
    npm start

    The server will start running on port 3000 by default. You can access the APIs at http://localhost:3000/api.

4. Explore Swagger documentation:
    Open your browser and navigate to http://localhost:3000/api-docs to explore the Swagger documentation. It provides detailed information about each API endpoint, including request parameters and response schemas.
    200

    User Registration and Authentication:
        Register a new user by sending a POST request to /api/register with the required user information.
        Authenticate a user by sending a POST request to /api/login with valid credentials. Upon successful authentication, you will receive a JWT token in the response.

    Access Protected Endpoints:
        Use the JWT token obtained during authentication to access protected endpoints. Include the token in the Authorization header of your requests with the format: Bearer <token>.

5. API Endpoints:

    /api/register: Register a new user.
    /api/login: Authenticate a user and obtain a JWT token.
    /api/posts: Manage posts (requires authentication).
    /api/comments: Manage comments (requires authentication).
    /api/likes: Manage likes (no authentication required).

    for more details visit api documentation as mentioned above.

-------------------------------------------------------------------------------------------------------------------------------------

# Response status code:

    200 OK: This status code indicates that the request was successful. It is typically used for successful GET requests or successful responses to other types of requests that do not create or modify resources.

    201 Created: This status code indicates that a new resource has been successfully created as a result of the request. It is commonly used for successful POST requests that create new resources.

    400 Bad Request: This status code indicates that the server could not understand the request due to invalid syntax, missing parameters, or other client-side errors. It is often used to indicate user errors in the request.

    401 Unauthorized: This status code indicates that the client needs to authenticate to access the requested resource, but authentication credentials were either missing or invalid. It is commonly used for endpoints that require authentication.

    403 Forbidden: This status code indicates that the server understood the request, but refuses to authorize it. It is commonly used when the client does not have permission to access the requested resource.

    404 Not Found: This status code indicates that the requested resource could not be found on the server. It is commonly used when the requested endpoint or resource does not exist.

    500 Internal Server Error: This status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. It is commonly used to indicate server-side errors that are not caused by client requests.

-------------------------------------------------------------------------------------------------------------------------------------

# Technologies Used:

    Node.js
    Express.js
    Swagger UI Express
    JSON Web Tokens (JWT)
    Winston for logging
    Multer for file upload 