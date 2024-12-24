+++
title = "Demo Page"
[extra]
styles = ["demo/demo.css"]
scripts = ["demo/demo.js"]
archive = "This page is in fact not archived. It is only here to demonstrate the archival statement."
trigger = "This page contains blackjack and hookers, and bad jokes such as this one."
disclaimer = """
- All tricks in this page are performed by the lab boys, don't try this at home.
- Don't expose yourself to 4000° kelvin.
- Don't take party escort submission position.
- Don't interact with asbestos and moon rocks.
"""
+++

## Markdown

Text can be **bold**, *italic*, ~~strikethrough~~, and ***~~all at the same time~~***.

[Link to another page](@/demo/page.md).

There should be whitespace between paragraphs[^1].

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

This is a normal paragraph[^2] following a header.

😭😂🥺🤣❤️✨🙏😍🥰😊

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

> "Original content is original only for a few seconds before getting old"
> > Rule #21 of the internet

- Item 1
- Item 2
  - Item 2.1
  - Item 2.2
- Item 3
- `Item 4`

1. Perform step #1
2. Proceed to step #2
3. Conclude with step #3

- [ ] Milk
- [x] Eggs
- [x] Flour
- [ ] Coffee
- [x] Combustible lemons

[![Shimmer Glimmer Twiggle Trouble](https://files.catbox.moe/levd55.jpg)](https://www.deviantart.com/orin331/art/Shimmer-Glimmer-Twiggle-Trouble-841664469)

| Character            | Show               | Quotes                             |
| :------------------- | :----------------- | :--------------------------------- |
| Fluttershy           | My Little Pony     | Yay                                |
| Derpy Hooves         | My Little Pony     | I just don't know what went wrong  |
| Gir                  | Invader ZIM        | GUESS WHO MADE WAAAAFFLES?!!       |
| WALL-E               | WALL-E             | Ooooo 0.0                          |
| Taco                 | Inanimate Insanity | SOUR CREAM!                        |

```rust
let highlight = true;
```

```scss, linenos, linenostart=10, hl_lines=3-4 8-9, hide_lines=2 7
pre mark {
  // If you want your highlights to take the full width
  display: block;
  color: currentcolor;
}
pre table td:nth-of-type(1) {
  // Select a colour matching your theme
  color: #6b6b6b;
  font-style: italic;
}
```

***

## Extra

### Shortcodes

Duckquill provides a few useful [shortcodes](https://www.getzola.org/documentation/content/shortcodes/) that simplify some tasks. They can be used on all pages.

#### Alerts

[GitHub-style](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) alerts. Simply wrap the text of desired alert inside the shortcode to get the desired look.

Available alert types:

- `note`: Useful information that users should know, even when skimming content.
- `tip`: Helpful advice for doing things better or more easily.
- `important`: Key information users need to know to achieve their goal.
- `warning`: Urgent info that needs immediate user attention to avoid problems.
- `caution`: Advises about risks or negative outcomes of certain actions.
- `edit`: Indicates that something has been edited.
- `fact`: Some uninteresting fact.

```jinja2
{%/* alert(note=true) */%}
-> Alert text <-
{%/* end */%}
```

{% alert(note=true) %}
Useful information that users should know, even when skimming content.

- I'm a list with an [inline](https://example.org) link.
{% end %}

{% alert(tip=true) %}
Helpful advice for doing things better or more easily.

- I'm a list with an [inline](https://example.org) link.
{% end %}

{% alert(important=true) %}
Key information users need to know to achieve their goal.

- I'm a list with an [inline](https://example.org) link.
{% end %}

{% alert(warning=true) %}
Urgent info that needs immediate user attention to avoid problems.

- I'm a list with an [inline](https://example.org) link.
{% end %}

{% alert(caution=true) %}
Advises about risks or negative outcomes of certain actions.

- I'm a list with an [inline](https://example.org) link.
{% end %}

{% alert(edit=true) %}
Indicates that something has been edited.

- I'm a list with an [inline](https://example.org) link.
{% end %}

{% alert(fact=true) %}
Some uninteresting fact.

- I'm a list with an [inline](https://example.org) link.
{% end %}

#### Images and Videos

By default images and videos come with some generic styling, such as rounded corners and shadow. To fine-tune these, you can use shortcodes with different variable combinations.

Available variables are:

- `url`: URL to an image.
- `url_min`: URL to compressed version of an image, original can be opened by clicking on the image.
- `alt`: Alt text, same as if the text were inside square brackets in Markdown.
- `full`: Forces image to be full-width.
- `full_bleed`: Forces image to fill all the available screen width. Removes shadow, rounded corners and zoom on hover.
- `start`: Float image to the start of paragraph and scale it down.
- `end`: Float image to the end of paragraph and scale it down.
- `pixels`: Uses nearest neighbor algorithm for scaling, useful for keeping pixel-art sharp.
- `transparent`: Removes rounded corners and shadow, useful for images with transparency.
- `no_hover`: Removes zoom on hover.
- `spoiler`: Blurs image until hovered over/pressed on, useful for plot rich game screenshots.
- `spoiler` with `solid`: Ditto, but makes the image completely hidden.

```jinja2
{{/* image(url="image.png", alt="This is an image", no_hover=true) */}}
```

<figure>
{{ image(url="https://i1.theportalwiki.net/img/2/23/Ashpd_blueprint.jpg", alt="Portal Gun blueprint", no_hover=true) }}
<figcaption>Image with an alt text and without zoom on hover</figcaption>
</figure>

<figure>
{{ image(url="https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg", url_min="https://upload.wikimedia.org/wikipedia/commons/3/38/JPEG_example_JPG_RIP_010.jpg", alt="The gravestone of J.P.G.", no_hover=true) }}
<figcaption>Image with compressed version, an alt text, and without zoom on hover</figcaption>
</figure>

<figure>
{{ image(url="https://files.catbox.moe/lk7nee.jpg", alt="Portal Gun blueprint", spoiler=true) }}
<figcaption>Image with an alt text, hidden behind a spoiler</figcaption>
</figure>

Alternatively, you can append the following URL anchors. It can be more handy in some cases, e.g. such images will render normally in any Markdown editor, opposed to the Zola shortcodes.

- `#full`: Forces image to be full-width.
- `#full-bleed`: Forces image to fill all the available screen width. Removes shadow, rounded corners and zoom on hover.
- `#start`: Float image to the start of paragraph and scale it down.
- `#end`: Float image to the end of paragraph and scale it down.
- `#pixels`: Uses nearest neighbor algorithm for scaling, useful for keeping pixel-art sharp.
- `#transparent`: Removes rounded corners and shadow, useful for images with transparency.
- `#no-hover`: Removes zoom on hover.
- `#spoiler`: Blurs image until hovered over/pressed on, useful for plot rich game screenshots.
- `#spoiler` with `#solid`: Ditto, but makes the image completely hidden.

<br />
<figure>

[![Toolbx header image](https://containertoolbx.org/assets/toolbx.gif#full#pixels#transparent#no-hover)](https://containertoolbx.org)
<figcaption>Full-width image with an alt text, pixel-art rendering, no shadow and rounded corners, and no zoom on hover</figcaption>
</figure>

<br />

![1966 Ford Mustang coupe white](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/1966_Ford_Mustang_coupe_white_003.jpg/320px-1966_Ford_Mustang_coupe_white_003.jpg#start)
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur.

\
[![Picture of the magnificent lej da staz just before sunrise in october](https://images.unsplash.com/photo-1635410773896-da585e1fe138?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D#full-bleed)](https://unsplash.com/photos/a-mountain-lake-surrounded-by-trees-and-snow-CqTOTZh5vrs)

For videos it's all the same except for a few differences: `no_hover` and `url_min` variables are not available.

Additionally, the following [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes) can be set:

- `autoplay`: Start playing the video automatically.
- `controls`: Display video controls such as volume control, seeking and pause/resume.
- `loop`: Play the video again once it ends.
- `muted`: Turn off the audio by default.
- `playsinline`: Prevent the video from playing in fullscreen by default (depends on the browser).

```jinja2
{{/* video(url="video.webm", alt="This is a video", controls=true) */}}
```

<figure>
{{ video(url="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm", alt="Red flower wakes up", controls=true) }}
<figcaption>WebM video example from MDN</figcaption>
</figure>

<figure>
{{ video(url="https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0e/Duckling_preening_%2881313%29.webm/Duckling_preening_%2881313%29.webm.720p.vp9.webm", alt="Duckling preening", full_bleed=true, controls=true) }}
<figcaption>Duckling preening</figcaption>
</figure>

#### CRT

Alright, this one doesn't simplify anything, it just adds a CRT-like effect around Markdown code blocks.

```jinja2
{%/* crt() */%}
-> Markdown code block <-
{%/* end */%}
```

{% crt() %}

```
 _____________________________________________
|.'',        Public_Library_Halls         ,''.|
|.'.'',                                 ,''.'.|
|.'.'.'',                             ,''.'.'.|
|.'.'.'.'',                         ,''.'.'.'.|
|.'.'.'.'.|                         |.'.'.'.'.|
|.'.'.'.'.|===;                 ;===|.'.'.'.'.|
|.'.'.'.'.|:::|',             ,'|:::|.'.'.'.'.|
|.'.'.'.'.|---|'.|, _______ ,|.'|---|.'.'.'.'.|
|.'.'.'.'.|:::|'.|'|???????|'|.'|:::|.'.'.'.'.|
|,',',',',|---|',|'|???????|'|,'|---|,',',',',|
|.'.'.'.'.|:::|'.|'|???????|'|.'|:::|.'.'.'.'.|
|.'.'.'.'.|---|','   /%%%\   ','|---|.'.'.'.'.|
|.'.'.'.'.|===:'    /%%%%%\    ':===|.'.'.'.'.|
|.'.'.'.'.|%%%%%%%%%%%%%%%%%%%%%%%%%|.'.'.'.'.|
|.'.'.'.','       /%%%%%%%%%\       ','.'.'.'.|
|.'.'.','        /%%%%%%%%%%%\        ','.'.'.|
|.'.','         /%%%%%%%%%%%%%\         ','.'.|
|.','          /%%%%%%%%%%%%%%%\          ','.|
|;____________/%%%%%Spicer%%%%%%\____________;|
```

{% end %}

#### Emoji

Use any custom emoji from Akkoma.

Available variables are:

- `host`: The instance on which the emoji is located (defaults to [pleroma.envs.net](https://pleroma.envs.net)).
- `name`: Name of the emoji.
- `path`: Path or filename of the local colocated emoji.
- `big`: Make the emoji bigger.

```jinja2
{{/* emoji(name="neofox_googly_shocked") */}}
```

Hello there, I'm an {{ emoji(name="neofox_googly_shocked") }} inline custom emoji.

```jinja2
{{/* emoji(name="afloofLoad", big=true) */}}
```

{{ emoji(name="afloofLoad", big=true) }}

#### YouTube

Allows to embed a YouTube video using youtube-nocookie.

Available variables are:

- `autoplay`: Whether the video should autoplay.
- `start`: On which second video should start.

```jinja2
{{/* youtube(id="0Da8ZhKcNKQ") */}}
```

{{ youtube(id="0Da8ZhKcNKQ") }}

#### Vimeo

Allows to embed a Vimeo video.

Available variables are:

- `autoplay`: Whether the video should autoplay.

```jinja2
{{/* vimeo(id="869483483") */}}
```

{{ vimeo(id="869483483") }}

#### Mastodon

Allows to embed a Mastodon post.

Available variables are:

- `host`: The instance on which the post resides. If not set, it will fallback to the one set in the `[extra.comments]` section of `config.toml`.
- `user`: The poster. If not set, it will fallback to the one set in the `[extra.comments]` section of `config.toml`.
- `id`: The ID of the post, usually at the end of the URL.

```jinja2
{{/* mastodon(id="113375516179365586") */}}
```

{{ mastodon(id="113375516179365586") }}

### Description List (`<dl>`)

```html
<dl>
<dt>Something</dt>
<dd>And its description</dd>
</dl>
```

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

### Form Input (`<input>`)

```html
<input type="checkbox" />
<label>Checkbox</label>
```

<ul>
  <li>
    <input type="checkbox" />
    <label>&nbsp;Milk</label>
  </li>
  <li>
    <input type="checkbox" />
    <label>&nbsp;Eggs</label>
  </li>
  <li>
    <input type="checkbox" />
    <label>&nbsp;Flour</label>
  </li>
  <li>
    <input type="checkbox" checked />
    <label>&nbsp;Coffee</label>
  </li>
  <li>
    <input type="checkbox" disabled />
    <label>&nbsp;Combustible lemons</label>
  </li>
</ul>

With `switch` class:

```html
<input class="switch" type="checkbox" />
<label>Checkbox</label>
```

<ul>
  <li>
    <input class="switch" type="checkbox" />
    <label>&nbsp;Milk</label>
  </li>
  <li>
    <input class="switch" type="checkbox" />
    <label>&nbsp;Eggs</label>
  </li>
  <li>
    <input class="switch" type="checkbox" />
    <label>&nbsp;Flour</label>
  </li>
  <li>
    <input class="switch" type="checkbox" checked />
    <label>&nbsp;Coffee</label>
  </li>
  <li>
    <input class="switch" type="checkbox" disabled />
    <label>&nbsp;Combustible lemons</label>
  </li>
</ul>

With `switch` and `big` classes:

```html
<input class="switch big" type="checkbox" />
<label>Checkbox</label>
```

<ul>
  <li>
    <input class="switch big" type="checkbox" />
    <label>&nbsp;Milk</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" />
    <label>&nbsp;Eggs</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" />
    <label>&nbsp;Flour</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" checked />
    <label>&nbsp;Coffee</label>
  </li>
  <li>
    <input class="switch big" type="checkbox" disabled />
    <label>&nbsp;Combustible lemons</label>
  </li>
</ul>

With `radio` type:

```html
<input type="radio" name="test" />
<label>Radio</label>
```

<ul>
  <li>
    <input type="radio" name="test" />
    <label>&nbsp;Milk</label>
  </li>
  <li>
    <input type="radio" name="test" />
    <label>&nbsp;Eggs</label>
  </li>
  <li>
    <input type="radio" name="test" />
    <label>&nbsp;Flour</label>
  </li>
  <li>
    <input type="radio" name="test" checked />
    <label>&nbsp;Coffee</label>
  </li>
  <li>
    <input type="radio" name="test" disabled />
    <label>&nbsp;Combustible lemons</label>
  </li>
</ul>

With `color` type:

```html
<label>Color:</label>
<input type="color" value="#000000" />
```

<label for="color">Color:</label>
<input id="color" type="color" value="#b57edc" />

<label for="color">Disabled:</label>
<input id="color" type="color" value="#b57edc" disabled />

With `range` type:

```html
<input type="range" max="100" value="33">
```

<input type="range" max="100" value="33" id="range">
<!-- For the demo purposes only -->
<small id="range-value"></small>
<!-- End -->

### Figure Captions (`<figcaption>`)

```markdown
<figure>
  -> Whatever content <-
  <figcaption>Caption of content above</figcaption>
</figure>
```

<figure>

  ![The Office](https://i.ibb.co/MPDJRsT/ImMAXM3.png)
  <figcaption>The Office where Stanley works, it has yellow floor and beige walls</figcaption>
</figure>

### Accordion (`<details>`)

```markdown
<details>
  <summary>Accordion title</summary>
  -> Contents here <-
</details>
```

<details>
  <summary>Reveal accordion</summary>

  Get it? I know, it's an awful pun.
  ![Piano Accordion](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PianoAccordeon.jpg/916px-PianoAccordeon.jpg#transparent#no-hover)

</details>

### Side Comment (`<small>`)

```html
<small>Small, cute text that doesn't catch attention.</small>
```

<small>Small, cute text that doesn't catch attention.</small>

### Abbreviation (`<abbr>`)

```html
<abbr title="American Standard Code for Information Interchange">ASCII</abbr>
```

The <abbr title="American Standard Code for Information Interchange">ASCII</abbr> art is awesome!

### Aside (`<aside>`)

```html
<aside>

-> Contents here <-
</aside>
```

<aside>

Quill and a parchment

![Quill and a parchment](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%D7%A7%D7%9C%D7%A3%2C_%D7%A0%D7%95%D7%A6%D7%94_%D7%95%D7%93%D7%99%D7%95.jpg/326px-%D7%A7%D7%9C%D7%A3%2C_%D7%A0%D7%95%D7%A6%D7%94_%D7%95%D7%93%D7%99%D7%95.jpg)
</aside>

A quill is a writing tool made from a moulted flight feather (preferably a primary wing-feather) of a large bird. Quills were used for writing with ink before the invention of the dip pen, the metal-nibbed pen, the fountain pen, and, eventually, the ballpoint pen.

As with the earlier reed pen (and later dip pen), a quill has no internal ink reservoir and therefore needs to periodically be dipped into an inkwell during writing. The hand-cut goose quill is rarely used as a calligraphy tool anymore because many papers are now derived from wood pulp and would quickly wear a quill down. However it is still the tool of choice for a few scribes who have noted that quills provide an unmatched sharp stroke as well as greater flexibility than a steel pen.

### Keyboard Input (`<kbd>`)

```html
<kbd>⌘ Command</kbd>.
```

To switch the keyboard layout, press <kbd>⌘ Super</kbd> + <kbd>Space</kbd>.

### Mark Text (`<mark>`)

```html
<mark>Marked text</mark>
```

You know what? I'm gonna say some <mark>very important</mark> stuff, so <mark>important</mark> that even **bold** is not enough.

### Deleted and Inserted Text (`<del>` and `<ins>`)

```html
<del>Something deleted</del> <ins>Something added</ins>
```

<del>Text deleted</del> <ins>Text added</ins>

### Progress Indicator (`<progress>`)

```html
<progress></progress>
<progress value="33" max="100"></progress>
```

<progress></progress>
<progress value="33" max="100"></progress>

### Sample Output (`<samp>`)

```html
<samp>Sample Output</samp>
```

<samp>Sample Output</samp>

### Inline Quotation (`<q>`)

```html
<q>Someone said something</q>
```

Blah blah <q>Inline Quote</q> hmm.

### Unarticulated Annotation (`<u>`)

```html
<u>Gmarrar mitsakes</u>
```

<u>Yeet</u> the <u>sus</u> drip while <u>vibing</u> with the <u>TikTok</u> <u>fam</u> on a cap-free boomerang.

### External Links

```html
<a class="external" href="https://example.org">External link</a>
```

<a class="external" href="https://example.org">Link to site</a>

### Spoilers

```html
<span class="spoiler">Some spoiler</span>
```

You know, <span class="spoiler">Duckquill is a pretty dumb name.</span> I know, crazy.

With `solid` class:

```html
<span class="spoiler solid">Some spoiler</span>
```

You know, <span class="spoiler solid">Duckquill is a pretty dumb name.</span> I know, crazy.

### Buttons Dialog

```html.j2
<div class="buttons">
  <a href="#top">Go to Top</a>
  <a class="colored external" href="https://example.org">Example</a>
</div>
```

<div class="buttons">
  <a href="#top">Go to Top</a>
  <a class="colored external" href="https://example.org">Example</a>
</div>

With `centered` and `big` classes:

```html.j2
<div class="buttons centered">
  <button class="big colored">Do Something…</button>
</div>
```

<div class="buttons centered">
  <button class="big colored">Do Something…</button>
</div>

[^1]: Footnote
[^2]: [Footnote (link)](https://example.org)

<!-- For the demo purposes only -->
<div id="color-picker-container">
  <small>Accent color:</small>
  <input id="color-picker-light" type="color" value="#7058be" />
  <label for="color-picker-light">Light theme</label>
  <br />
  <input id="color-picker-dark" type="color" value="#ab9df2" />
  <label for="color-picker-dark">Dark theme</label>
</div>
<!-- End -->
