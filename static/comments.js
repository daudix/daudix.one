// Taken from https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/
// Attachment, card, and spoiler code taken from https://github.com/cassidyjames/cassidyjames.github.io/blob/99782788a7e3ba3cc52d6803010873abd1b02b9e/_includes/comments.html#L251-L296

let blogPostAuthorText = document.getElementById("blog-post-author-text").textContent;
let boostsFromText = document.getElementById("boosts-from-text").textContent;
let dateLocale = document.getElementById("date-locale").textContent;
let favesFromText = document.getElementById("faves-from-text").textContent;
let host = document.getElementById("host").textContent;
let id = document.getElementById("id").textContent;
let lazyAsyncImage = document.getElementById("lazy-async-image").textContent;
let loadingText = document.getElementById("loading-text").textContent;
let noCommentsText = document.getElementById("no-comments-text").textContent;
let relAttributes = document.getElementById("rel-attributes").textContent;
let reloadText = document.getElementById("reload-text").textContent;
let sensitiveText = document.getElementById("sensitive-text").textContent;
let user = document.getElementById("user").textContent;
let viewCommentText = document.getElementById("view-comment-text").textContent;
let viewProfileText = document.getElementById("view-profile-text").textContent;

document.getElementById("load-comments").addEventListener("click", loadComments);

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}
function emojify(input, emojis) {
	let output = input;

	emojis.forEach((emoji) => {
		let picture = document.createElement("picture");

		let source = document.createElement("source");
		source.setAttribute("srcset", escapeHtml(emoji.url));
		source.setAttribute("media", "(prefers-reduced-motion: no-preference)");

		let img = document.createElement("img");
		img.className = "emoji";
		img.setAttribute("src", escapeHtml(emoji.static_url));
		img.setAttribute("alt", `:${emoji.shortcode}:`);
		img.setAttribute("title", `:${emoji.shortcode}:`);
		if (lazyAsyncImage == "true") {
			img.setAttribute("decoding", "async");
			img.setAttribute("loading", "lazy");
		}

		picture.appendChild(source);
		picture.appendChild(img);

		output = output.replace(`:${emoji.shortcode}:`, picture.outerHTML);
	});

	return output;
}

function loadComments() {
	let commentsWrapper = document.getElementById("comments-wrapper");
	commentsWrapper.innerHTML = "";

	let loadCommentsButton = document.getElementById("load-comments");
	loadCommentsButton.innerHTML = loadingText;
	loadCommentsButton.disabled = true;

	fetch(`https://${host}/api/v1/statuses/${id}/context`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			let descendants = data["descendants"];
			if (
				descendants &&
				Array.isArray(descendants) &&
				descendants.length > 0
			) {
				commentsWrapper.innerHTML = "";

				descendants.forEach(function (status) {
					console.log(descendants);
					if (status.account.display_name.length > 0) {
						status.account.display_name = escapeHtml(
							status.account.display_name
						);
						status.account.display_name = emojify(
							status.account.display_name,
							status.account.emojis
						);
					} else {
						status.account.display_name = status.account.username;
					}

					let instance = "";
					if (status.account.acct.includes("@")) {
						instance = status.account.acct.split("@")[1];
					} else {
						instance = host;
					}

					const isReply = status.in_reply_to_id !== id;

					let op = false;
					if (status.account.acct == user) {
						op = true;
					}

					status.content = emojify(status.content, status.emojis);

					let comment = document.createElement("article");
					comment.id = `comment-${status.id}`;
					comment.className = isReply ? "comment comment-reply" : "comment";
					comment.setAttribute("itemprop", "comment");
					comment.setAttribute("itemtype", "http://schema.org/Comment");

					let avatarSource = document.createElement("source");
					avatarSource.setAttribute(
						"srcset",
						escapeHtml(status.account.avatar)
					);
					avatarSource.setAttribute(
						"media",
						"(prefers-reduced-motion: no-preference)"
					);

					let avatarImg = document.createElement("img");
					avatarImg.className = "avatar";
					avatarImg.setAttribute(
						"src",
						escapeHtml(status.account.avatar_static)
					);
					avatarImg.setAttribute(
						"alt",
						`@${status.account.username}@${instance} avatar`
					);
					if (lazyAsyncImage == "true") {
						avatarImg.setAttribute("decoding", "async");
						avatarImg.setAttribute("loading", "lazy");
					}

					let avatarPicture = document.createElement("picture");
					avatarPicture.appendChild(avatarSource);
					avatarPicture.appendChild(avatarImg);

					let avatar = document.createElement("a");
					avatar.className = "avatar-link";
					avatar.setAttribute("href", status.account.url);
					avatar.setAttribute("rel", relAttributes);
					avatar.setAttribute(
						"title",
						`${viewProfileText} @${status.account.username}@${instance}`
					);
					avatar.appendChild(avatarPicture);
					comment.appendChild(avatar);

					let instanceBadge = document.createElement("a");
					instanceBadge.className = "instance";
					instanceBadge.setAttribute("href", status.account.url);
					instanceBadge.setAttribute(
						"title",
						`@${status.account.username}@${instance}`
					);
					instanceBadge.setAttribute("rel", relAttributes);
					instanceBadge.textContent = instance;

					let display = document.createElement("span");
					display.className = "display";
					display.setAttribute("itemprop", "author");
					display.setAttribute("itemtype", "http://schema.org/Person");
					display.innerHTML = status.account.display_name;

					let header = document.createElement("header");
					header.className = "author";
					header.appendChild(display);
					header.appendChild(instanceBadge);
					comment.appendChild(header);

					let permalink = document.createElement("a");
					permalink.setAttribute("href", status.url);
					permalink.setAttribute("itemprop", "url");
					permalink.setAttribute("title", `${viewCommentText} ${instance}`);
					permalink.setAttribute("rel", relAttributes);
					permalink.textContent = new Date(
						status.created_at
					).toLocaleString(dateLocale, {
						dateStyle: "long",
						timeStyle: "short",
					});

					let timestamp = document.createElement("time");
					timestamp.setAttribute("datetime", status.created_at);
					timestamp.appendChild(permalink);
					permalink.classList.add("external");
					comment.appendChild(timestamp);

					let main = document.createElement("main");
					main.setAttribute("itemprop", "text");

					if (status.sensitive == true || status.spoiler_text != "") {
						let summary = document.createElement("summary");
						if (status.spoiler_text == "") {
							status.spoiler_text == sensitiveText;
						}
						summary.innerHTML = status.spoiler_text;

						let spoiler = document.createElement("details");
						spoiler.appendChild(summary);
						spoiler.innerHTML += status.content;

						main.appendChild(spoiler);
					} else {
						main.innerHTML = status.content;
					}
					comment.appendChild(main);

					let attachments = status.media_attachments;
					let SUPPORTED_MEDIA = ["image", "video", "gifv", "audio"];
					let media = document.createElement("div");
					media.className = "attachments";
					if (
						attachments &&
						Array.isArray(attachments) &&
						attachments.length > 0
					) {
						attachments.forEach((attachment) => {
							if (SUPPORTED_MEDIA.includes(attachment.type)) {

								let mediaElement;
								switch (attachment.type) {
									case "image":
										mediaElement = document.createElement("img");
										mediaElement.setAttribute("src", attachment.preview_url);

										if (attachment.description != null) {
											mediaElement.setAttribute("alt", attachment.description);
											mediaElement.setAttribute("title", attachment.description);
										}

										if (lazyAsyncImage == "true") {
											mediaElement.setAttribute("decoding", "async");
											mediaElement.setAttribute("loading", "lazy");
										}

										if (status.sensitive == true) {
											mediaElement.classList.add("spoiler");
										}

										media.appendChild(mediaElement);
										break;

									case "video":
										mediaElement = document.createElement("video");
										mediaElement.setAttribute("src", attachment.url);
										mediaElement.setAttribute("controls", "");

										if (attachment.description != null) {
											mediaElement.setAttribute("aria-title", attachment.description);
											mediaElement.setAttribute("title", attachment.description);
										}

										if (status.sensitive == true) {
											mediaElement.classList.add("spoiler");
										}

										media.appendChild(mediaElement);
										break;

									case "gifv":
										mediaElement = document.createElement("video");
										mediaElement.setAttribute("src", attachment.url);
										mediaElement.setAttribute("autoplay", "");
										mediaElement.setAttribute("playsinline", "");
										mediaElement.setAttribute("loop", "");

										if (attachment.description != null) {
											mediaElement.setAttribute("aria-title", attachment.description);
											mediaElement.setAttribute("title", attachment.description);
										}

										if (status.sensitive == true) {
											mediaElement.classList.add("spoiler");
										}

										media.appendChild(mediaElement);
										break;

									case "audio":
										mediaElement = document.createElement("audio");
										mediaElement.setAttribute("src", attachment.url);
										mediaElement.setAttribute("controls", "");

										if (attachment.description != null) {
											mediaElement.setAttribute("aria-title", attachment.description);
											mediaElement.setAttribute("title", attachment.description);
										}

										media.appendChild(mediaElement);
										break;
								}

								let mediaLink = document.createElement("a");
								mediaLink.setAttribute("href", attachment.url);
								mediaLink.setAttribute("rel", relAttributes);
								mediaLink.appendChild(mediaElement);

								media.appendChild(mediaLink);
							}
						});

						comment.appendChild(media);
					}

					let interactions = document.createElement("footer");

					let boosts = document.createElement("a");
					boosts.className = "boosts";
					boosts.setAttribute("href", `${status.url}/reblogs`);
					boosts.setAttribute("title", `${boostsFromText}`.replace("$INSTANCE", instance));

					let boostsIcon = document.createElement("i");
					boostsIcon.className = "icon";
					boosts.appendChild(boostsIcon);
					boosts.insertAdjacentHTML('beforeend', ` ${status.reblogs_count}`);
					interactions.appendChild(boosts);

					let faves = document.createElement("a");
					faves.className = "faves";
					faves.setAttribute("href", `${status.url}/favourites`);
					faves.setAttribute("title", `${favesFromText}`.replace("$INSTANCE", instance));

					let favesIcon = document.createElement("i");
					favesIcon.className = "icon";
					faves.appendChild(favesIcon);
					faves.insertAdjacentHTML('beforeend', ` ${status.favourites_count}`);
					interactions.appendChild(faves);
					comment.appendChild(interactions);

					if (status.card != null) {
						let cardFigure = document.createElement("figure");

						if (status.card.image != null) {
							let cardImg = document.createElement("img");
							cardImg.setAttribute("src", status.card.image);
							cardImg.classList.add("no-hover");
							cardFigure.appendChild(cardImg);
						}

						let cardCaption = document.createElement("figcaption");

						let cardTitle = document.createElement("strong");
						cardTitle.innerHTML = status.card.title;
						cardCaption.appendChild(cardTitle);

						if (status.card.description != null && status.card.description.length > 0) {
							let cardDescription = document.createElement("p");
							cardDescription.innerHTML = status.card.description;
							cardCaption.appendChild(cardDescription);
						}

						cardFigure.appendChild(cardCaption);

						let card = document.createElement("a");
						card.className = "card";
						card.setAttribute("href", status.card.url);
						card.setAttribute("rel", relAttributes);
						card.appendChild(cardFigure);

						comment.appendChild(card);
					}

					if (op === true) {
						comment.classList.add("op");

						avatar.classList.add("op");
						avatar.setAttribute(
							"title",
							`${blogPostAuthorText}: ` + avatar.getAttribute("title")
						);

						instanceBadge.classList.add("op");
						instanceBadge.setAttribute(
							"title",
							`${blogPostAuthorText}: ` + instanceBadge.getAttribute("title")
						);
					}

					commentsWrapper.innerHTML += comment.outerHTML;
				});
			}

			else {
				var statusText = document.createElement("p");
				statusText.innerHTML = noCommentsText;
				statusText.setAttribute("id", "comments-status");
				commentsWrapper.appendChild(statusText);
			}

			loadCommentsButton.innerHTML = reloadText;
		})
		.catch(function (error) {
			console.error('Error loading comments:', error);
		})
		.finally(function () {
			loadCommentsButton.disabled = false;
		});
}
