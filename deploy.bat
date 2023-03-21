@echo off

echo "[+] Changing directory"
cd mobsecdocs

echo "[+] Clonning GitHub repo"
git pull

echo "[+] Docker stop"
docker-compose stop

echo "[+] Docker recreate & up"
docker-compose up -d