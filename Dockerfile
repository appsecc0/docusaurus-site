# Use a Node.js base image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install express --production

# Copy the source code to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the command to start the application
CMD ["node", "server.js"]