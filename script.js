// Add your Discord invite later by replacing the empty string below.
const DISCORD_INVITE_URL = "https://discord.gg/crimsoncountyrp";
const joinButton = document.getElementById("join-button");
const joinFeedback = document.getElementById("join-feedback");
joinButton.addEventListener("click", () => {
  if (DISCORD_INVITE_URL.trim()) {
    window.open(DISCORD_INVITE_URL, "_blank", "noopener,noreferrer");
  } else {
    joinFeedback.textContent = "Our community link will be available soon.";
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
