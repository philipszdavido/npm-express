[![Build Status](https://travis-ci.org/philipszdavido/npm-packages.svg?branch=master)](https://travis-ci.org/philipszdavido/npm-packages)
[![Coverage Status](https://coveralls.io/repos/github/philipszdavido/npm-packages/badge.svg?branch=master)](https://coveralls.io/github/philipszdavido/npm-packages?branch=master)

# npm-packages

This repo demontrates 15 usefuls npm packages to use in `Node.js` + `Express` app

### npm packages used
s/n | npm package
--- | -----------
1 | body-parser
2 | chai
3 | compression
4 | connect-multiparty
5 | cors
6 | coveralls
7 | dotenv
8 | express
9 | express-jwt
10 | helmet
11 | istanbul
12 | jwks-rsa
13 | mocha
14 | mongoose
15 | morgan

To demonstrate how the npm packages are used in an Express + Node.js app, I implemented a Movies API below is the Movies API Object Model and the API Summary.

## Movies API Object Model

```json
  "name": "",
  "description": "",
  "rating": "",
  "image": ""
```

## API Summary

**Note**: All requests must be prefixed with  **<YOUR_URL_HERE>/api/**

## Movie

EndPoint | Functionality
-------- | -------------
POST /movies/ | Creates a new movie instance.
GET /movies/ | Returns all movies.
GET /movies/`<id>` | Returns the specified movie id.
PUT /movies/`<id>` | Update movie attributes.
DELETE /movies/`<id>` | Delete movie.

### Installation

1.  Clone the [**repository here**](https://github.com/philipszdavido/npm-packages.git):

        git clone https://github.com/philipszdavido/npm-packages.git

1.  Move into the folder form your terminal:

        cd npm-packages

1.  Run `npm install` to install node dependencies.
1.  Run `node .` or `npm run start` to start the server.

## Usage

**Note**: Replace your Auth0 authentication credentials here.

```javascript
/* index.js */
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://{YOUR-AUTH0-URL-HERE}.auth0.com/.well-known/jwks.json"
    }),
    audience: '{YOUR-API-AUDIENCE-GOES-HERE}',
    issuer: "{YOUR-AUTH0-ISSUER-HERE}",
    algorithms: ['RS256']
});
```
### Movies POST Test - This creates a new movie
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request POST \
  --url http://localhost:3003/api/movies \
  --header 'authorization: Bearer '$JWT \
  --header 'content-type: application/json' \
  --data '{"name":"Arrow","description":"bad movie","rating":"7.0","image":"michaeljackson.png"}'
```

### Movies GET Test - This retrieves all movies from the database
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request GET \
  --url http://localhost:3003/api/movies \
  --header 'authorization: Bearer '$JWT
```

### Movies GET `<id>` Test - This retrieves a specific movie id from the database 
```sh
CLIENT_ID="<YOUR-CLIENT-ID-HERE>";
CLIENT_SECRET="YOUR-CLIENT-SECRET-HERE";

JWT=$(curl --request POST \
  --url https://<YOUR-AUTH0-DOMAIN>.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"<YOUR-AUDIENCE-ATTRIBUTE-HERE>","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request GET \
  --url http://localhost:3003/api/movies/<MOVIE_ID_HERE> \
  --header 'authorization: Bearer '$JWT
```

## Requirements
* [**Node JS**](https://nodejs.org/en/)
* [**Mongodb**](https://www.mongodb.org/downloads/)

### Test
Run `npm test` on your terminal. Remember to  run test on the project root directory.

### Contributing
1. Create an issue. First look through [the open issues](https://github.com/philipszdavido/npm-packages/issues).
1. Clone the repository or fork it.

         git clone https://github.com/philipszdavido/npm-packages

1. Create your feature branch:

         git checkout -b new-feature

1. Commit your changes:

         git commit -m 'Add some feature'

1. Push to the branch:

         git push origin new-feature

1. Submit a pull request.

###  Links
* Follow me on [twitter](https://twitter.com/ngArchangel).
