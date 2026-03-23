// =======================
// TABLEAUX COMPÉTENCES
// =======================

const tableaux = document.querySelectorAll(
  "#tableauboard, #illustratorTableau, #figmaTableau, #photoshopTableau, #vscodeTableau, #indesignTableau"
);

function cacherTousLesTableaux() {
  tableaux.forEach(tableau => {
    tableau.style.display = "none";
  });
}

cacherTousLesTableaux();
document.getElementById("tableauboard").style.display = "block";

const correspondance = {
  illustrator: "illustratorTableau",
  figma: "figmaTableau",
  photoshop: "photoshopTableau",
  vscode: "vscodeTableau",
  indesign: "indesignTableau"
};

Object.keys(correspondance).forEach(idLogo => {
  const logo = document.getElementById(idLogo);

  if (logo) {
    logo.addEventListener("click", () => {
      cacherTousLesTableaux();
      document.getElementById(correspondance[idLogo]).style.display = "flex";
    });
  }
});


// =======================
// HOVER PROJETS
// =======================

const images = document.querySelectorAll(".projet-img");

images.forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.dataset.hover;

  img.addEventListener("mouseenter", () => {
    img.src = hoverSrc;
  });

  img.addEventListener("mouseleave", () => {
    img.src = originalSrc;
  });
});


// =======================
// NAVBAR ACTIVE AVEC DELAI
// =======================

const sections = document.querySelectorAll("#P1, #P2, #P3, #P4");
const navLinks = document.querySelectorAll("nav a");

let timeoutId = null;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        const currentId = entry.target.id;

        
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {

          navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentId}`) {
              link.classList.add("active");
            }
          });

        }, 500); 
      }

    });
  },
  {
    threshold: 0.6 
  }
);

sections.forEach(section => observer.observe(section));

// Form //

const form = document.getElementById("formFormulaire");
form.addEventListener("submit", (e) => {
  const honeypot = form.querySelector("[name='website']");
  if (honeypot.value) {
    e.preventDefault();
  }
})
