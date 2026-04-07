//Page accueil Projet Maquette //

document.addEventListener("DOMContentLoaded", () => {
    // Récupérer le paramètre "project" dans l'URL
    const params = new URLSearchParams(window.location.search);
    const project = params.get("project");
    console.log("Project param:", project); // Debug

    // Récupération des éléments
    const title = document.getElementById("titreProjet");
    const desktopBtn = document.getElementById("desktopLink");
    const mobileBtn = document.getElementById("mobileLink");
    console.log(desktopBtn, mobileBtn, title);

    // Définition des projets et leurs liens
    const projects = {
        catfees: {
            name: "CATFEE’S",
            desktop: "https://www.figma.com/proto/upVpJ8K4jHtAOwQpn2sDc1/Bar-%C3%A0-chat?node-id=767-1504&p=f&viewport=179%2C160%2C0.02&t=9azfab8JN6Pfaaj4-1&scaling=min-zoom&content-scaling=fixed&page-id=149%3A1008",
            mobile: "https://www.figma.com/proto/upVpJ8K4jHtAOwQpn2sDc1/Bar-%C3%A0-chat?node-id=356-2446&p=f&viewport=351%2C346%2C0.04&t=RNMDBA4m2a1FKhA2-1&scaling=scale-down&content-scaling=fixed&page-id=356%3A2445"
        },
        easyjet: {
            name: "EASYJET",
            desktop: "https://www.figma.com/proto/S9FSPO1Eu1Boutxt1Jk8pm/SANDRIN_Chlo%C3%A9_Figma_2026?node-id=29-806&p=f&viewport=-436%2C21%2C0.11&t=viyoyWnhZ0hhSTMs-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=29%3A808&page-id=29%3A805",
            mobile: "https://www.figma.com/proto/S9FSPO1Eu1Boutxt1Jk8pm/SANDRIN_Chlo%C3%A9_Figma_2026?node-id=29-806&p=f&viewport=-436%2C21%2C0.11&t=viyoyWnhZ0hhSTMs-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=29%3A808&page-id=29%3A805"
        },
        hyperplanning: {
            name: "HYPERPLANNING",
            desktop: "https://www.figma.com/proto/8XFzjSOsVI1ZPwi8MmC8I4/Refonte-Hyperplanning?node-id=471-1899&p=f&viewport=355%2C85%2C0.04&t=KkrXYGruZv2ILZUM-1&scaling=scale-down&content-scaling=fixed&page-id=471%3A1527",
            mobile: "https://www.figma.com/proto/8XFzjSOsVI1ZPwi8MmC8I4/Refonte-Hyperplanning?node-id=471-3798&p=f&viewport=331%2C45%2C0.25&t=5kYbrs0u6zLoHdav-1&scaling=scale-down&content-scaling=fixed&page-id=471%3A3794"
        }
    };

    // Vérification si le projet existe
    if (projects[project]) {
        // Changer le titre
        if (title) title.textContent = projects[project].name;

        // Ajouter les événements aux boutons pour ouvrir les liens
        if (desktopBtn) {
            desktopBtn.addEventListener("click", () => {
                window.open(projects[project].desktop, "_blank");
            });
        }
        if (mobileBtn) {
            mobileBtn.addEventListener("click", () => {
                window.open(projects[project].mobile, "_blank");
            });
        }
    } else {
        // Aucun projet choisi
        if (title) title.textContent = "Choisis un projet !";
        if (desktopBtn) desktopBtn.style.display = "none";
        if (mobileBtn) mobileBtn.style.display = "none";
    }
});