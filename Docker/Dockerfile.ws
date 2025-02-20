FROM oven/bun:1

WORKDIR /src/app

COPY ./packages ./packages
COPY package.json bun.lockb turbo.json ./
COPY ./apps/ws ./apps/ws

RUN bun install
COPY . .


RUN bun run db:generate

EXPOSE 3001

CMD [ "bun", "run", "start:ws" ]

