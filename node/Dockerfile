# This image will be based on the oficial nodejs docker image
FROM node:latest
MAINTAINER geminiyellow<geminiyellow@gmail.com>

# Prepare ilivebox directory
RUN mkdir -p /app/user

# Put all our code inside that directory that lives in the container
ADD . /app/user

# Set in what directory commands will run
WORKDIR /app/user

# Install dependencies
RUN \
    npm install -s -g typescript tsd typings webpack nodemon && \
    npm install -s --unsafe-perm

# Tell Docker we are going to use this port
EXPOSE 5000

# The command to run our app when the container is run
CMD ["npm", "start"]
