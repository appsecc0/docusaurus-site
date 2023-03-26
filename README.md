# MobSecDocs

### Mobile Security Testing Documentation
 \- *Docusaurus Documentation*

### How to install

1. Clone the repository
`git clone https://github.com/appsecc0/docusaurus-site.git`

2. Build the docker image
`cd docusaurus-site/mobsecdocs`
`docker build -t mobsecdocs:latest .`

3. Run the docker container
`docker run -d --rm -p 80:80 mobsecdocs:latest`

4. To check visit http://localhost

OR

1. Clone the repository
`git clone https://github.com/appsecc0/docusaurus-site.git`

2. Run using docker-compose
`docker-compose up -d`

3. Visit http://localhost

4. Stop 
`docker-compose down`

### Pre-requisits
1. NPM
2. Docker 

### Working
There is a server file in the repository called server.js that will be executed when the app is deployed, this script will keep listening for incoming connections on port 3000. When a change is pushed on this repository, the GitHub webhook will initiate a POST request to our server after which it will execute a batch/shell script to perform the new deployment after removing the older one. This script will perform a git pull in the mobsecdocs directory, then stop the docker, remove the docker image, and finally create a new deployment using docker-compose. This process will be repeated every time something is pushed on the repository and thus the CI/CD cycle is maintained.

---
![image of Appsecco](./mobsecdocs/static/img/logo.png )

*Build for Mobile security enthusiast by Appsecco team with ❤️*
