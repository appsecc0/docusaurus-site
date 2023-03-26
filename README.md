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

---
![image of Appsecco](./mobsecdocs/static/img/logo.png )

*Build for Mobile security enthusiast by Appsecco team with ❤️*
