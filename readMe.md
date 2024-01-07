<p align="center">
<img alt="Ludwig logo" width="450" src="./assets/ludwig/logo.svg" />
</p>

# Search n' explore your data

Ludwig allows user's to interface with a query language to visually compose queries. Ludwig let's you visually explore the data which returns.

<img alt="unicorn in the box" align="left" src="./assets/ludwig/images/unicorn-in-a-box.svg" width="200" />

## What's inside the box

Some technologies which create the magic inside of Ludwig are JWT Authentication with an Access and a Refresh token using Node.js, TypeScript, MongoDB, Redis, and Docker with Kubernetes for orchestration. Ludwig also uses OpenApi to deliver his documentation via Swagger.

Additional frontend and backend technologies to enhance the user's experience and each are located within the package.json file in the root of each project directory.

<br><br>

## Some high level topics of implementation

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

## Getting to know Ludwig

### Running Ludwig is simple

`docker compose up`

### Exec'ing into Docker's Mongo container and exploring Ludwig's user data

`docker container ls`
`docker exec -it <mongo_container_id> bash`
`mongosh`
`use admin`
`db.auth(<username>, <password>)`
`use ludwigDb`
`db.users.find()`

### Steps to deploy and manage Ludwig via K8s

`Stay tuned`

## Ludwig was born out of some great technology

[Most of these logos were found on https://iconduck.com/]: #

<img alt="Github" src="./assets/vendor-logos/github.svg" width="75" />
<img alt="Yarn" src="./assets/vendor-logos/yarn.svg" width="75" />
<img alt="Chrome" src="./assets/vendor-logos/chrome.svg" width="75" />
<img alt="Typescript" src="./assets/vendor-logos/typescript.svg" width="75" />
<img alt="Javascript" src="./assets/vendor-logos/javascript.svg" width="75" />
<br>
<img alt="HTML5" src="./assets/vendor-logos/html5.svg" width="75" />
<img alt="Sass" src="./assets/vendor-logos/sass.svg" width="75" />
<img alt="K8s" src="./assets/vendor-logos/kubernetes.svg" width="75" />
<img alt="Docker" src="./assets/vendor-logos/docker.svg" width="100" />
<img alt="Mongo DB" src="./assets/vendor-logos/mongodb.svg" width="75" />
<br>
<img alt="Redis" src="./assets/vendor-logos/redis.svg" width="75" />
<img alt="Node JS" src="./assets/vendor-logos/node-js.svg" width="75" />
<img alt="Express JS" src="./assets/vendor-logos/express-js.svg" width="75" />
<img alt="Jest" src="./assets/vendor-logos/jest.svg" width="75" />
<img alt="React JS" src="./assets/vendor-logos/react.svg" width="75" />
<br>
<img alt="Redux" src="./assets/vendor-logos/redux.svg" width="75" />
<img alt="Swagger" src="./assets/vendor-logos/swagger.svg" width="75" />
<img alt="Faker JS" src="./assets/vendor-logos/fakerjs.svg" width="75" />
<img alt="React Testing Library" src="./assets/vendor-logos/react-testing-library.png" width="75" />
<img alt="Font Awesome" src="./assets/vendor-logos/fontawesome.svg" width="75" />
<br>
<img alt="Icon Duck" src="./assets/vendor-logos/duck.svg" width="75" />
