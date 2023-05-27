FROM node:18

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/

# Install packages first to speed up build in the future (unless these change Docker will cache it)
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn install

# Then copy everything else into a child dir to ensure chache works
# this will work because of new path we set above
WORKDIR /opt/app
COPY ./ .
RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]
