@echo off

git pull

docker image rm mobsecdocs-app -f

docker-compose up -d


