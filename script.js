// Replace with your real WhatsApp number: country code + number, digits only.
const WHATSAPP_NUMBER = "919000000000";
const menuButton = document.getElementById("menuButton");
const navlinks = document.getElementById("navlinks");
menuButton.addEventListener("click", () => {
  const open = navlinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navlinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navlinks.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("leadForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    "Hello GrowthPilot Digital, I would like to discuss a marketing project.",
    `Name: ${data.get("name")}`,
    `Business: ${data.get("business") || "Not provided"}`,
    `Email: ${data.get("email")}`,
    `Service: ${data.get("service")}`,
    `Goal: ${data.get("goal") || "Not provided"}`
  ].join("\n");
  if (WHATSAPP_NUMBER === "919000000000") {
    document.getElementById("status").textContent = "Demo mode: replace WHATSAPP_NUMBER in script.js with your real WhatsApp number before using this form.";
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  document.getElementById("status").textContent = "Your enquiry is ready to send in WhatsApp.";
});