---
layout: default
---

<pre class="ascii">
         *                 *                  *              *
                                                      *             *
                        *            *                             ___
  *               *                                          |     | |
        *              _________##                 *        / \    | |
                      @\\\\\\\\\##    *     |              |--o|===|-|
  *                  @@@\\\\\\\\##\       \|/|/            |---|   |d|
                    @@ @@\\\\\\\\\\\    \|\\|//|/     *   /     \  |w|
             *     @@@@@@@\\\\\\\\\\\    \|\|/|/         |  U    | |b|
                  @@@@@@@@@----------|    \\|//          |  S    |=| |
       __         @@ @@@ @@__________|     \|/           |  A    | | |
  ____|_@|_       @@@@@@@@@__________|     \|/           |_______| |_|
=|__ _____ |=     @@@@ .@@@__________|      |             |@| |@|  | |
____0_____0__\|/__@@@@__@@@__________|_\|/__|___\|/__\|/___________|_|_
</pre>

# Daudix's Blog

Howdy! welcome to my little snug nook, I write about software, FOSS and what not, take your cup of coffee and look around!

## Posts

{% for post in site.posts %}
  <article>
    <h2>
      <a href="{{ site.baseurl }}{{ post.url }}" class="page-link">
        {{ post.title }}
      </a>
    </h2>
    <small>
      <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
      {% if post.tags %}
        {% if post.tags.size > 0 %}
          • {{ post.tags | join: ', ' }}
        {% endif %}
      {% endif %}
    </small>
  </article>
{% endfor %}
