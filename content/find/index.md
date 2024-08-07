+++
title = "Find"
description = "Where, when and how to find me."
[extra]
stylesheets = ["find.css"]
+++

# Find Me

<picture>
  <source srcset="envelope-d.webp" media="(prefers-color-scheme: dark)" />
  <img class="no-hover" alt="envelope" src="envelope-l.webp"  />
</picture>

## Contacts

For me it's currently <time><span id="clock"><noscript>NO:JS</noscript></span></time> <small>(UTC+3)</small>  and I'm <span id="online-indicator"><noscript>N/A</noscript></span>.

Feel free to message me on any of these:

<small>From most preferred to the least ↓</small>

![die in a fire](die-in-a-fire.jpg#end)

- [Matrix](https://matrix.to/#/@daudix:envs.net) <small>(I have alts on other homeservers, but I don't use them)</small>
- [Discord](https://discord.com/users/650757995378114581)
- [Telegram](https://t.me/ddaudix)
- [Mail (disroot)](mailto:daudix@disroot.org)
- [Mail (envs)](mailto:daudix@envs.net)
- ~~[Signal](https://signal.me/#eu/0KKOAPEjDPbNVKFfWbNu9AHZE2od2quKOO5NxLmFqf/xA9940S5JKZbOhTwoa2wP)~~ <small>(my phone [is burnt](@/blog/2024-07-08-using-dumbphone/index.md) so don't use it, I won't receive the message in a while)</small>
- ~~[XMPP](xmpp:daudix@nixnet.services)~~ <small>(there are rumors that the admin is a pedo, so currently looking for another server; better safe than sorry)</small>

## Socials

List of places where you can ~~stalk~~ find me on:

{% alert(note=true) %}
This is not a complete list, but rather list of places where I'm somewhat active. You can find me on other platforms as well, although make sure it's the real me by [asking](#contacts) first.
{% end %}

<small>From most active to the least ↓</small>

- [Mastodon](https://social.treehouse.systems/@daudix)
- [Akkoma](https://pleroma.envs.net/daudix)
- [Lemmy](https://lemmy.zip/u/daudix)
- [Pixelfed](https://pixelfed.social/Daudix)
- [YouTube](https://www.youtube.com/@ddaudix)

I have changed the Fediverse instance I'm on a lot, so to make sure nothing is lost, here's my Fediverse timeline:

<small>From newest to oldest ↓</small>
<ol id="timeline">
  <li>
    <small>
      <span class="timeline-title">May 5, 2024 - Today</span>
      <a href="https://vmst.io/@daudix">vmst.io</a>
      <span class="timeline-badge">Main profile</span>
    </small>
  </li>
  <li>
    <small>
      <span class="timeline-title">Jan 8, 2024 - Today</span>
      <a href="https://pleroma.envs.net/daudix">pleroma.envs.net</a>
      <span class="timeline-badge">Personal profile</span>
    </small>
  </li>
  <li>
    <small>
      <span class="timeline-title">Nov 20, 2023 - May 7, 2024</span>
      <a href="https://social.treehouse.systems/@daudix">social.treehouse.systems</a>
      <span class="timeline-badge">Main profile</span>
    </small>
  </li>
  <li>
    <small>
      <span class="timeline-title">May 21, 2024 - Today</span>
      <a href="https://lemmy.zip/u/daudix">lemmy.zip</a>
      <span class="timeline-badge">Link aggregator</span>
    </small>
  </li>
  <li>
    <small>
      <span class="timeline-title">Aug 7, 2023 - May 21, 2024</span>
      <a href="https://toast.ooo/u/daudix">toast.ooo</a>
      <span class="timeline-badge">Link aggregator</span>
    </small>
  </li>
  <li>
    <small>
      <span class="timeline-title">Mar 7, 2023 - Today</span>
      <a href="https://pixelfed.social/Daudix">pixelfed.social</a>
      <span class="timeline-badge">Photo album</span>
    </small>
  </li>
  <li>
    <small>
      <span class="timeline-title">Feb 17, 2023 - Mar 7, 2023</span>
      <a href="https://pixey.org/Daudix">pixey.org</a>
      <span class="timeline-badge">Photo album</span>
    </small>
  </li>
  <li>
    <small>
      <span class="timeline-title">Sep 1, 2022 - Nov 20, 2023</span>
      <a href="https://mstdn.social/@Daudix">mstdn.social</a>
      <span class="timeline-badge">Main profile</span>
    </small>
  </li>
</ol>

## Forges

I was using GitHub from the very start of my FOSS journey, but (not so) recently I've [migrated to Codeberg](@/blog/2023-07-15-migration-from-github-to-codeberg/index.md), because I didn't like the direction where GitHub is heading.

- [Codeberg](https://codeberg.org/daudix)
- [GitHub](https://github.com/daudix)
- [GitLab](https://gitlab.com/daudix)
- [GitLab (GNOME)](https://gitlab.gnome.org/daudix)

<script type="text/javascript">
  function updateClock() {
    const options = {
      // No, I'm not in Moscow, just so happens the timezone is the same there
      timeZone: "Europe/Moscow",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const clockElement = document.getElementById("clock");
    const myLocalTime = new Date().toLocaleString("en-US", options);
    const userLocalTime = new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    if (myLocalTime === userLocalTime) {
      clockElement.textContent = "Same time as yours";
    }

    else {
      clockElement.textContent = myLocalTime;
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
</script>

<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", function () {
		const indicatorElement = document.getElementById("online-indicator");
		indicatorElement.innerHTML = "N/A";
	
		fetch("https://api.lanyard.rest/v1/users/650757995378114581")
			.then(response => response.json())
			.then(data => {
				const status = data.data.discord_status;
	
				indicatorElement.classList.remove("online", "idle", "dnd", "offline");
				indicatorElement.classList.add(status);
	
				switch (status) {
					case "online":
						indicatorElement.innerHTML = "Online";
						break;
					case "idle":
						indicatorElement.innerHTML = "Idle";
						break;
					case "dnd":
						indicatorElement.innerHTML = "DND";
						break;
					case "offline":
						indicatorElement.innerHTML = "Offline";
						break;
				}
			})
			.catch(error => {
				console.error("Error fetching Lanyard data:", error);
				indicatorElement.innerHTML = "N/A";
			});
	});
</script>
