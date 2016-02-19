# This image will be based on the oficial nodejs docker image
FROM node:latest
MAINTAINER geminiyellow<geminiyellow@gmail.com>

# Prepare ilivebox directory
RUN mkdir -p /usr/src/ilivebox

# Put all our code inside that directory that lives in the container
ADD . /usr/src/ilivebox

# Set in what directory commands will run
WORKDIR /usr/src/ilivebox

# Install dependencies
RUN \
    npm install -g typescript tsd typings webpack nodemon && \
    npm install --silen

# TODO: add some duang.
# npm install -g npm && \
# npm build
# & webpack tsd typescript

# Tell Docker we are going to use this port
EXPOSE 5000

# The command to run our app when the container is run
CMD ["npm", "start"]
