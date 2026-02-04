FROM node:22

WORKDIR /app

RUN corepack enable

COPY .yarn .yarn
COPY .yarnrc.yml ./
COPY package.json yarn.lock* ./

RUN yarn install --immutable

COPY . .

EXPOSE 3000
CMD ["yarn", "dev"]
