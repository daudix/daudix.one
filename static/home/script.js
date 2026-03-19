/* Splash ================================================================== */

function initSplash() {
  const splash = document.getElementById("splash");
  const skip = document.getElementById("skip-splash");
  const STORAGE_KEY = "skipSplash";

  const skipped = localStorage.getItem(STORAGE_KEY) === "true";

  if (location.hash === "#splash" || !skipped) {
    splash.removeAttribute("hidden");
    if (location.hash === "#splash") splash.querySelector(".content")?.focus();
  } else {
    splash.setAttribute("hidden", "");
  }

  skip?.addEventListener("change", () => {
    localStorage.setItem(STORAGE_KEY, skip.checked);
  });

  window.addEventListener("hashchange", () => {
    if (location.hash === "#splash") {
      splash.removeAttribute("hidden");
      splash.querySelector(".content")?.focus();
    }
  });
}

/* Last.fm ================================================================== */

const LASTFM_USER = "daudix";
const LASTFM_API_KEY = "1747901e170276677d1d0447cf6519b0";

let lastTrackID = null;

async function fetchLastFm() {
  const player = document.getElementsByClassName("item player")[0];
  const cover = document.getElementById("cover");
  const coverLarge = document.getElementById("cover-large");
  const title = document.getElementById("player-title");
  const artist = document.getElementById("player-artist");
  const link = document.getElementById("player-go");

  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=1`,
    );
    const data = await res.json();
    const track = data.recenttracks?.track?.[0];
    if (!track) return;

    const trackID = track.mbid || track.url;
    const isPlaying = track["@attr"]?.nowplaying === "true";

    if (
      trackID === lastTrackID &&
      isPlaying === player.classList.contains("playing")
    )
      return;
    lastTrackID = trackID;

    title.textContent = track.name;
    artist.textContent = track.artist["#text"];
    link.href = track.url;

    const getImg = (size) =>
      track.image.find((img) => img.size === size)?.["#text"];
    const large = getImg("large");
    const medium = getImg("medium");
    const small = getImg("small");
    const fallback = "home/image-missing.svg";
    const hasRealCover = Boolean(medium) && medium !== fallback;

    cover.src = medium || fallback;
    coverLarge.srcset = large || "";

    player.classList.toggle("playing", isPlaying);
    player.classList.toggle("has-cover", hasRealCover);

    if (hasRealCover && small) {
      player.style.setProperty("--blurnail", `url("${small}")`);
    } else {
      player.style.removeProperty("--blurnail");
    }

    updateMarquees();
  } catch (e) {
    console.error("Failed to fetch now playing track:", e);
  }
}

/* status.cafe ============================================================== */

async function fetchStatusCafe() {
  const content = document.getElementById("statuscafe-content");
  const face = document.getElementById("statuscafe-face");
  const timeAgo = document.getElementById("statuscafe-time-ago");

  try {
    const res = await fetch("https://status.cafe/users/daudix/status.json");
    const r = await res.json();

    if (!r.content.length) {
      content.innerHTML = "No status yet.";
      return;
    }

    content.innerHTML = r.content;
    face.innerHTML = r.face;
    timeAgo.innerHTML = r.timeAgo;
  } catch (e) {
    console.error("Error fetching status:", e);
  }
}

/* Discord ================================================================== */

let lastDiscordStatus = "";

async function fetchDiscordStatus() {
  const indicator = document.getElementById("online-indicator");
  const indicatorText = document.getElementById("online-indicator-text");

  const labels = {
    online: "Online",
    idle: "Idle",
    dnd: "DND",
    offline: "Offline",
  };

  try {
    const res = await fetch(
      "https://api.lanyard.rest/v1/users/650757995378114581",
    );
    const data = await res.json();
    const status = data.data.discord_status;

    if (status === lastDiscordStatus) return;
    lastDiscordStatus = status;

    indicator.classList.remove("online", "idle", "dnd", "offline");
    indicator.classList.add(status);
    indicatorText.innerHTML = labels[status] ?? "N/A";
  } catch (e) {
    console.error("Error fetching Lanyard data:", e);
    indicatorText.innerHTML = "N/A";
  }
}

/* Clock ==================================================================== */

let lastTime = "";

function updateClock() {
  const clock = document.getElementById("clock");
  const time = new Date().toLocaleString("en-IE", {
    timeZone: "Europe/Moscow",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  if (time !== lastTime) {
    clock.textContent = time;
    lastTime = time;
  }
}

/* Flutter ================================================================== */

function initFlutter() {
  const flutter = document.getElementById("flutter");
  const shy = document.getElementById("shy");
  const squee = new Audio("/home/squee.mp3");

  shy.addEventListener("click", () => {
    shy.setAttribute("disabled", "true");
    squee.play();
    flutter.classList.add("active");
    flutter.addEventListener(
      "animationend",
      () => {
        shy.removeAttribute("disabled");
        flutter.classList.remove("active");
      },
      { once: true },
    );
  });
}

/* Beeper =================================================================== */

const WEBHOOK = "https://webhook.daudix.one/hooks/beep";
const POLL_MS = 3000;
const BEEP_FREQ = 440;
const BEEP_DUR = 0.2;

let audioCtx = null;
let hasInteracted = false;
let waitingFromIdx = -1;
let prevLineCount = 0;
let lastModified = null;
let lastDisplayHTML = null;
let countdownInterval = null;
let rateLimitEnd = null;
let rateLimitTotal = 0;

function logUrl() {
  const d = new Date();
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `https://daudix.one/beeper/${y}-${m}-${day}.log`;
}

function ensureAudio() {
  if (!audioCtx)
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playBeep() {
  const osc = audioCtx.createOscillator();
  osc.type = "square";
  osc.frequency.setValueAtTime(BEEP_FREQ, audioCtx.currentTime);
  osc.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + BEEP_DUR);
}

function setDisplay(display, html) {
  if (display && html !== lastDisplayHTML) {
    display.innerHTML = html;
    lastDisplayHTML = html;
  }
}

function tickCountdown() {
  const el = document.getElementById("beeper-countdown");
  if (!el) return;

  const remaining = rateLimitEnd - Date.now();

  if (remaining <= 0) {
    clearInterval(countdownInterval);
    countdownInterval = null;
    el.style.setProperty("--angle", "0deg");
    el.hidden = true;
    return;
  }

  const angle = ((rateLimitTotal - remaining) / rateLimitTotal) * 360;
  el.style.setProperty("--angle", `${angle.toFixed(1)}deg`);
}

function startCountdown(h, m, s, durationSecs) {
  const el = document.getElementById("beeper-countdown");
  if (!el) return;

  const now = new Date();
  const end = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      h,
      m,
      s + durationSecs,
    ),
  );

  // Don't restart if it's the same rate limit event
  if (rateLimitEnd && end.getTime() === rateLimitEnd.getTime()) return;

  rateLimitEnd = end;
  rateLimitTotal = durationSecs * 1000;
  el.hidden = false;

  clearInterval(countdownInterval);
  countdownInterval = setInterval(tickCountdown, 100);
  tickCountdown();
}

function stopCountdown() {
  const el = document.getElementById("beeper-countdown");
  clearInterval(countdownInterval);
  countdownInterval = null;
  rateLimitEnd = null;
  if (el) {
    el.style.setProperty("--angle", "0deg");
    el.hidden = true;
  }
}

async function poll() {
  const btn = document.getElementById("send-beep");
  const display = document.querySelector(".beeper-display");
  let lines;

  try {
    const headers = lastModified ? { "If-Modified-Since": lastModified } : {};
    const res = await fetch(logUrl(), { headers });

    if (res.status === 304) return;

    if (res.status === 404) {
      setDisplay(display, "No beeps yet today\nBe the first!");
      prevLineCount = 0;
      lastModified = null;
      waitingFromIdx = -1;
      stopCountdown();
      if (btn) {
        btn.disabled = false;
        btn.classList.remove("progress");
      }
      return;
    }

    if (!res.ok) throw new Error();

    lastModified = res.headers.get("Last-Modified") || lastModified;
    const raw = (await res.text()).trim();
    lines = raw ? raw.split("\n").filter((l) => l.trim()) : [];
  } catch {
    return;
  }

  if (lines.length < prevLineCount) {
    prevLineCount = 0;
    lastModified = null;
    waitingFromIdx = -1;
    stopCountdown();
    if (btn) {
      btn.disabled = false;
      btn.classList.remove("progress");
    }
    setDisplay(display, "New day, no beeps yet\nBe the first!");
    return;
  }

  const last2 = lines.slice(-2);
  setDisplay(display, last2.length ? last2.join("<br>") : "&nbsp;");

  let rateLimited = false;
  let sawReset = false;

  for (let i = lines.length - 1; i >= 0; i--) {
    if (/rate limit reset/i.test(lines[i])) {
      sawReset = true;
      break;
    }

    const rl = lines[i].match(/^(\d{2}):(\d{2}):(\d{2}):\s*(\d+)s rate limit/i);
    if (rl) {
      rateLimited = true;
      startCountdown(
        parseInt(rl[1]),
        parseInt(rl[2]),
        parseInt(rl[3]),
        parseInt(rl[4]),
      );
      break;
    }
  }

  if (sawReset) {
    waitingFromIdx = -1;
    stopCountdown();
  }
  if (!rateLimited && !sawReset) stopCountdown();

  if (btn) {
    if (rateLimited) {
      btn.disabled = true;
      btn.classList.remove("progress");
      waitingFromIdx = -1;
    } else if (waitingFromIdx >= 0) {
      if (lines.slice(waitingFromIdx).some((l) => /beep played/i.test(l))) {
        waitingFromIdx = -1;
        btn.classList.remove("progress");
        btn.disabled = false;
      }
    } else {
      btn.disabled = false;
    }
  }

  if (hasInteracted && lines.length > prevLineCount) {
    for (const line of lines.slice(prevLineCount)) {
      if (/beep played/i.test(line)) playBeep();
    }
  }

  prevLineCount = lines.length;
}

function initBeeper() {
  const btn = document.getElementById("send-beep");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    if (btn.disabled) return;

    hasInteracted = true;
    ensureAudio();

    btn.disabled = true;
    btn.classList.add("progress");
    waitingFromIdx = prevLineCount;

    try {
      await fetch(WEBHOOK);
    } catch {}

    setTimeout(poll, 1000);
  });

  poll();
  setInterval(poll, POLL_MS);
}

/* Init ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initSplash();
  initFlutter();
  initBeeper();

  fetchStatusCafe();
  fetchLastFm();
  fetchDiscordStatus();
  updateClock();

  setInterval(fetchLastFm, 10000);
  setInterval(fetchDiscordStatus, 10000);
  setInterval(updateClock, 1000);
});
