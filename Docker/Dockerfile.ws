FROM oven/bun:1

WORKDIR /src/app

COPY ./packages ./packages
COPY ./package.json ./package.json
COPY ./bun.lockb ./bun.lockb
COPY ./turbo.json ./turbo.json

RUN bun install
COPY ./apps/ws ./apps/ws

RUN bun run db:generate

EXPOSE 3001

CMD [ "bun", "run", "start:ws" ]

