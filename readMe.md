<img src="/frontend/public/assets/logos/full-logo.svg" />

# Search n' Explore Your Data

<img align="left" src="/frontend/public/assets/images/sans-shadows/unicorn-in-a-box.svg" width="200" />Some technologies which create the magic inside of Ludwig are JWT Authentication with an Access and a Refresh token using Node.js, TypeScript, MongoDB, Redis, and Docker with Kubernetes for orchestration. Ludwig also uses OpenApi to deliver his documentation via Swagger.

Additional frontend and backend technologies to enhance the user's experience and each are located within the package.json file in the root of each project directory.

<br><br>

## Some High Level Topics of Implementation

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

## Some Technical Steps as You Use Ludwig

### Running Ludwig is Simple

` docker compose up`

### Exec'ing Into Docker's Mongo Container and Exploring Ludwig's User Data

` docker container ls`
` docker exec -it <mongo_container_id> bash`
` mongosh`
` use admin`
` db.auth(<username>, <password>)`
` use ludwigDb`
` db.users.find()`

### Steps to Deploy and Manage Ludwig via K8s

` Stay tuned`
