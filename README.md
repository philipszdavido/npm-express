[![Build Status](https://travis-ci.org/philipszdavido/npm-packages.svg?branch=master)](https://travis-ci.org/philipszdavido/npm-packages)
[![Coverage Status](https://coveralls.io/repos/github/philipszdavido/npm-packages/badge.svg?branch=master)](https://coveralls.io/github/philipszdavido/npm-packages?branch=master)

# npm-packages

This repo demontrates 15 usefuls npm packages to use in `Node.js` + `Express` app

### npm packages used
s/n | npm package
--- | -----------
1 | body-parser
2 | chai
3 | chai-http
4 | compression
5 | connect-multiparty
6 | cors
7 | coveralls
8 | dotenv
9 | express
10 | express-jwt
11 | helmet
12 | istanbul
13 | jwks-rsa
14 | mocha
15 | mongoose
16 | morgan

To demonstrate how the npm packages are used in an Express + Node.js app, I implemented a Movies API below is the API Summary.

## API Summary

#### Note

All requests must be prefixed with  **<YOUR_URL_HERE>/api/**

## Movie

EndPoint | Functionality
-------- | -------------
POST /movies/ | Creates a new movie instance.
GET /movies/ | Returns all movies.
GET /movies/`<id>` | Returns the specified movie id.
PUT /movies/`<id>` | Update movie attributes.
DELETE /movies/`<id>` | Delete movie.

### Installation

* Clone the [**repository here**](https://github.com/philipszdavido/npm-packages.git):

    git clone https://github.com/philipszdavido/npm-packages.git

* Move into the folder form your terminal:

    cd npm-packages

* Run `npm install` to install node dependencies.
* Run `node .` or `npm run start` to start the server.

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
2. Clone the repository or fork it.
3. Create your feature branch: `git checkout -b my-new-feature`
5. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin your-new-feature`
5. Submit a pull request.

###  Links
* Follow me on [twitter](https://twitter.com/ngArchangel).
