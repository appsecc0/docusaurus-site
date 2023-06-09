## Base ########################################################################
# Use a larger node image to do the build for native deps (e.g., gcc, python)
FROM node:lts as base

# Reduce npm log spam and colour during install within Docker
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# We'll run the app as the `node` user, so put it in their home directory
WORKDIR /home/node/app
# Copy the source code over
COPY --chown=node:node . /home/node/app/

## Production ##################################################################
# Also define a production target which doesn't use devDeps
FROM base as production
# Install (not ci) with dependencies, and for Linux vs. Linux Musl (which we use for -alpine)
RUN npm install
WORKDIR /home/node/app
COPY --from=base /usr/local/bin/npm /usr/local/bin/npm
# Expose port 443 in production
EXPOSE 80
# Build the Docusaurus app
RUN npm run build
# Start the app in debug mode so we can attach the debugger
CMD ["npm", "start", "--", "--https"]

## Deploy ######################################################################
# Use a stable nginx image
FROM nginx:stable-alpine as deploy
WORKDIR /home/node/app
#COPY nginx/nginx.conf /etc/nginx/nginx.conf
# Copy what we've installed/built from production
COPY --from=production /home/node/app/build /usr/share/nginx/html/
