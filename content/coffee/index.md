+++
title = "Buy Me a Coffee"
description = "Just in case you want to do so for some reason."
+++

<div id="coffee-container">
    <img id="coffee-avatar" class="no-hover" src="../assets/avatar.svg" />
    <img id="coffee-banner" class="transparent no-hover" src="../assets/banner.png" />
    <strong id="coffee-title">David Lapshin</strong>
    <p id="coffee-message">Hello there! If you'd like to buy me a coffee (thanks for that!), you can use one of these options; use whichever you prefer.</p>
    <small id="coffee-clarification">Yes, I spent way too much time on that skeuomorphic look.</small>
    <p class="dialog-buttons" id="coffee-buttons">
        <a id="ko-fi" class="inline-button" href="https://ko-fi.com/daudix">Ko-fi</a>
        <a id="liberapay" class="inline-button" href="https://liberapay.com/daudix">Liberapay</a>
        <a id="monero" class="inline-button" href="monero.txt">Monero</a>
    </p>
</div>

<style>
    body {
        background-image: url(light.svg), url(paper.jpg);
        background-size: cover, auto;
        background-repeat: no-repeat, repeat;
        background-blend-mode: light, normal;
    }

    footer * {
        color: rgb(88, 66, 35);
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
    }

    @media (prefers-color-scheme: dark) {
        body {
            background-image: url(light-d.svg), url(paper-d.jpg);
        }

        footer * {
            color: rgb(15, 11, 6);
            text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
        }
    }
</style>
