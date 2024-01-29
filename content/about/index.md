+++
title = "About"
description = "About me, what I do, and more."
+++

<div id="about-splash">
  <img id="about-avatar" class="transparent drop-shadow" src="logo.svg" alt="My logo" />
  <h1 id="about-header">David Lapshin</h1>
  <small>Passionate designer, translator, and FOSS contributor.</small>
</div>

## About

Hello there! My name is David, you may know me by my online handle Daudix.

> Although Daudix may appear as just my online handle, it's actually slightly different persona; perhaps more silly and honest than the more "official" David, but they're so tightly tied together so it's fine to use whatever you like.

I'm from the Siberian part of Russia, but currently live in <abbr title="If you know you know">▒▓░▒▓░</abbr>.

Some things I like:

- Photography; although I don't have much opportunity to shoot anything else than a view from my window
- Design
- Open source
- Retro and vintage stuff, as well as retro-futurism

My favorite games are:

- Portal series
- Untitled Goose
- The Stanley Parable
- Stardew Valley
- Cyberpunk 2077 (I only played it on YouTube so it's still to be played haha)

Design is a perhaps a bit more than just a thing I like, it's my hobby that I learn more about every day.

I'm also in process of learning 3D modeling in Blender and Pixel art in Aseprite.

And, as you can see, I do some web development! I like working with CSS and HTML but that's about it, I have no clue how to work with JS :D

## Works

I mostly create and improve icons for around-GNOME apps, if app doesn't have a translation I do it, sometimes I help with UI design.

Currently member of [Nickvision](https://nickvision.org) and [Gradience](https://gradienceteam.github.io) teams as a designer and maintainer respectively.

Have a look at my [designs](@/design/index.md), mostly icons but also some wallpapers (one of them is even shipped with GNOME)

## Contact

Currently it's <time><span id="clock"><noscript>Enable JS to see it</noscript></span></time> <small>(UTC+3)</small> for me, so take that into consideration if I don't respond immediately.

Feel free to send me a message on any of these, although Matrix is preferred since I use it the most. Whether you're bored or need someone to listen to you, I'm always open!

- [Matrix](https://matrix.to/#/@daudix:envs.net)
- [XMPP](xmpp:daudix@nixnet.services)
- [Mail](mailto:daudix@envs.net)
- [Gmail](mailto:ddaudix@gmail.com)
- [Discord](https://discord.com/users/650757995378114581)
- [Telegram](https://t.me/Daudix_UFO)

Additionally, If I know you I can give you my Signal phone number.

## Socials

Shortened list of places where you can ~~stalk~~ find me on:

- [Mastodon](https://social.treehouse.systems/@daudix)
- [Akkoma](https://pleroma.envs.net/daudix)
- [Sharkey](https://plasmatrap.com/@daudix)
- [Pixelfed](https://pixey.org/Daudix)
- [Lemmy](https://toast.ooo/u/Daudix)
- [YouTube](https://www.youtube.com/@daudix_ufo)

I have changed (and will change) my homeserver, so to make sure nothing is lost, here is my Fediverse timeline:

<ol id="timeline">
  <li><small>01 Sep 2022 - 20 Nov 2023<br><a href="https://mstdn.social/@Daudix">mstdn.social</a> - Previous main profile</small></li>
  <li><small>20 Nov 2023 - Today<br><a href="https://social.treehouse.systems/@daudix">social.treehouse.systems</a> - Main profile</small></li>
  <li><small>08 Jan 2024 - Today<br><a href="https://pleroma.envs.net/daudix">pleroma.envs.net</a> - Personal profile</small></li>
</ol>

## Forges

I were using GitHub from the very start of my FOSS journey, but recently I've [migrated to Codeberg](@/blog/migration-from-github-to-codeberg/index.md) because I didn't like where the GitHub is heading.

- [Codeberg](https://codeberg.org/daudix)
- [GitHub](https://github.com/daudix)
- [GitLab](https://gitlab.com/daudix)
- [GitLab (GNOME)](https://gitlab.gnome.org/daudix)

## Buy Me a Coffee

<small>That would be nice and mean a lot to me :3</small>

- [Ko-fi](https://ko-fi.com/daudix)
- [Liberapay](https://liberapay.com/daudix)
- [PayPal](https://paypal.me/Daudix)

## Small Web

Small Web is something I really like, I'm member of multiple tildes/pubnixes, although I don't do much there yet, I still like to be part of them.

Pubnixes/tildes:

- [exozy.me](https://exozy.me) (most used one by me, really cool thing)
- [envs.net](https://envs.net) (looks promising but I need to figure out the website build pipeline)

Gemini capsules:

- [flounder.online](https://flounder.online) - *finger* me at daudix@flounder.online

[![Tilde invasion](tilde-invasion.png)](https://pleroma.envs.net/notice/AeJ5ACKLIOl1bCj2lU)

<script>
  function updateClock() {
    const options = { timeZone: 'Europe/Moscow', hour: '2-digit', minute: '2-digit', hour12: false };
    const now = new Date().toLocaleString('en-US', options);

    const clockElement = document.getElementById('clock');
    clockElement.textContent = now;
  }

  // Update the clock every minute (60 * 1000 milliseconds)
  setInterval(updateClock, 1000);

  // Initial call to set the clock when the page loads
  updateClock();
</script>
