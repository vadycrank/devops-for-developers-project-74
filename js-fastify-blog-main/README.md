# JS Fastify Blog

[![CI](https://github.com/hexlet-components/js-fastify-blog/actions/workflows/nodejs.yml/badge.svg)](https://github.com/hexlet-components/js-fastify-blog/actions/workflows/nodejs.yml)

## Requirement

* NodeJS v20.6.1
* Docker and Docker Compose (recommended)
* SQLite or PostgreSQL for local non-Docker run

## Commands

```bash
make install
make dev
```

## Docker

Run the app and PostgreSQL with one command:

```bash
docker compose up --build
```

Open http://localhost:8080

## Docker Compose checks

Run linter and tests in containers (CI mode):

```bash
docker compose --profile ci run --rm lint
docker compose --profile ci up --abort-on-container-exit --exit-code-from test test
docker compose down -v
```

The test container uses PostgreSQL when `TEST_DATABASE=postgres` is set (already configured in `docker-compose.yml`).

## Environment variables

You can pass DB settings via `.env` (copy from `.env.example`):

```dotenv
DATABASE_NAME=postgres
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_PORT=5432
DATABASE_HOST=db
```

For local non-Docker run with PostgreSQL, use `DATABASE_HOST=localhost`.

## CI and Docker Hub publish

GitHub Actions workflow (`.github/workflows/nodejs.yml`) does:

1. Build and check the project in Docker Compose (`lint` + `test`)
2. On push to `main`, build and publish the image to Docker Hub

Configure repository secrets:

```text
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
```

Image tags pushed by CI:

```bash
<DOCKERHUB_USERNAME>/js-fastify-blog:latest
<DOCKERHUB_USERNAME>/js-fastify-blog:<GITHUB_SHA>
```

---

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io?utm_source=github&utm_medium=link&utm_campaign=js-fastify-blog)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io?utm_source=github&utm_medium=link&utm_campaign=js-fastify-blog).

See most active contributors on [hexlet-friends](https://friends.hexlet.io/).
