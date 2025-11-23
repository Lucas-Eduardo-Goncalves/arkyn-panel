FROM oven/bun:1 AS base

WORKDIR /app

ENV NODE_ENV="production"

FROM base as build

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp openssl pkg-config

COPY --link . .

COPY --link bun.lock package.json ./

RUN bun install

FROM base
    
ENV TZ=America/Sao_Paulo

COPY --from=build /app /app

RUN bun run build

EXPOSE 3000

CMD [ "bun", "run", "start" ]
