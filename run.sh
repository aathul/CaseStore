docker build --no-cache -t api .

docker run -p 3000:3000  --net cc --link mongodb --name api api