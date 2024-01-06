<img src="/frontend/public/assets/logos/full-logo.svg" />

# Search and Explore Your Data

<img align="left" src="/frontend/public/assets/images/unicorn-in-a-box.svg" />Some technologies which create the magic inside of Ludwig are JWT Authentication with an Access and a Refresh token using Node.js, TypeScript, MongoDB, Redis, and Docker with Kubernetes for orchestration. Ludwig also uses OpenApi to deliver his documentation via Swagger.

## Topics Covered

- JWT Refresh Token with Node.js, TypeScript, and MongoDB Overview
- JWT Refresh Token Implementation Flow
- Generate Public and Private Keys for the Token
- Update Environment Variables in Config
- Update the Sign and Verify JWT Utility Functions
- Update the Sign Token Service Function
- Update the Login Controller
- Create a Controller to Refresh Access Token
- Create a Controller to Logout User
- Update the Authentication Routes
- Update app.ts

Read the entire article here: [https://codevoweb.com/react-node-access-refresh-tokens-authentication/](https://codevoweb.com/react-node-access-refresh-tokens-authentication/)

Articles in this series:

### 1. Node.js + TypeScript + MongoDB: JWT Authentication

[Node.js + TypeScript + MongoDB: JWT Authentication](https://codevoweb.com/node-typescript-mongodb-jwt-authentication)

### 2. Node.js + TypeScript + MongoDB: JWT Refresh Token

[Node.js + TypeScript + MongoDB: JWT Refresh Token](https://codevoweb.com/react-node-access-refresh-tokens-authentication)

### 3. Google OAuth Authentication with React.js and Node.js (No Passport)

[Google OAuth Authentication with React.js and Node.js (No Passport)](https://codevoweb.com/react-node-access-refresh-tokens-authentication)

### 4. GitHub OAuth Authentication React.js and Node.js(No Passport)

[GitHub OAuth Authentication React.js and Node.js(No Passport)](https://codevoweb.com/github-oauth-authentication-react-and-node)

### Exec Into the Mongo Container and Explore

` docker container ls`
` docker exec -it <mongo_container_id> bash`
` mongosh`
` use admin`
` db.auth(<username>, <password>)`
` use ludwigDb`
` db.users.find()`
