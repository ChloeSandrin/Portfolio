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

document.getElementById("formFormulaire").addEventListener("submit",function(event) {
    event.preventDefault();

    grecaptcha.ready(function() {
      grecaptcha.execute("6Lej8ZQsAAAAABdASrS1k_hthXu2NV2UIi3KGZPx", {action: "submit"}).then(function(token) {

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "g-recaptcha-response";
        input.value = token;

        document.getElementById("formFormulaire").appendChild(input);

        event.target.submit();
      });
    });
});

