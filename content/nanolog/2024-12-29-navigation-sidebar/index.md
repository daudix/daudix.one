+++
title = "Navigation Sidebar"
date = 2024-12-29T00:27:00Z
+++

So, there's this thing I've been working on for five days straight: Navigation sidebar!

That's right, I have finally fixed site's navigation. The thing that was used for a short period of time before this was honestly pretty pad; to go somewhere you had to open the burger menu and then click, it covered content on mobile, and some links were in the footer (for some reason?). Now it's all neatly placed in a sidebar, with categories, icons, all that stuff. It was surprisingly hard to implement, not the sidebar itself, no no, fixing all the stuff that relied on screen width such as post banners; I had to use some modern CSS features such as [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries) as it wasn't possible to fix them otherwise. I have also burnt down the "Rizz it Up" button on home page, it had to be done anyway.

While at it I have also redesigned the footer, moved post buttons such as "Table of Contents" and "Share" over to header, and on pages that have an Atom feed it displays button to subscribe to it. The title in heading acts as "Go to Top" button, minor detail but pretty useful at times.

There's still a lot of stuff to clean up and simplify, but whatever I have at hand already is times better than what was before. I'm particularly not happy with the search bar taking a lot of space, and search results being very narrow.

Even thought sidebar is not a new concept, it's worth noting that I got the idea to implement it by first looking at old [Volpeon's](https://v1.volpeon.ink) site, and was then convinced by looking at [Pebble's site](https://pebble.pet) (both look spectacular by the way).
