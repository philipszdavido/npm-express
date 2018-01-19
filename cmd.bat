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
