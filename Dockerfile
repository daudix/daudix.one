# Use the official jekyll build container
FROM jekyll/jekyll

# Install github-pages
RUN gem update bundler && gem install bundler webrick github-pages
