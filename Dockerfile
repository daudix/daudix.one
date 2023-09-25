FROM ruby:3.2.2

COPY Gemfile* ./

RUN gem install bundler && bundle install