FROM jekyll/jekyll

COPY Gemfile* ./

RUN chmod -R a+w . && bundle install