+++
title = "About"
description = "About me, what I do, and more."
[extra]
stylesheets = ["about.css"]
+++

<div id="about-splash">
<div id="avatar-container">
	<img id="avatar" src="logo.svg" alt="logo" />
  <img id="it-sucks" class="transparent no-hover" src="this-logo-sucks.png" alt="this logo sucks" />
</div>

# David Lapshin { #header }

<small>Trying out things since 2007.</small>
</div>

## About Me

Hello there! My name is David, you may know me by my online handle Daudix.

{% alert(fact=true) %}
Although Daudix appears to be just my online handle, it's actually a slightly different persona; perhaps more silly and authentic than the "official" David, but it's fine to use whatever you like.
{% end %}

I'm from the Siberian part of Russia, but currently live in <abbr id="abyss" title="If you know, you know">a̸͙͠b̴̛ͅȳ̴̜s̴̫̄s̸̞̒</abbr>.

Things that I like:
- Retro/-futurism and vintage stuff
- Minor details and references
- Smol/indie web
- Photography <small>(although I don't have much opportunity to shoot anything else than a view from my window)</small>
- Design
- Purple <small>(I know, it's shocking)</small>
- Aesthetics:
  - [Vaporwave](https://aesthetics.fandom.com/wiki/Vaporwave)
  - [Cyberpunk](https://aesthetics.fandom.com/wiki/Cyberpunk)
  - [Liminal Space](https://aesthetics.fandom.com/wiki/Liminal_Space)
- Games:
  - Portal <small>(all-time favorite)</small>
  - Celeste
  - Teardown
  - Superliminal
  - Stardew Valley
  - Untitled Goose
  - The Stanley Parable

Design is perhaps a bit more than just a thing I like, it's my hobby and I'm learning more about it every day, although lately I've been a bit burned out.

And, as you can see, I do some web development! I like working with CSS and HTML but that's about it, I have no clue how to work with JS :D

Oh and I'm slightly <span id="shy" onclick="fluttershyAnim()">shy</span>.

## Works

I mostly create and improve icons for around-GNOME apps, if app doesn't have a translation I do it, sometimes I help with UI design.

Currently member of [Nickvision](https://nickvision.org) and [Gradience](https://gradienceteam.github.io) teams as a designer and maintainer respectively.

Have a look at my [designs](@/design/index.md), mostly icons but also some wallpapers (one of them is even shipped with GNOME).

## Small Web

Small Web is something I really like, I'm member of multiple tildes/pubnixes, although I don't do much there yet, I still like to be part of them.

Pubnixes/tildes:

- [exozyme](https://exozy.me)
- [envs](https://envs.net)

I have an alt website on [neocities](https://neocities.org), [check it out](https://daudix.neocities.org).

I also have a [Gemini capsule](gemini://gmi.daudix.one) on [flounder](https://flounder.online), but I recently changed it to serve as a place for jotting down small notes rather than being a mirror of this website. See [this post](@/blog/2024-07-13-repurposing-gemini-capsule/index.md) for the reasons behind this decision. <small>(you can also *finger* me at `daudix@flounder.online`)</small>

[![Tilde invasion](tilde-invasion.png)](https://pleroma.envs.net/notice/AeJ5ACKLIOl1bCj2lU)

## Buttons

<small>Seriously, they're awesome!</small>

<div class="buttons-container">

[![a proud member of the green team of 512KB club](88x31/green-team.gif)](https://512kb.club)
[![aperturelabs](88x31/aperturelabs.png)](https://www.aperturescience.com)
[![ddg](88x31/ddg.gif)](https://duckduckgo.com)
[![firefox3](88x31/firefox3.gif)](https://getfirefox.com)
[![getimiskon](88x31/getimiskon.png)](https://getimiskon.xyz)
[![iso](88x31/iso.png)](https://www.w3.org/QA/Tips/iso-date)
[![portal](88x31/portal.png)](https://www.thinkwithportals.com)
[![ronbutton](88x31/ronbutton.png)](https://veeronniecaw.space)
[![savewalterwhite](88x31/savewalterwhite.gif)](http://www.savewalterwhite.com)
[![saynotoweb3](88x31/saynotoweb3.gif)](https://yesterweb.org/no-to-web3/)
[![seirdy](88x31/seirdy.gif)](https://seirdy.one)
[![standwith](88x31/standwith.png)](https://decolonizepalestine.com)
[![stardew-valley](88x31/stardew-valley.gif)](https://www.stardewvalley.net)
[![statuscafe](88x31/statuscafe.png)](https://status.cafe)
[![vscodium](88x31/vscodium.gif)](https://vscodium.com)
![adhd](88x31/adhd.gif)
![any2](88x31/any2.gif)
![anythingbut](88x31/anythingbut.gif)
![besteyes2](88x31/besteyes2.gif)
![bestviewed16bit](88x31/bestviewed16bit.gif)
![dark-mode](88x31/dark-mode.png)
![fuckchrome](88x31/fuckchrome.gif)
![imac](88x31/imac.gif)
![linux_powered](88x31/linux_powered.gif)
![mobilefriendly](88x31/mobilefriendly.png)
![neo-fedi](88x31/neo-fedi.gif)
![nofuckingthanks](88x31/nofuckingthanks.gif)
![righttorepair](88x31/righttorepair.png)
![sourcemissing](88x31/sourcemissing.png)
![yarrr](88x31/yarrr.gif)

</div>

If you like my website, feel free to link it by adding one of these buttons:

<div class="buttons-container">

![daudix](88x31/daudix.gif)
![daudix-alt](88x31/daudix-alt.gif)

</div>

{% alert(note=true) %}
It's recommended to avoid hot-linking; instead, place a copy on your own site.
{% end %}

Hey, you, yes, *you*. Got website and a button? Just button? I have a deal for you! [Ping me somewhere](@/find/index.md#contacts) so I can add it here, piece of cake.

<img id="fluttershy" class="transparent no-hover drop-shadow" src="fluttershy.gif" />

<script>
  const fluttershy = document.getElementById("fluttershy");

  function fluttershyAnim() {
    fluttershy.classList.add("flying");
    fluttershy.addEventListener("animationend", function () {
      fluttershy.classList.remove("flying");
    });
  }
</script>
