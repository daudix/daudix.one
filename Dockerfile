FROM jekyll/jekyll

COPY Gemfile* ./

RUN gem install bundler && bundle install