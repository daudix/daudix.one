+++
title = "Buy Me a Coffee"
description = "Just in case you want to do so for some reason."
+++

<div id="coffee-container">
    <img id="avatar" class="no-hover" src="../assets/avatar.svg" />
    <div id="banner-container">
        <p id="blobfox-message">Hewwo~ 0w0</p>
        <img id="blobfox" class="transparent no-hover" src="neofox-stretch-down.png" />
        <img id="banner" class="no-hover" src="../assets/banner.png" />
    </div>
    <strong id="title">David Lapshin</strong>
    <p id="message">Hello there! If you'd like to buy me a coffee (thanks for that!), you can use one of these options; use whichever you prefer.</p>
    <p class="dialog-buttons" id="buttons">
        <a id="ko-fi" class="inline-button" href="https://ko-fi.com/daudix">Ko-fi</a>
        <a id="liberapay" class="inline-button" href="https://liberapay.com/daudix">Liberapay</a>
        <a id="monero" class="inline-button" href="monero.txt">Monero</a>
    </p>
</div>

<style>
    body {
        background-image: url(glow.svg), url(fabric.jpg);
        background-size: cover, auto;
        background-repeat: no-repeat, repeat;
    }

    footer * {
        color: rgb(196, 196, 197);
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6);
    }

    @media (prefers-color-scheme: dark) {
        body {
            background-image: url(glow-d.svg), url(fabric-d.jpg);
        }

        footer * {
            color: rgb(122, 122, 122);
        }
    }
</style>
