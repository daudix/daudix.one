FROM ghcr.io/getzola/zola:v0.21.0 AS zola

COPY . /project
WORKDIR /project
RUN ["zola", "build"]

FROM ghcr.io/static-web-server/static-web-server:latest
WORKDIR /
COPY --from=zola /project/public /public
