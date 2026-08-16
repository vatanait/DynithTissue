const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const langBtn = document.getElementById("langBtn");

menuBtn.addEventListener("click", () => mainNav.classList.toggle("show"));

document.querySelectorAll("#mainNav a").forEach(a => {
  a.addEventListener("click", () => mainNav.classList.remove("show"));
});

let khmer = true;
langBtn.addEventListener("click", () => {
  khmer = !khmer;
  document.documentElement.lang = khmer ? "km" : "en";
  langBtn.textContent = khmer ? "EN" : "ខ្មែរ";
  document.querySelectorAll("[data-km][data-en]").forEach(el => {
    el.textContent = khmer ? el.dataset.km : el.dataset.en;
  });
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.display = filter === "all" || card.dataset.category === filter ? "" : "none";
    });
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.textContent = khmer
    ? "សាររបស់អ្នកត្រូវបានទទួល។ សូមអរគុណ!"
    : "Your message has been received. Thank you!";
  e.target.reset();
});

const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {threshold: .12});

document.querySelectorAll(".about-card,.product-card,.brand-card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  reveal.observe(el);
});
