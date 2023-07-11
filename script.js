const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const shopBtn = document.getElementById("shopBtn");
const contactBtn = document.getElementById("contactBtn");

const aboutSection = document.querySelector("section#about");
const shopSection = document.querySelector("section#shop");
const contactSection = document.querySelector("section#contact");

homeBtn.addEventListener("click", () => window.scrollTo(0, 0));

aboutBtn.addEventListener("click", () =>
  aboutSection.scrollIntoView({ behavior: "smooth" })
);

shopBtn.addEventListener("click", () =>
  shopSection.scrollIntoView({ behavior: "smooth" })
);

contactBtn.addEventListener("click", () =>
  contactSection.scrollIntoView({ behavior: "smooth" })
);
