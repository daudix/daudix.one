+++
title = "Auto Contrast"
+++

Feature that I've been wanting to implement for a while; automatic contrast color picked from the accent color. I've tried adding it earlier but it didn't work for some reason, likely because I'm a moron, but in any case now I don't have to set the contrast color manually. I will backport this to Duckquill along with other changes later today (I hope so at least). Thanks [Lea Verou](https://lea.verou.me/blog/2024/contrast-color/) for this neat trick. One thing I changed about it is made it use slight transparency if the contrast color is black, so it doesn't look too ugly. The code is as follows:

```scss
--l: clamp(0, (l / 0.623 - 1) * -infinity, 1);
--a: calc(var(--l) + (var(--dim-opacity) * (1 - var(--l))));
--contrast-color: oklch(from var(--accent-color) var(--l) 0 h / var(--a));
```
