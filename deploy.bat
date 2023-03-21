@echo off

echo "[+] Changing directory"
cd mobsecdocs

echo "[+] Clonning GitHub repo"
git pull

echo "[+] Docker stop"
docker-compose stop
docker image rm mobsecdocs-app -f
echo "[+] Docker recreate & up"
docker-compose up -d