+++
title = "More on Nanolog Webui"
date = 2025-08-13T02:08:12Z
+++

Some technical details. It uses GitHub API to push a new file to daudix.one's repository, all client-side. Auth works by using a fine-grained access token, which is configured to only push changes to daudix.one repo. It's not that important tho as the token is stored in localStorage so it should be safe.

I also plan to add edit button to nanologs that will open GitHub editing UI in a new tab, should be straightforward.

Oooh and since I'm using `textarea` HTML element I get free spellchecking!
