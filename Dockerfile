FROM ghcr.io/getzola/zola:v0.22.1 AS zola

ARG DISCORD_TOKEN
ENV DISCORD_TOKEN=$DISCORD_TOKEN
COPY . /project
WORKDIR /project
RUN ["zola", "build"]

FROM ghcr.io/static-web-server/static-web-server:latest
WORKDIR /
COPY --from=zola /project/public /public
