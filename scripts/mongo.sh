
docker network create cc

docker build --no-cache -t db-image:latest .

docker run -p 27017:27017 --name mongodb --link api --link cron --net cc db-image:latest