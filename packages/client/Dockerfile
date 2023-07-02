
FROM node:18

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

ENV NODE_ENV=$NODE_ENV

EXPOSE 3000

# CMD print "abc"
CMD sh -c "if [ '$NODE_ENV' = 'development' ]; then yarn dev; else yarn start; fi"
