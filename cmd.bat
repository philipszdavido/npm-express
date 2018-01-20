curl --request POST \
  --url http://localhost:3003/api/movies \
  --header 'content-type: application/json' \
  --data '{"name":"Arrow","description":"bad movie","rating":"7.0","image":"michaeljackson.png"}'

curl --request POST \
  --url http://localhost:3003/api/movies \
  --header 'content-type: application/json' \
  --data '{"name":"Thor","description":"awesome movie","rating":"9.0","image":"thorfilm.png"}'

curl --request GET \
  --url http://localhost:3003/api/movies 

curl --request GET \
  --url http://localhost:3003/api/movies/5a60e8bd9dfb6b1028694a5e 

CLIENT_ID="J5Hl7A821oFs5LO8xFWTSAAdrJBYhr5Y";
CLIENT_SECRET="IZ9cpso_kmcdzyHckckAW3l1twUA3bjb32dJEt8qAWM6JsvML7EJoRmLc2DN9jEw";

JWT=$(curl --request POST \
  --url https://chidumennamdi.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"'$CLIENT_ID'","client_secret":"'$CLIENT_SECRET'","audience":"https://spotify-app.com","grant_type":"client_credentials"}' | jq .access_token -r);

curl --request POST \
  --url http://localhost:3003/api/movies \
  --header 'authorization: Bearer '$JWT \
  --header 'content-type: application/json' \
  --data '{"name":"Arrow","description":"bad movie","rating":"7.0","image":"michaeljackson.png"}'
