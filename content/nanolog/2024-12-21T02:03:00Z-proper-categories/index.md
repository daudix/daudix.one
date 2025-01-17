+++
title = "Proper Categories"
+++

I've finally finished working on the categories feature, and if you're reading this it means it's already deployed. Not that it was difficult in terms of coding, but it was a bit tricky in terms of design, plus it was unclear how to integrate it properly.

Basically I had some sort of categorization using tags and "post types" such as "Featured" and "Hot", and while it sounds okay on the surface, it really wasn't that good; there were no way to filter posts by their type, and the styling was a bit over the top and rather distracting.

So, to address these issues, I have added [categories](../categories/) page. Under the hood it uses the same logic as tags, but my plan is to use only one category per post. I have also added feed links next to headings, so that you can subscribe to, I don't know, "Archived" category and get ancient posts only, or subscribe to "Devlog" tag to get my site updates, you got the idea.

I like how I managed to reuse existing styling from post list for the categories index page, and it wasn't really my plan; I initially wanted it to use a unique and interesting style, but I just couldn't come up with anything so I reused existing design (which I stole from [Fuwari](https://fuwari.vercel.app/)).

What's now left to finalize the categorization overhaul is redesign the "Tags" page, but right now I'm not sure how it should look like.

P.S. This particular nanopost is a bit lengthy huh...
