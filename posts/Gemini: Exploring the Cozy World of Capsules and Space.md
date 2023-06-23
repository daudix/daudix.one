# Gemini: Exploring the Cozy World of Capsules and Space

This post is made to give you basic understanding of what Gemini is, what are Capsules and Gemlogs, modern-day use of retro image techniques and text-based art

> I highly recommend you to read geminiquickst.art before this post, because it provides a lot of valuable information about Gemini, and it is better written than this post

## What is Gemini

> For more accurate and in-depth answer to this question see [Project Gemini FAQ](https://gemini.circumlunar.space/docs/faq.gmi)

Gemini is how some people call it - "smol web" - web without distracting elements such as ads, stylesheets that define website look, various tracking scripts, cookies and etc.

Gemini has its own aesthetics, it feels cozy, is small, has its own community, and are easy to use

It's not made to replace or compete with web, but to co-exist with it, it's made for those who like old web philosophy, but would like to use modern tools

Project Gemini started in June 2019 by [Solderpunk](https://www.circumlunar.space/~solderpunk), who remains the "Benevolent Dictator" of the project

In February 2021, long time Gemini contributor Sean Conner was granted some decision making authority to help finalize the Gemini specification during a time when Solderpunk was unable to dedicate the necessary time and energy to the project

The current (informal) specification of the protocol is largely frozen, so no major changes will be made

Take a look at [awesome-gemini](https://github.com/kr1sp1n/awesome-gemini) for list of great Gemini-related projects

## Gemini Browsers

Gemini is a protocol that are not supported by regular web browsers, so you will need a separate browser for it, as Gemini protocol are much easier than web, there are a lot of browsers for it, some good ones are:

* [Lagrange](https://github.com/skyjake/lagrange) (Cross-platform) - Beautiful, fast and customizable Gemini browser
* [Geopard](https://github.com/ranfdev/Geopard) (Linux) - Colorful and adaptive Libadwaita Gemini browser written in Rust
* [Buran](https://github.com/Corewala/Buran) (Android) - Simple Gemini browser for Android
* [Elaho](https://github.com/pitr/gemini-ios) (iOS) - Simple Gemini browser for iOS
* [Amfora](https://github.com/makew0rld/amfora) (Terminal) - Fancy Gemini browser for terminal

Or, if you don't want to install a separate browser for Gemini or just want to quickly look over some capsule, you can use Gemini to web proxy, such as [portal.mozz.us](https://portal.mozz.us)

## Browsing Geminispace

You can start browsing Geminispace by looking over some capsules at various aggregators:

* [gemini.circumlunar.space/capcom](gemini://gemini.circumlunar.space/capcom)
* [rawtext.club:1965/~sloum/spacewalk.gmi](gemini://rawtext.club:1965/~sloum/spacewalk.gmi)
* [calcuode.com/gmisub-aggregate.gmi](gemini://calcuode.com/gmisub-aggregate.gmi)

Gemini also has its own search - [geminispace.info](gemini://geminispace.info)

I have found some interesting capsules you might like to look at:

* [chat.mozz.us](gemini://chat.mozz.us chat.mozz.us) - Unmoderated chat for everyone
* [station.martinrue.com](gemini://station.martinrue.com station.martinrue.com) - Gemini social media
* [cosmic.voyage](gemini://cosmic.voyage cosmic.voyage) - Tilde community based around a collaborative science-fiction universe
* [skyjake.fi](gemini://skyjake.fi skyjake.fi) - Lagrange developers capsule
* And more to be found ;)

## Creating Own Capsule

You can start by getting your own Gemini capsule (a website in Geminispace), there are multiple free capsule providers, one of them are [Flounder](gemini://flounder.online)

Flounder gives you own Capsule, where you can put files, posts, and it also provides web proxy, so your friends can enjoy your content from regular web browsers

There are, however, some limits:

* Max file size: 1MB
* Max user space: 10MB
* Max file count: 1024

The may seem strict at first, but they are more than enough for Gemini text

First of all you need to register an account, every account is manually approved, so you may need to wait, (in my case I had to wait 2 months, and then I decided to send an email to admin, he immediately approved my registration, huge thanks to him!)

After your registration have been approved, take a look at [Tips and tricks](gemini://admin.flounder.online/tips_and_tricks.gmi) and [Gemini text guide](gemini://admin.flounder.online/gemini_text_guide.gmi)

And you are ready to start writing!

## Writing Gemtext

Gemtext is a markup language a bit similar to Markdown, it has only most needed formatting

* Headers
* Hyperlinks
* Lists (such as this one)
* Quotes
* Raw unformatted text

You can learn Gemtext in 5 minutes, for start, take a look at:

* [Gemtext quick introduction](https://gemini.circumlunar.space/docs/gemtext.gmi)
* [Gemtext cheatsheet](https://gemini.circumlunar.space/docs/cheatsheet.gmi)

Gemini also supports Unicode, so you can do 🤣️, 🖂, 🗺 and etc.

If you are familiar with Markdown, there are Markdown to Gemtext converters, e.g [gemgen](https://sr.ht/~kota/gemgen)

(This post were written in Markdown, so I found out the hard way that gemtext doesn't support links in text, they need to be on separate line)

## Adding Images

Knowing about file size and overall available size restrictions of Flounder, you may have question: how I can include images!

There are 2 ways, first one is to use put image somewhere at web (Imgur and others) or to put the image directly in your capsule after compression, one of the ways to greatly compress an image is dithering

Dither is an intentionally applied form of noise used to randomize quantization error, preventing large-scale patterns such as color banding in images, basically, it allows to reduce the amount of colors in image while keeping somewhat readable image

For this you can use Halftone - A simple Linux app that allows you to dither your image in seconds, or you can use Terminal tools such as Pixfect (by me :P), ImageMagick and others. You can also use amazing website for image dithering with some really interesting options - Dither Me This

* [Halftone](https://github.com/tfuxu/Halftone)
* [Pixfect](https://github.com/daudix-UFO/Pixfect)
* [Dither Me This](https://doodad.dev/dither-me-this)

Example of simple ordered image dithering with 2 colors using ImageMagick

$ convert image.jpg -resize 840x840 -strip -colors 4 -ordered-dither o8x8 image-dithered.png [1]

I will use Halftone in this example

* Open Halftone and open image
* Tweak settings at your liking, I will go with default, except I will change width to 512
* Press "Dither It!"

This is what we get in the end

![](../assets/blog/2023-06-12-bay-bridge-floyd.png)

[Image on Unsplash](https://unsplash.com/photos/raNGlrn5JRI)

Not bad, right? and what's with the file size? let's see!

>bay-bridge.jpg > 521,9 KB
>halftone-bay-bridge.png > 26,2 KB

The decrease is 94.9799%, quite a lot considering limited storage

Now you can fit 357 photos, while without compression you could only fit 19

But, we can go even further, by using less colors and different dithering algorithm

With ordered dithering (Bayer)  and 2 colors we get the following result

![](../assets/blog/2023-06-12-bay-bridge-bayer.png)

[Image on Unsplash](https://unsplash.com/photos/raNGlrn5JRI)

>bay-bridge.jpg > 521,9 KB
>halftone-bay-bridge-2.png > 4,9 KB

99.0611% decrease

The image is notably worse, but it has its own aesthetics, and size speaks for itself

Taking into account ability to link images from web, images are not such a big issue in Geminispace

## ASCII

ASCII art is a good way to give your Gemlog (this is how blogs hosted at Gemini are called) more personality and make them more fun

ASCII art is with us from around 1966, and was invented in large part because early printers often lacked graphics ability and thus, characters were used in place of graphic marks that couldn't display normal images, ASCII art was also used in early e-mail when images could not be embedded [2]

ASCII art is used to-date, sometimes as a braille art (you likely seen one of these), as image converted to ASCII, as text banners or as emoticons :‑) [3]

Image to ASCII is very common, and you can easily make one yourself!

Good tools for image to ASCII are:

* [ascii-image-converter](https://github.com/TheZoraiz/ascii-image-converter) - Modern, fast, has some useful options to fine-tune the image
* [jp2a](https://github.com/Talinx/jp2a) - Good, time-tested tool
* [Letterpress](https://gitlab.com/gregorni/Letterpress) - Based on the jp2a, has good UI made with Libadwaita

ascii-image-converter in my experience, works the best

Here are simple example of ASCII and Braille images made with ascii-image-converter

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@%%%%%%%%%%%%%%%%%%%%%
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%@@
@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@%+@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@**@@@@@@@@@@@@@@@@@@@#@@@@%###%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+@@@@%%%#@@@@@@@@@@@@@@@@
@@@@@@@%=%@@@@@@@@@@@@@@@@@@%*@%+-:::-------=###%%%%%@@@@@@@@@@@@@@@@@@@%#=#@@@#++--%%@#*+#@@@@@@@@@
@@@@@@@*+@@@@@@@@@@@@@@@@@@@##%==------------:::::::::-----==========++*%%*@@@#-=::#%%%+=:-+*=**=@@#
@@@@@@@=#@#+====+++++#%%%%%%##=-==+=:------=-:------:::::::::..........=###@@@@+:-+#%@#+*=#**=+-=*+=
@@@@@@#+@=--::::--:::-+++==%#-:==+*=-+++=--=:----------=====-------::::.:+*@@#*=+++#*%=*=*%##*%+#@*#
#***=+@@%.=----------+++*=*%+:==+++%%*+*#*+--===------==============++==---==-=-+==*+==+-*##+**=@%#%
*-:::*@@=-----------=*++==++ :+---:-++++**=--==++++===--------===+**%%=-========---------=+++*++%%%@
@@*=:*=+.::....:::::-++++=*-.--::...:---::.  ...::----==--------===#@#==----============--------===+
@@@@@++*   .........:-----+--:..:........:. ..      ...::::::::::=+++=-=---=-----------====-==------
#%##%+*#.    .. .  .::-:::=--.......................:::::::::::::::::::::::------------------------=
++-----+:          .:--=--=--    ........................::..:::::::::::::::::::::..:::::----------=
:..:-=.:--:..     ..:+####++-.         ..     .   .......          .......::::-----==++===-:::::::--
=--------+*+=-:-=-==--::-===-::.....         ..::---::::::---:::----==++******++++++++****##**+=-::.
==-:.:::..:--===-::-=:..:=:..+--:-::::::...   .-------=###%%#=+####*+++==--:::.    .......::--=++++=
.::.::--:-=:.------=:--:=+:-+*:--:::::-:....     .::-:+*++==+=++=-:.....:.:..::::::::........ ....:-
..  :..::....::.:--==:. -:..:.::: .-.::::-..::. .     :=-:.:---::.:::::::::......::::::::::::-.:::::
=------=-::=-:---=+-..--:-++=. :::--::-======+=-:::::--+..-=-::::........ ..............:::.::--::::
#######%%#%#%##%%%%: =+..#%#%* -%%#################*=:=-:+*++=##**+=--:......... .............::::::
**************+****=..-. :++=: -+++++++++++++++***+:::++**++==+*####*****+==-:::....................
++++++++++++++++++++*++++======+================-:  .=##***+++=++++++++++********+++=-==--==---::---
**##****##*####**###*#**######*###*#####**####+: .:::=*#**+==#*******************#**######*######*##
**********#*******************************#***: .=-::-:::--. :************************+******+******
++++++++++++++++++++++++++++++++++++*++++****+. :-..*::=-:+=  =**************++**+****++******+***+*
+*++*+*+++++*+++++++++++++++++++++++++++++++++-  .  -=-+=++:  ++++++++++++++++++++++++++++++++++*+++
**+++*+*++++++++++++++++++++++++=++++=+=====+==---:  --=-=. .----:::::::::::::::::::---------=======
*++*+**++***+++****++*+++++++++++++++++++++++++++++=========+=====-====--==-==---------:------------
*+++++++++++**+*+*******+***+*************************************************************++**++++++
```

```
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣛⣁⣾⣿⣿⣿⣿⣶⣶⠅⠸⢿⣿⣿⣟⣹⠋⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣟⢳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠛⠛⠉⠉⠉⠉⠉⠉⠛⠛⠛⣵⣿⣿⣿⣿⣿⣿⣧⠭⡡⠁⠀⣶⣶⣶⣿⢭⣍⠀⠙⠲⠿⠧⣿⡿⢘⣿⣿⣟
⣿⣿⣿⣿⣿⣿⣿⡏⣾⣿⣿⠋⠉⠉⠉⠙⠛⠛⠉⠉⠍⢿⣿⣿⡿⢿⡿⣿⣿⣿⠇⡘⠀⢀⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⡇⠀⢀⣨⣟⢿⣿⡟⣸⡿⢠⣿⣿⣶⣤⣤⡄⣈⣙⠋⠹
⣿⣿⣿⣿⣿⣿⣿⢣⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣛⣷⠒⢆⣿⡿⠜⠀⡇⢠⣾⣛⠁⢀⣤⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠻⣿⣿⣿⣯⡑⢰⡻⢸⣿⣷⡿⠁⣿⠇⣾⣿⣿⣿⢿⣿⣷⣿⣿⣿⣿
⡿⣿⣽⡶⠤⢸⣿⣿⡿⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⠻⠟⠣⣼⣿⡿⢠⣰⠀⠹⢇⠹⢿⣿⣯⣗⣟⣿⣦⣤⡀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢠⣀⠀⠀⠀⠀⠈⠉⠁⠘⠀⠠⠶⠇⠈⠿⠹⠃⢤⡏⠀⣼⣿⣿⣇⣾⡟⠛⣿⣿⣿⣿
⣧⡀⠀⠀⠀⣸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣶⠊⠋⢉⡇⠀⠀⡍⠀⠀⠀⠀⠈⢿⣌⣋⣹⡿⠛⠉⠀⠀⠀⠙⠻⠿⣷⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⠛⠿⠃⣶⣿⣿⣿⣿
⣿⣿⣦⣄⡀⣿⡏⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⠿⠿⠿⠿⢾⡇⠀⠀⠃⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠓⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⢿⣿⣿⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠃⠉⠛
⣿⣿⣿⣿⣿⡇⢰⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡶⠛⠋⠁⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⢿⣿⣿⡇⢼⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⡽⢗⠀⠀⠀⡇⠨⠷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⡄⢰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤
⠀⠀⠀⠀⢀⡇⠀⠀⠀⣀⣀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣩⣿⣿⣷⣭⡇⣘⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢂⠄⠀⡀⠀⠃⠉⠀⠀⠻⢿⣧⠄⣀⠀⢐⠶⠂⠾⠷⠂⠀⠀⠀⠉⠙⠑⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠠⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⢀⣀⣀⣀⣀⣠⣤⣤⣤⣶⣶⣶⣶⠶⠿⠿⠛⠛⠛⠛⠛⠛⠛⠛⠻⠿⠿⢿⣿⣷⣶⣤⣄⣀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠈⢬⠙⠃⠀⠀⠀⢀⠏⠀⠀⠀⠀⣶⠀⠀⠀⣴⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⣠⣶⣾⣿⣿⣿⣿⠋⢵⡿⠿⣿⣟⠛⠛⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⠿⠶⣦
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠐⢀⠀⠠⠚⠀⠀⠀⠀⢠⠇⠀⠀⣠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠀⢻⡻⠛⠛⠛⠉⣩⠴⠞⠿⠍⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣩⠖⠋⠉⠀⠨⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⣆⠀⠀⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢑⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀
⣀⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣀⣄⣠⣤⠀⠀⢀⡴⠂⠀⢀⣴⣶⣤⡀⠀⢀⣀⣀⠀⡀⠀⠀⢀⡐⢄⣀⢀⣀⢀⣉⣳⡀⠀⠀⠀⠀⠀⡠⠃⡜⠀⠀⣠⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠒⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⡄⠀⠀⣿⣿⣿⣿⣷⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⢰⠇⢠⣾⣿⣿⠁⠀⣾⣿⣷⣶⣦⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡿⠿⠿⡿⠿⢿⠿⢧⠀⠀⠉⠀⠀⠘⠛⠿⠟⠁⠀⠸⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⠟⠁⠀⠀⣍⣴⣿⣿⣿⣿⡂⢬⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣤⣤⡀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣥⣾⣾⣶⣶⣾⣿⣾⣿⣿⣷⣾⣶⣶⣦⣴⣶⣶⣶⣦⣴⣦⣤⣤⣤⣤⣤⣤⣤⣤⣤⣦⣤⣤⣄⡤⠂⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣧⣶⣖⣿⣟⣾⣿⣷⣿⣿⣻⢿⣾⣿⣿⣿⣾⣶⣿⣿⣿⣿⣷⣶⣤⢠⣤⣤⣤⣤⣤⣤⣤⣀⣀⣀⣀⣀⣀⣀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢀⡀⠀⠈⠙⢿⣿⣿⣿⠿⠿⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢀⠏⠀⠀⢀⠖⡉⠉⠁⡐⢄⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣯⣿⣾⣿⣿⣿⣿⣿⣯⣿⣿⣿⣷⢿⢿⡽⣿⡿⣿⡿⣿⡿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠘⠀⠀⠀⡏⠀⠀⣤⠄⠤⢼⡇⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⡿⣿⣿⣽⣿⣫⣽⣻⣿⣿⣿⣿⣿⢽⣿⣻⣿⣹⣾⣿⣿⣿⣾⣯⣿⣿⣳⣾⢿⣶⣿⣭⣿⡄⠀⠀⠀⠀⠀⠱⣠⠎⢰⠘⣦⡼⠁⠀⠀⣼⣿⣟⡛⠻⠻⠛⠻⢛⠛⣏⠟⣽⠚⠿⠿⡛⠫⠻⠿⠛⡹⢇⡹⠻⠛⠟⠟⠟⠿⠻⡿⡿⡿⣿⣟⣿⡿
⣿⣿⣿⣾⣿⣿⣿⣿⣿⣻⣻⣿⣿⣿⣿⣿⣿⣿⣿⣙⣿⣽⣿⣿⣭⣻⣜⣿⣿⣿⣟⣻⢋⣉⣛⣳⣽⠊⣛⠃⡆⠥⠊⠠⣩⣈⡁⠀⠀⢀⡀⠀⠀⠈⠓⠛⠚⠋⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠉⠑⠛⠙⠉⠛⠑
⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣾⣿⣾⣿⣿⣿⣿⣿⣯⣼⣴⣿⣿⣷⣯⣾⣵⣶⣿⣿⣦⣼⣷⣮⡶⣶⣴⣶⣦⢶⣤⣶⢂⣤⡤⣤⣠⣦⣄⡄⢀⣔⣠⠀⣠⡄⢠⣄⣄⠀⢠⣀⢀⢀⡀⠀⡀⠀⠀⡀⠀⠀⢀⢄⠀⠀⠀⠀⠀⠀⠀⠀⠤⠀
⣿⣿⡻⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣾⣷⣶⣧⣶⣷⣶⣶⣶⣾⣶⣦
```

But, do you think it has quality of this image?

![](../assets/blog/2023-06-12-grayscale-plane.png)

[Image on Unsplash](https://unsplash.com/photos/cs4uFYrNZfc)

Me too...

The result heavily depends on amount of detail, colors, contrast, the width of ASCII output and etc. you can get pretty decent result, but for images it probably worth just to use dithering ;)

But... ASCII works nicely for art and text banners, like this computer!

```
                       .,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
         !.......:!?|||||!!^^""'            ||||
         !.........||||                     ||||
         !.........||||  ##                 ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         `.........||||                    ,||||
          .;.......||||               _.-!!|||||
   .,uodWBBBBb.....||||       _.-!!|||||||||!:'
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   `.
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     `.
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::       `.
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
  `..........:::::::::::::::::::::::;iof688888888888b.     `YBBBP^'
    `........::::::::::::::::;iof688888888888888888888b.     `
      `......:::::::::;iof688888888888888888888888888888b.
        `....:::;iof688888888888888888888888888888888899fT!
          `..::!8888888888888888888888888888888899fT|!^"'
            `' !!988888888888888888888888899fT|!^"'
                `!!8888888888888888899fT|!^"'
                  `!988888888899fT|!^"'
                    `!9899fT|!^"'
                      `!^"'
```

Or this fancy banner!

```
 ██████╗ ███████╗███╗   ███╗██╗███╗   ██╗██╗
██╔════╝ ██╔════╝████╗ ████║██║████╗  ██║██║
██║  ███╗█████╗  ██╔████╔██║██║██╔██╗ ██║██║
██║   ██║██╔══╝  ██║╚██╔╝██║██║██║╚██╗██║██║
╚██████╔╝███████╗██║ ╚═╝ ██║██║██║ ╚████║██║
 ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝
                                            
```

The ASCII art can be found online in huge amounts, I will give you some good websites for start

* [www.asciiart.eu](https://www.asciiart.eu) - ASCII art archive
* [ascii.co.uk/art](https://ascii.co.uk/art) - A LOT of various ASCII art
* [asciiart.website](https://asciiart.website) - Christopher Johnson's ASCII art collection

As for banners, they can be easily created with figlet or toilet, you can easily find installation instructions online, I also recommend to install additional beautiful and sometimes funny fonts from [figlet-fonts](https://github.com/xero/figlet-fonts), which basically consists of few commands

$ git clone https://github.com/xero/figlet-fonts.git

$ cd figlet-fonts/

$ sudo cp -r ./ /usr/share/figlet/

And then you can create your own banner!

$ figlet -f ANSI\ Shadow "gemini"

To easily find the perfect font, you can look at [font preview](https://github.com/xero/figlet-fonts/blob/master/Examples.md)

There are also amazing graphical app for this - [Calligraphy](https://gitlab.com/gregorni/Calligraphy), made specifically for creating ASCII banners!

## Conclusion

Gemini is cozy corner for those who tired of railway noise of the web, it has its own limitations and strengths, and of course, community, in this post we have briefly touched additional topics: dithering and ASCII art

There are more things I want to tell you about, I want to write more in-depth post about Dithering, Halftone and tech limitations that forced us to implement such things

## Footnotes

1. [Tobias Bernard's Mastodon post about dithering](https://mastodon.social/@tbernard/109675668676999287)
2. [ASCII art at Wikipedia](https://en.wikipedia.org/wiki/ASCII_art)
3. [List of emoticons at Wikipedia](https://en.wikipedia.org/wiki/List_of_emoticons)

## Extra

* [andregarzia.com/2022/01/gemini-is-a-little-gem.html](https://andregarzia.com/2022/01/gemini-is-a-little-gem.html)
* [voidspace.blog/ramble/capsule-importance.gmi](gemini://voidspace.blog/ramble/capsule-importance.gmi)

[Go Back](<javascript:window.history.go(-1);>){: .inline-button}