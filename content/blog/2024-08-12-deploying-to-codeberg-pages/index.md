+++
title = "Deploy Zola Website to Codeberg Pages"
description = "Getting a Zola website up and running using Codeberg pages."
draft = true
[taxonomies]
tags = ["100DaysToOffload", "Codeberg", "Zola"]
[extra]
toc = true
[extra.comments]
id = ""
+++

{% alert(note=true) %}
This guide focuses on the Zola <abbr title="Static site generator">SSG</abbr>, but other SSGs like Hugo and Jekyll should work with this guide as well.
{% end %}

This guide is intended to be a comprehensive walkthrough of the process of getting a Zola website up and running using Codeberg and Codeberg pages. It's aimed at users that are unfamiliar with all the obscure technical details.

This guide assumes that you have Git set up already. If not, check the following guide by GitHub: <https://docs.github.com/en/get-started/getting-started-with-git/set-up-git>

## What is Codeberg?

Codeberg is a free forge for free and open source projects. A forge is a web-based collaborative software platform for both developing and sharing various software projects.

You may be familiar with GitHub, and well, it's pretty much the same thing, except it doesn't compromise user privacy, it doesn't violate license agreements, and it doesn't train its AI on code that users host there.

See [Give Up GitHub!](https://sfconservancy.org/GiveUpGitHub/) and [Please don’t upload my code to GitHub](https://nogithub.codeberg.page) to get a better understanding of why GitHub is bad.

## Sign up on Codeberg

This one is pretty straightforward, you just go to [codeberg.org](https://codeberg.org) and press that big "Register now." button. The rest doesn't need explanation.

![landing page](landing-page.png)

## Create the repository

Now you can create a repository for your website. Repository is like a public folder with your project that you and others can work on.

![new repository](new-repository.png)

Now name the repository `pages` if you don't plan on using custom domain, otherwise you need to choose a different name, e.g. `website`. That's because Codeberg pages don't work well with custom domains and `pages` repository with the `pages` branch. It's confusing so just know that such combo won't work.

![new repository 2](new-repository-2.png)

I also recommend checking this "Initialize repository" box to save some time later.

![initialize repository](initialize-repository.png)

Now you can go and smash that "Create repository" button.

## Initializing Zola website

To be completely unbiased, I will use my own Duckquill theme in this example <img class="emoji no-hover" alt="troll face" src="troll-face.gif" />

First, clone the newly created repository and then `cd` into it.

Then, initialize a new Zola site with `zola init`. You can simply spam <kbd>Enter ↵</kbd> since we'll use our own configuration anyway.

Now you'll need to add the Duckquill theme as a Git submodule:

```sh
git submodule init
git submodule add https://codeberg.org/daudix/duckquill.git themes/duckquill
```

Now we need to switch to the latest release instead of the unstable `main` branch:

```sh
cd themes/duckquill
git checkout tags/v4.2.1
```

{% alert(note=true) %}
You can check the latest release here: <https://codeberg.org/daudix/duckquill/releases>
{% end %}

Now you can try serving the site locally:

```sh
zola serve
```

![empty site](empty-site.png#transparent)

Hm, doesn't look quite right...

That's because we first need to add some bare-bones configuration to `config.toml`:

```toml
title = "Demo"
base_url = "https://pages-demo.daudix.codeberg.page"
description = "Demo site for a blog post."
theme = "duckquill"
```

And let's create a home page by creating an `_index.md` file under `content` with the following contents:

```markdown
+++
+++
```

And we get...

![empty site duckquill](empty-site-duckquill.png#transparent)

Alright, perhaps our config is too bare-bones, let's enable navbar and a footer:

```toml
[extra.nav]
links = [
  { url = "https://example.org", name = "Example" },
]

[extra.footer]
show_copyright = true
show_powered_by = true
show_source = false
```

And add something to the home page:

```markdown
+++
title = "I'm a home page, look at me!"
+++

# Hello There!

I'm just a demo, I like to **demo**nstrate stuff, **demo**lish stuff, and I'm a **demo**crat (no actually, I'm just a silly demo)
```

![not empty](not-empty.png#transparent)

Much better. You can customize it further by looking at [Duckquill's config](https://codeberg.org/daudix/duckquill/src/branch/main/config.toml).

Now we can push the changes to Codeberg and set up the CI to build and deploy our site to Codeberg pages.

## Setting up the CI

Before we get to setting up the CI, we need to get access to it. You'll need to fill [the following form](https://codeberg.org/Codeberg-e.V./requests/issues/new?template=ISSUE_TEMPLATE%2fWoodpecker-CI.yaml) at [Codeberg-e.V./requests](https://codeberg.org/Codeberg-e.V./requests repository.

After your request been approved, we can proceed further.

Copy [the following Woodpecker workflow](https://codeberg.org/Codeberg-CI/examples/src/branch/main/Zola/.woodpecker.yaml) example from [Codeberg-CI/examples](https://codeberg.org/Codeberg-CI/examples) and put it in `.woodpecker.yaml` file inside your project's root.

```yaml
# Takes a repository with Zola source, generates the static site and
# pushes the result to the pages branch of the same repository
#
# Must be set in Woodpecker configuration:
# mail: Your email address used by Codeberg
# codeberg_token: Codeberg access token with "write:repository" permission
#
# .domains file can be put inside static folder in Zola source
#

# Exclude the pipeline to run on the pages branch
when:
  branch:
    exclude: pages

# Clone recursively to fully clone the themes given as Git submodules
clone:
  git:
    image: woodpeckerci/plugin-git
    settings:
      recursive: true

steps:
  # Build Zola static files
  build:
    image: alpine:edge
    commands:
      - apk add zola
      - zola build
    when:
      event: [push, pull_request, manual]

  publish:
    image: bitnami/git
    secrets: [mail, codeberg_token]
    commands:
      # Configure Git
      - git config --global user.email $MAIL
      - git config --global user.name "Woodpecker CI"
      # Clone the output branch
      - git clone --branch pages https://$CODEBERG_TOKEN@codeberg.org/$CI_REPO.git $CI_REPO_NAME
      # Enter the output branch
      - cd $CI_REPO_NAME
      # Remove old files
      - git rm -r "*" || true # Don't fail if there's nothing to remove
      # Copy the output of the build step
      - cp -ar ../public/. .
      # Commit and push all static files with the source commit hash
      - git add --all
      - git commit -m "Woodpecker CI ${CI_COMMIT_SHA} [SKIP CI]" --allow-empty
      - git push
    when:
      event: [push, manual]
```

Push the changes and go to <https://ci.codeberg.org>. There, add the `pages` repository we created earlier:

![add repository](add-repository.png)

![enable repository](enable-repository.png)

Now, [create a secret](https://codeberg.org/user/settings/applications) so CI can push the changes. You need to set `repository` scope to `Read and write`.

![token generation](token-generation.png)

Copy and paste the resulted token somewhere, since it couldn't be viewed after the page reload.

Now add the needed secrets in the Woodpecker repository settings by clicking on the repository in the list:

![repository settings](repository-settings.png)

Navigate to the "Secrets" tab:

![repository settings secrets](repository-settings-secrets.png)

Add secret with the name `mail` with email you used for Codeberg, with the `Push` and `Manual` events selected:

![mail secret](mail-secret.png)

![events](events.png)

Do the same for the `codeberg_token`, use the token we generated earlier as the value.

Almost there, now we just need to create the `pages` branch where the build result will be pushed:

![pages branch](pages-branch.png)

Now we can run the first build by pressing the "Run pipeline" button in Woodpecker.

If everything is done properly, the build should succeed and site be available on <https://username.codeberg.page>. Congrats!

The website demo lives under <https://daudix.codeberg.page/pages-demo/>, at the moment of writing at least.

The repository is public as well: <https://codeberg.org/daudix/pages-demo>

And so is the Woodpecker: <https://ci.codeberg.org/repos/13650>

If you have any issues or need any help with any of the steps, feel free to [reach out](@/find/index.md#contacts).
