FROM node:20-bookworm-slim AS base

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

FROM base AS ci

FROM base AS build

RUN npm run build \
  && npm prune --omit=dev

FROM node:20-bookworm-slim AS production

WORKDIR /app

COPY --from=build /app /app

ENV NODE_ENV=production

EXPOSE 8080

CMD ["npm", "run", "start"]
