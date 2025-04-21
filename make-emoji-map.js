// node make-emoji-map.js

const https = require("https");
const fs = require("fs");

https.get("https://emzi0767.mzgit.io/discord-emoji/discordEmojiMap.json", (res) => {
	let data = "";
	res.on("data", (chunk) => (data += chunk));
	res.on("end", () => {
		const json = JSON.parse(data);
		const emojiMap = {};

		for (const def of json.emojiDefinitions) {
			emojiMap[def.primaryName] = def.surrogates;
		}

		fs.writeFileSync("emoji-map.json", JSON.stringify(emojiMap, null, 2));
		console.log("Saved emoji-map.json with", Object.keys(emojiMap).length, "entries");
	});
});
