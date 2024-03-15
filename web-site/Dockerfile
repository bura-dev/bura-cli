#FROM node:16.17
FROM node:alpine3.16

# RUN \
#   apk add --no-cache python3 make g++ && \
#   apk add vips-dev fftw-dev --update-cache \
#   --repository http://dl-3.alpinelinux.org/alpine/edge/community \
#   --repository http://dl-3.alpinelinux.org/alpine/edge/main \
#  && rm -fR /var/cache/apk/*

# RUN apk add automake autoconf libtool nasm

RUN npm config set unsafe-perm true
RUN npm install -g gatsby-cli

WORKDIR /app
COPY ./package.json /app
RUN npm cache clean --force
RUN npm install --arch=x64 --platform=linux --legacy-peer-deps
# RUN npm i
COPY . /app

# Also exposing VSCode debug ports
EXPOSE 8000 9929 9230 9000

# RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]
