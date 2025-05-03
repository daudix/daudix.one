+++
title = "Snug Nook"
description = "Yet another Discord server bridged to Matrix."
[extra]
styles = ["snug-nook/style.css"]
scripts = ["snug-nook/script.js"]
no_header = true
+++

<div class="container-fill">
    <div id="guild-widget">
        <div id="guild-banner" style="--banner: url('https://cdn.discordapp.com/icons/1300606629083086878/b5fc1d99d16c51b521efe1231456460e.webp?size=16');">
            <img id="guild-icon" class="transparent no-hover" src="https://cdn.discordapp.com/icons/1300606629083086878/b5fc1d99d16c51b521efe1231456460e.webp" alt="Snug Nook guild icon." />
        </div>
        <strong id="guild-name" class="title">Snug Nook</strong>
        <p id="guild-stats">
            <span id="online-count">0 Online</span>
            <span id="member-count">0 Members</span>
        </p>
        <p id="guild-description">Cozy and welcoming space for cool people to hang out in.</p>
        <ul id="guild-traits">
            <li>💫 Silly</li>
            <li>🗣️ Multi-topic</li>
            <li>💜 Friendly</li>
        </ul>
        <div class="buttons start">
            <a href="#about">About ↓</a>
            <a href="/snug-nook/rules/">Rules →</a>
            <a id="guild-invite" class="suggested" href="https://discord.com/invite/ksgyZgCvGx">Join →</a>
        </div>
        <div id="hover-map">
            <div class="top-left"></div>
            <div class="top-middle"></div>
            <div class="top-right"></div>
            <div class="middle-left"></div>
            <div class="middle"></div>
            <div class="middle-right"></div>
            <div class="bottom-left"></div>
            <div class="bottom-middle"></div>
            <div class="bottom-right"></div>
        </div>
        <a id="guild-weekend" href="#weekend-rebrand"><i class="ph-bold ph-clock-countdown"></i>Weekend Rebrand</a>
    </div>
</div>

## About

Ever wanted to join yet another Discord server where you can act all silly and still have productive conversations? Had enough of the toxisity and, um, freakiness? Want to meet some cool new people? In that case, <span class="rainbow"><strong>Snug Nook</strong></span> fits the bill. Gluten-free and is proven safe by the FDA. Probably.

{% alert(note=true) %}
Read about its creation and the motivation behind it [here](@/blog/2024-10-31-snug-nook/index.md).
{% end %}

The server isn't special in itself, there are many servers out there, however, the wonderful people on it are. It is meant to be cozy, welcoming, and friendly, which means toxicity, doxxing, drama, suicide threats, <span class="spoiler">NSFW</span>, and the like are not welcome.

Some things from the unique side of things:

- Ananas Duck
- Hall of... Shame
- Most of my friends
- Time zone roles (optional)
- Weekend rebrands twice a month
- Custom emojis on both Discord and Matrix
- Duckquill/Ametrine updates and devlog channels
- Voice channel where one can be silent, that's right, shy folks
- Locations metaphor; e.g. `#living-room` instead of `#general` 

### Weekend Rebrand

At Snug Nook we have many unique "traditions", and weekend rebrand is one of them; every* weekend (Saturday and Sunday in the UTC time zone) we collectively decide upon what to rebrand Snug Nook to; a meme, gag, series we've been discussing in the last two weeks, and the like. It may seem silly and confusing, but that is what Snug Nook is all about; chaotic fun.

*Sometimes every other weekend if we don't have any ideas.

## Bridges

Discord isn't your cup of tea? No big deal, we provide a few bridges that, whilist lacking some features and stability, allow chatting with Discord folks:

{% alert(caution=true) %}
Experience can be significantly worse when using these; messages could be delayed, sent in wrong order, or not sent at all.
{% end %}

<div class="icon-grid">

<a href="https://matrix.to/#/#snug-nook-space:envs.net">
<img class="transparent no-hover pixels drop-shadow icon" src="icons/matrix.gif" alt="Pixel art Discord icon." />
<div class="details">
<strong>Matrix</strong>
<p><small>The most usable and officialy supported bridge.</small></p>
</div>
</a>

<a href="https://rvlt.gg/D0gqYcCP">
<img class="transparent no-hover pixels drop-shadow icon" src="icons/revolt.gif" alt="Pixel art Revolt icon." />
<div class="details">
<strong>Revolt</strong>
<p><small>Collaboration with Icycoide<sup>1</sup>.</small></p>
</div>
</a>

<a href="https://t.me/nug_snook">
<img class="transparent no-hover pixels drop-shadow icon" src="icons/telegram.gif" alt="Pixel art Telegram icon." />
<div class="details">
<strong>Telegram</strong>
<p><small>Only #living-room is bridged and it doesn't work half the time.</small></p>
</div>
</a>

</div>

***

1. <https://icycoide.github.io>
