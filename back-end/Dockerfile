FROM node:12.14-alpine As base-stage
WORKDIR /back-end
COPY . ./back-end
RUN npm install ----only=development
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
EXPOSE 3000