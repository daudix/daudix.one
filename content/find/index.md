+++
title = "Find Me"
description = "Where, when and how to find me."
+++

# Find Me

<picture>
  <source srcset="envelope-d.png" media="(prefers-color-scheme: dark)" />
  <img src="envelope-l.png" alt="envelope" />
</picture>

## Contacts

Currently it's <time><span id="clock"><noscript>NO:JS</noscript></span></time> <small>(UTC+3)</small> for me, so take that into consideration if I don't respond promptly.

> **Tip:** Check my online status on the [home](@/_index.md) page in the form of a small dot on the avatar.

Feel free to send me a message on any of these. Whether you're bored or need someone to listen to you, I'm always open!

<small>From most preferred to the least ↓</small>

![die in a fire](die-in-a-fire.jpg#end)

- [Matrix](https://matrix.to/#/@daudix:envs.net) <small>(there are accounts on other homeservers, but I don't use them)</small>
- [Discord](https://discord.com/users/650757995378114581)
- [Telegram](https://t.me/ddaudix)
- [Mail (disroot)](mailto:daudix@disroot.org)
- [Mail (envs)](mailto:daudix@envs.net)
- ~~[Signal](https://signal.me/#eu/0KKOAPEjDPbNVKFfWbNu9AHZE2od2quKOO5NxLmFqf/xA9940S5JKZbOhTwoa2wP)~~ <small>(my phone [is burnt](https://xdaforums.com/t/fix-pixel-3-qusb_bulk_cid-xxxx_sn-xxxxxxxx.4205331/) so don't use it, I won't recieve the message in a while)</small>
- ~~[XMPP](xmpp:daudix@nixnet.services)~~ <small>(admin was accused in being a pedo, so currently looking for a different server)</small>

## Socials

List of places where you can ~~stalk~~ find me on:

> This is not a complete list but rather places where I'm somewhat active. You can find me on other platforms as well, although make sure it's the real me by [asking](@/find/index.md) first.

<small>From most active to the least ↓</small>

- [Mastodon](https://social.treehouse.systems/@daudix)
- [Akkoma](https://pleroma.envs.net/daudix)
- [Pixelfed](https://pixelfed.social/Daudix)
- [Lemmy](https://lemmy.zip/u/daudix)
- [YouTube](https://www.youtube.com/@ddaudix)

I have changed (and will change) the Fediverse instance I'm on, so to make sure nothing is lost, here is my Fediverse timeline:

<small>From newest to oldest ↓</small>
<ol id="timeline">
  <li><small>05 May 2024 - Today      <br><a href="https://vmst.io/@daudix">                 vmst.io                 </a> • <span>Main profile    </span></small></li>
  <li><small>08 Jan 2024 - Today      <br><a href="https://pleroma.envs.net/daudix">         pleroma.envs.net        </a> • <span>Personal profile</span></small></li>
  <li><small>20 Nov 2023 - 07 May 2024<br><a href="https://social.treehouse.systems/@daudix">social.treehouse.systems</a> • <span>Main profile    </span></small></li>
  <li><small>01 Sep 2022 - 20 Nov 2023<br><a href="https://mstdn.social/@Daudix">            mstdn.social            </a> • <span>Main profile    </span></small></li>
</ol>

## Forges

I were using GitHub from the very start of my FOSS journey, but recently I've [migrated to Codeberg](@/blog/migration-from-github-to-codeberg/index.md) because I didn't like where the GitHub is heading.

- [Codeberg](https://codeberg.org/daudix)
- [GitHub](https://github.com/daudix)
- [GitLab](https://gitlab.com/daudix)
- [GitLab (GNOME)](https://gitlab.gnome.org/daudix)

<script>
  function updateClock() {
    const options = {
      // No, I'm not in Moscow, just so happens the timezone is the same there
      timeZone: "Europe/Moscow",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const now = new Date().toLocaleString("en-US", options);
    const clockElement = document.getElementById("clock");
    clockElement.textContent = now;
  }

  updateClock();
  setInterval(updateClock, 1000);
</script>
