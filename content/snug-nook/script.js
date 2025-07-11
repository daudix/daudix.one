document.addEventListener("DOMContentLoaded", async () => {
	const GUILD_ID = "1300606629083086878";
	const GUILD_NAME = "Snug Nook";

	let emojiMap = {};

	try {
		const emojiResponse = await fetch("emoji-map.json");
		emojiMap = await emojiResponse.json();
	} catch (error) {
		console.error("Error loading emoji map:", error);
	}

	async function fetchInviteCodeAndData() {
		const widgetUrl = `https://discord.com/api/guilds/${GUILD_ID}/widget.json`;

		try {
			const response = await fetch(widgetUrl);
			const widgetData = await response.json();

			const inviteUrl = widgetData.instant_invite;
			const inviteCode = widgetData.instant_invite.split("/").pop();

			if (!inviteUrl) {
				console.error("Invite code not found in widget data.");
				return;
			}

			await fetchInviteData(inviteUrl, inviteCode);

		} catch (error) {
			console.error("Error fetching widget data:", error);
		}
	}

	async function fetchInviteData(inviteUrl, inviteCode) {
		const url = `https://discord.com/api/invites/${inviteCode}?with_counts=true`;

		try {
			const response = await fetch(url);
			const data = await response.json();

			const traits = data.profile.traits.map(trait => {
				const emojiUnicode = emojiMap[trait.emoji_name] || trait.emoji_name;
				return `${emojiUnicode || ""} ${trait.label}`;
			}).join(", ");

			document.getElementById("guild-icon").src = `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.webp`;
			document.getElementById("guild-invite").href = inviteUrl;
			document.getElementById("guild-name").textContent = data.guild.name;
			document.getElementById("guild-description").textContent = data.guild.description;
			document.getElementById("guild-banner").style.setProperty('--banner', `url('https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.webp?size=16')`);
			document.getElementById("online-count").textContent = `${data.approximate_presence_count} Online`;
			document.getElementById("member-count").textContent = `${data.approximate_member_count} Members`;
			document.getElementById("guild-traits").innerHTML = traits.split(", ").map(trait => `<li>${trait}</li>`).join("");

			if (data.guild.name !== GUILD_NAME) {
				document.getElementById("guild-widget").classList.add("weekend");
			}
		} catch (error) {
			console.error("Error fetching invite data:", error);
		}
	}

	fetchInviteCodeAndData();
});
