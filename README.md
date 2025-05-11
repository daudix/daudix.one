[![Please don't upload to GitHub](https://nogithub.codeberg.page/badge.svg)](https://nogithub.codeberg.page)
[![MIT license](https://img.shields.io/badge/License-MIT-blue)](https://mit-license.org)
[![status-badge](https://ci.codeberg.org/api/badges/13890/status.svg)](https://ci.codeberg.org/repos/13890)

# [Daudix’s Blog](https://daudix.one)

The source code of my personal website. It is powered by [Zola](https://www.getzola.org) and <3. It is crafted in such a way as to be usable as a theme, but I cannot guarantee its stability and it is made to suit my needs first.

![Screenshot](screenshot.png)

## Read Me, for Real

If you like how my website looks and want to make your own based on it: DON'T.

Seriously, just use the [Ametrine](https://ametrine.daudix.one) theme; I'm the author of it and it's literally the same thing minus all my content, custom elements, and the like. Save your nerves, I'm serious.

If you want to use some custom styles and stuff from here: go ahead! ...just don't make it *too similar,* I got to have some uniqueness x3

## Setup Local Repository

Mostly for myself.

- Clone the repository recursively:

```bash
git clone --recursive ssh://git@codeberg.org/daudix/website.git
```

- Checkout `main` branch for Ametrine:

```bash
cd website/themes/ametrine/
git checkout main
```

- Set the remote URL to an SSH one:

```bash
git remote set-url origin ssh://git@codeberg.org/daudix/ametrine.git
```

## Know Your Rights

This website is under the MIT license:

- **Freedom to Use**: You have the right to use the software for any purpose, whether it's personal, academic, or commercial.
- **Freedom to Modify**: You can modify the source code of the software to suit your needs or preferences.
- **Freedom to Distribute**: You have the right to distribute the software, whether in its original form or modified, to others.
- **Collaboration**: You can collaborate with others on the software's development and improvement.
- **No License Compatibility Issues**: You can combine the MIT-licensed software with other software, even if they use different licenses.
- **No Usage Restrictions**: There are no restrictions on the technologies or fields of use, giving you maximum flexibility.
- **No Royalties**: You are not required to pay any royalties or fees for using, modifying, or distributing the software.

## Contributing Guidelines

There are several ways to contribute to this project:

- Reporting issues
- Discussing potential improvements
- Contributing code
- Writing documentation
- Submitting feature requests
- Providing feedback

When making any sort of contribution, please make sure to follow [Forgejo's Code of Conduct](https://codeberg.org/forgejo/code-of-conduct). If you don't have the time to read it, just know that all you have to do is be nice, and you'll be just fine.

*</> with <3 by [daudix](https://daudix.one) | README based on [libreivan's](https://codeberg.org/libreivan/libreivan.com)*
