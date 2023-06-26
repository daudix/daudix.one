# Create a github-pages container from a Ruby Alpine image
# Choose the ruby version according to https://pages.github.com/versions/
FROM ruby:2.7-alpine3.15

# Add Jekyll dependencies to Alpine
RUN apk update
RUN apk add --no-cache build-base gcc cmake git

# Install github-pages
RUN gem update bundler && gem install bundler webrick github-pages