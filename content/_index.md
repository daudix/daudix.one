+++
title = "Home"
description = "The central hub."
[extra]
styles = ["home/style.css"]
scripts = ["home/script.js"]
no_header = true
badges = [
  { name = "adhd.gif", url = "https://en.wikipedia.org/wiki/Attention_deficit_hyperactivity_disorder" },
  # { name = "blue-team.gif", url = "https://512kb.club" },
  { name = "dark-mode.gif", url = "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" },
  { name = "mobilefriendly.gif", url = "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" },
  { name = "righttorepair.gif", url = "https://www.ifixit.com/Right-to-Repair" },
  { name = "saynotoweb3.gif", url = "https://yesterweb.org/no-to-web3/" },
  { name = "snug-nook.gif", url = "https://daudix.one/snug-nook/" },
  { name = "standwith.gif", url = "https://decolonizepalestine.com" },
  { name = "vscodium.gif", url = "https://vscodium.com" },
]
games = [
  { name = "Portal 2", id = "620" },
  { name = "OneShot", id = "420530" },
  { name = "Celeste", id = "504230" },
  { name = "Teardown", id = "1167630" },
  { name = "Superliminal", id = "1049410" },
  { name = "Machinarium", id = "40700" },
  { name = "Stardew Valley", id = "413150" },
  { name = "Untitled Goose Game", id = "837470" },
  { name = "The Stanley Parable", id = "221910" },
]
contacts = [
  { name = "Discord", url = "https://discord.com/users/650757995378114581", favorite = true },
  { name = "Signal", url = "https://signal.me/#eu/b4KzM1OB3uW52mMywHUJa8h6yD4ATY_KXJJiuJtWUxOVAJP22PVO_qoNGFnf32W7" },
  { name = "Telegram", url = "https://t.me/ddaudix" },
  { name = "Matrix", url = "https://matrix.to/#/@daudix:envs.net" },
  { name = "XMPP", url = "xmpp:daudix@disroot.org" },
  { name = "Email", url = "mailto:me@daudix.one" },
]
socials = [
  { name = "Bluesky", url = "https://bsky.app/profile/daudix.one", favorite = true },
  { name = "Mastodon", url = "https://wetdry.world/@daudix" },
  { name = "SpaceHey", url = "https://spacehey.com/daudix" },
  { name = "Tumblr", url = "https://www.tumblr.com/ddaudix" },
  { name = "Pixelfed", url = "https://pixelfed.social/Daudix" },
  { name = "YouTube", url = "https://www.youtube.com/@ddaudix" },
]
forges = [
  { name = "Codeberg", url = "https://codeberg.org/daudix" },
  { name = "GitHub", url = "https://github.com/daudix" },
  # { name = "GitLab", url = "https://gitlab.com/daudix" },
]
+++

<div class="container-fill">
<div>

{{ polaroid() }}

<div id="title">

# David Lapshin
</div>

Greetings! Welcome to my little corner on the World Wild Web and a second home of mine. You might know me by my online handle; Daudix.

<div class="buttons start big">
  <a href="#about" class="suggested">About Me ↓</a>
  <a href="#splash">Splash →</a>
</div>
</div>
</div>

## About

Thing I hate doing the most; telling about myself.

<ul class="masonry">
<!-- Card Start -->
<li>
<article>

**I'm originating from Siberia,** but currently residing in <abbr id="abyss" title="If you know, you know">abyss</abbr>. That means that I'm a native Russian speaker, что в каком-то смысле довольно прикольно..?
</article>
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article class="fancy-list">

**Random things I like:**

- Purple <small>(lavender in particular)</small>
- Monokai Pro <small>(it got this sweet purple tint)</small>
- Photography <small>(mostly view from my window)</small>
- Amethysts and Ametrines
- Emoticons (but not emojis)
- Minor details and references
- Retro(futuristic) and vintage stuff
- Making this list look like a staircase
</article>
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article class="window">
{{ window() }}
</article>
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article>

**I'm rather shy.** Quoting [hyperreal](https://hyperreal.coffee) as I can't say it better:

> I'm <button id="shy">shy</button> and might come across as reserved and standoffish at first, but I open up when I get more comfortable with people.
</article>
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article class="games fancy-list">

**Games I like:**

{{ games() }}
</article>
</li>
<!-- Card End -->
</ul>

## Online

Where and when to find me online.

<ul class="masonry">
<!-- Card Start -->
<li>
{{ now_playing() }}
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article class="online fancy-list">
<strong id="socials" class="title">Socials</strong>

{{ online(type="socials") }}
</article>
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article class="online fancy-list">
<strong id="forges" class="title">Forges</strong>

{{ online(type="forges") }}
</article>
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article class="ntfy fancy-list">
<strong id="ntfy" class="title">Send Me a Notification</strong>

The moment you press "Send" I'll get a push notification on my phone. Crazy, right?

<div>
  <input id="ntfy-input" placeholder="Stolen from azumanga.gay"></input>
  <button id="ntfy-send" class="suggested" title="Send">
    {{ icon(name="paper-plane-right") }}
    {{ icon(name="check") }}
  </button>
</div>
<div class="tooltip" title="Powered by ntfy.sh. Messages are not end-to-end encrypted and are public. This is not a secure method of communication">
  {{ icon(name="lock-open") }}
</div>
</article>
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article class="online fancy-list">
<strong id="contacts" class="title">Contacts</strong>

For me it's currently <time id="clock">09:41</time> <small>(UTC+3)</small> and I'm <span id="online-indicator"><i class="icon"></i><span id="online-indicator-text">Offline</span></span>.

Feel free to reach me out on any of these! Although I'm usually too shy to start the conversation, I'm happy to chat once someone messages me first.

{{ online(type="contacts") }}
</article>
</li>
<!-- Card End -->

<!-- Card Start -->
<li>
<article class="snug-nook fancy-list">
<strong id="snug-nook" class="title">Snug Nook</strong>

Cozy and welcoming space for cool people to hang out in.

<img src="neofax.png" class="transparent no-hover drop-shadow" />
<a href="/snug-nook/" title="Learn More"></a>
<div>
{{ icon(name="discord-logo") }}
{{ icon(name="matrix-logo") }}
</div>
</article>
</li>
<!-- Card End -->
</ul>

## Works

<div>

{{ icons() }}

<div>

I ocasionally contribute to various FOSS projects by creating/improving icons, translating them into Russian, or crafting logos. Other times I make wallpapers for myself that I share with others. <small>(one is in [GNOME](https://www.gnome.org))</small>

<div class="buttons big">
  <a href="/design/">My Designs →</a>
</div>
</div>

</div>

## IndieWeb

{{ badges() }}

Simply put, IndieWeb is anything on the web that is hand-crafted and feels personal, at least that's what it is for me.

Everything about it is awesome, from 88x31 buttons to webrings. It also feels cozy and is hella fun, quite refreshing after the sterile corporate web.

I'm even a member of several [tildes](https://envs.net) and [CS clubs](https://exozy.me), even though I don't do much there, I still like being a part of them:

Better yet, I have a website on [neocities](https://neocities.org); It doesn't have any purpose except for being there and looking dated. [Check it out](https://daudix.neocities.org) if you want.

<img id="flutter" width="128" height="110" class="transparent no-hover" src="flutter.webp" alt="Fluttershy with a wide grin on her face.">

<!-- <div id="splash">
  <label id="splash-toggle">
    <input type="checkbox" id="skip-splash" />
    Skip splash screen
  </label>
  <div id="top-part">
    <div>
      <img
        class="transparent no-hover"
        alt="1024x768"
        src="home/graphics/4-by-3.svg"
      />
      <span>1024x768</span>
    </div>
    <div>
      <img
        class="transparent no-hover"
        alt="No Essential JavaScript"
        src="home/graphics/no-js.svg"
      />
      <span>No Essential<br />JavaScript</span>
    </div>
    <div>
      <a href="https://www.mabsland.com/Adoption.html">
        <img
          class="transparent no-hover"
          alt="14+"
          src="home/graphics/web-14.svg"
        />
      </a>
      <span>14+</span>
    </div>
    <div>
      <img
        class="transparent no-hover"
        alt="Mild Profanity"
        src="home/graphics/profanity.svg"
      />
      <span>Mild Profanity</span>
    </div>
  </div>
  <a id="header" href="#">
    <span id="face-front">daudix.one</span>
    <span id="face-back">
      Enter
      <span>→</span>
      <span aria-hidden="true">→</span>
      <span aria-hidden="true">→</span>
    </span>
  </a>
  <div id="bottom-part">
    <div>
      <strong>SITE DESCRIPTION:</strong>
      <ul>
        <li>Personal opinions</li>
        <li>Mediocre writing</li>
        <li>Wacky humor</li>
      </ul>
    </div>
    <a href="home/g.mp4">
      <img
        id="warning"
        class="transparent no-hover"
        alt="Warning"
        src="home/graphics/warning.svg"
      />
    </a>
  </div>
  <img
    id="barcode"
    class="transparent no-hover"
    alt="Barcode"
    src="home/graphics/barcode.svg"
  />
  <div id="rainbow"></div>
</div> -->

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xml:space="preserve"
   width="64"
   height="64"
   version="1.1"
   id="svg3"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><defs
     id="defs3" /><path
     d="M 1,1 H 63 V 63 H 1 Z"
     id="path1"
     style="fill:none;stroke:#ffffff;stroke-width:2" /><path
     d="m 18.602,20.534 -3.04,-11.36 h 2.192 l 2.08,8.48 2.096,-8.48 h 1.936 l 2.096,8.48 2.064,-8.48 h 2.208 l -3.04,11.36 H 24.89 l -1.984,-7.777 -1.984,7.776 z m 12.101,0 V 9.174 h 7.648 v 1.807 h -5.568 v 2.96 h 5.376 v 1.792 h -5.376 v 2.992 h 5.696 v 1.808 z m 8.757,0 V 9.174 h 4.256 q 2.08,0 3.152,0.735 1.088,0.736 1.088,2.336 0,0.72 -0.304,1.264 -0.288,0.528 -0.864,0.832 -0.56,0.304 -1.36,0.336 l -0.016,-0.032 q 1.456,0.048 2.24,0.8 0.784,0.736 0.784,1.968 0,1.568 -1.088,2.352 -1.072,0.768 -3.056,0.768 z m 2.08,-1.76 h 2.656 q 0.976,0 1.536,-0.4 0.576,-0.4 0.576,-1.185 0,-0.784 -0.56,-1.2 -0.56,-0.416 -1.552,-0.416 H 41.54 Z m 0,-4.833 h 2.112 q 1.024,0 1.6,-0.384 0.576,-0.384 0.576,-1.12 0,-0.768 -0.56,-1.136 -0.56,-0.368 -1.616,-0.368 H 41.54 Z"
     aria-label="WEB"
     id="path2"
     style="fill:#ffffff" /><path
     d="M 18.877,54.827 V 34.048 h -6.486 v -4.224 h 2.603 q 1.835,0 2.944,-0.47 1.11,-0.469 1.579,-1.62 0.512,-1.195 0.512,-3.2 h 4.394 v 30.293 z m 23.557,0 V 48.768 H 27.244 V 44.245 L 41.538,24.533 h 6.443 v 19.414 h 3.626 v 4.821 h -3.626 v 6.059 z m -9.13,-10.88 h 9.13 V 31.744 Z"
     aria-label="14"
     id="path3"
     style="fill:#ffffff" /></svg>
