FROM node:12.14-alpine As base-stage
WORKDIR /front-end
COPY . ./front-end
RUN npm install ----only=development
RUN npm rebuild node-sass --force
## --------------------------------------------------------------------------------- ##
FROM base-stage AS develop-stage
ENV NODE_ENV=development
## --------------------------------------------------------------------------------- ##
FROM base-stage AS build-stage
CMD [ "npm", "run", "build" ]
## --------------------------------------------------------------------------------- ##
FROM base-stage AS production-stage
ENV NODE_ENV=production
CMD [ "npm", "start"]
EXPOSE 8080