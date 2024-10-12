+++
title = "Jekyll Is Overrated, Use Zola Instead"
description = "Or don't, it's up to you to decide after all."
[taxonomies]
tags = ["100DaysToOffload", "Zola", "Jekyll"]
[extra]
toc = true
banner = "banner.webp"
[extra.comments]
id = ""
+++

The title was a bit clickbait, sorry about that. You are really free to use whatever you like, be it Jekyll, Hugo, 11ty, or anything else, I respect your opinion. It's just that I felt like sharing why I prefer Zola. Now to the blog post.

## Backstory

My very first website was powered by GitHub Pages and the [Space](https://github.com/daudix/Space) theme–a fork of the [Cayman](https://github.com/pages-themes/cayman) theme with its colors changed to purple? That was a long time ago, I mean, I didn't even know what CSS was, how to use it, or how to override the green accent color without forking the entire theme.

<aside>

**SSG:** Static Site Generator; thingy that converts Markdown and other user-friendly text documents to HTML.
</aside>

I bet that's the case for many GitHub Pages users; it's an easy and, more importantly, free way to get your site up and running without having to worry about implementation details. All of this is powered by Jekyll–a Ruby-based SSG that has been around since [2008](https://github.com/jekyll/jekyll/commit/d189e05d236769c1e5594af9db4d6eacb86fc16e). It was one of the pioneers of user-friendly SSGs. But as with anything in the tech world, 16 years is a long time, and things have changed. There are better options today, such as Hugo, but we won't focus on it specifically in this post.

## Why Jekyll Is so Popular

As per [Jekyll website](https://jekyllrb.com):

> Free hosting with GitHub Pages  
> Sick of dealing with hosting companies? [GitHub Pages](https://pages.github.com/) is *powered by Jekyll*, so you can easily deploy your site using GitHub for free—[custom domain name](https://help.github.com/articles/about-supported-custom-domains/) and all.

This is the biggest reason why Jekyll is so popular, it's just what the most popular code forge in the world uses. It's such an attractive option because you don't have to set anything up, you just create a repository called `username.github.io` and put some Markdown files in there. That's it, you have a website.

## The Problem...s

But that doesn't mean that Jekyll is the best thing in the world from a technical standpoint, it has a number of problems, including but not limited to:

- Dependency hell[^1]: It's very easy to screw up your setup with an inaccurate move, or it's hard to install at all due to lower Ruby versions and such.
- Installation difficulties: Due to the above issue, it can be difficult to install.
- Poor theme support: Themes are distributed as Ruby Gems, which makes it harder for creators to make and share themes. Because of this, themes are usually just Jekyll sites that users have to fork and put their own content into, making it nearly impossible to upgrade.
- Poor performance: As your site grows and the number of posts increases, the build time increases exponentially. Some say it can reach minutes to rebuild the site.

Nowadays, the SSG space is mostly dominated by Next.js and Hugo[^2], the latter being somewhat similar to what Jekyll does. However, it's quite complex and has a very long list of features–most of which are not needed by 90% of users–that a user like me can drown in, and its learning curve is steeper than Jekyll.

However, there is an in-between that is modern, has all and only the needed features, has no<sup>*</sup> Jekyll problems, is written in Rust, is blazing fast, and is shipped as a single binary with no dependencies: Zola.

<small>*Almost.</small>

## The Solution

Zola is what Jekyll 2.0 would look like; it has all the good things about Jekyll and lacks its problems; builds are instantaneous, the documentation is well written, and there's a theme to suit everyone. In fact, this website is essentially a [Zola theme](https://duckquill.daudix.one).

### Themes

About themes. In Zola, a theme can be any Zola site placed in a `themes` directory and enabled through the config file. With Git, themes can be added as git submodules, which makes updating themes a breeze. This is very similar to what Hugo does, by the way.

### Templates

As for templating, Zola uses its own templating engine called [Tera](https://keats.github.io/tera/), it's similar to Jinja2, Django Templates and Liquid, and includes all the things a simple blog would need. Jekyll, on the other hand, uses [Liquid](https://shopify.github.io/liquid/). Jekyll users should feel right at home with Tera (at least I did).

### Directory Structure

Zola's directory structure is clear and logical:

```
.
├── config.toml
├── content
│   ├── blog
│   │   ├── 2023-06-12-gemini-exploring-the-cozy-world-of-capsules-and-space
│   │   │   ├── bay-bridge-bayer.png
│   │   │   ├── bay-bridge-floyd.png
│   │   │   ├── grayscale-plane.png
│   │   │   └── index.md
│   │   ├── 2024-10-11-zola-vs-jekyll
│   │   │   └── index.md
│   └────── _index.md
├── sass
│   └── style.scss
├── static
│   └── favicon.png
└── templates
    ├── base.html
    ├── index.html
    ├── page.html
    ├── section.html
    └── shortcodes
        └── alert.html
```

See that `_drafts` directory? Zola handles drafts differently; you can make an entire section or just certain pages "drafts" by setting `draft = true` in the front matter. Drafts won't be rendered unless you serve/build the site with the `--drafts` flag.

As for the date, it can either be added to the file/folder name as seen above, or in the front matter, e.g. `date = 2007-10-04`. There is also an `updated` variable which sets the last updated date.

Compare this to the one used in Jekyll:

```
.
├── _config.yml
├── _data
│   └── members.yml
├── _drafts
│   ├── begin-with-the-crazy-ideas.md
│   └── on-simplicity-in-technology.md
├── _includes
│   ├── footer.html
│   └── header.html
├── _layouts
│   ├── default.html
│   └── post.html
├── _posts
│   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
│   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
│   ├── _base.scss
│   └── _layout.scss
└── index.html
```

Somewhat similar, yet cleaner.

Zola also doesn't differentiate between layouts and includes, so you can simply create a directory called `includes` or `partials` in your `templates` directory and include files from there.

### Overriding Theme Files

What's neat is that you can override any theme template/file by creating a file with the same name in the same location but under your site, e.g. to override the `page.html` template I would create a `page.html` file under the `templates` directory and Zola will use it instead of the one provided by the theme, same goes for images and any other files. If the template uses blocks, it's possible to override only certain blocks, e.g. the `title` block in `head.html`.

`themes/some-theme/templates/partials/head.html`:

```jinja2
<title>
    {% block title %}
        Theme's Title
    {% endblock title %}
</title>
```

`templates/partials/head.html`:

```jinja2
{% extends "some-theme/templates/partials/head.html" %}

{% block title %}
    Custom Title
{% endblock title %}
```

### Advanced Features

Zola also provides an image resizing pipeline, macros, and the ability to load data from TOML, JSON, CSV, BibTeX, YAML, and XML files. It's all optional, and not everyone needs it, but it's nice to have.

### Downsides

Now for the downsides, actually just one that will affect Jekyll users the most: There's no way to set IDs or classes for any element except headings. That's right, no more sweet `{: class="my-class"}`. This encourages the use of shortcodes and clever hacks, such as using `#anchor` to style images. Wait, what? Yes, you can style images by targeting the anchor in their URL, i.e.

```scss
img[src*="#pixels"] {
    image-rendering: pixelated;
}
```

In this example, we have applied pixelated image rendering to an image with `#pixels` added to the image URL right after the file extension. Isn't that cool? I stole this solution from [libreivan's website](https://libreivan.com), kudos to him for that.

## Conclusion

So... should you go and rewrite your website if you use Jekyll, like it, and have no problems with it?

No.

What if you liked what you read about Zola and you like adventures?

Perhaps, yea.

Should you give it a try if you plan to create one?

Absolutely.

I <3 Zola if you haven't got it already, but I used Jekyll before and I am aware of it's problems.

A lot of people switched from Jekyll to Hugo, and I tried it, but found it way too advanced and confusing, whereas Zola fit me just right. I don't plan to switch away from it in the near future, however, I do plan to explore the Hugo landscape, and who knows, maybe the world will see a Duckquill port for it.

That's all for now, see you next time!

P.S. I just realized that the banner looks like that guy from Star Trek (Jean-Luc Picard, apparently).

[^1]: [Meaning of the term "Dependency hell"](https://en.wikipedia.org/wiki/Dependency_hell)
[^2]: [List SSGs sorted by the amount of GitHub stars](https://jamstack.org/generators/)
