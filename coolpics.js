// Mobile Menu

const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Modal Template

function viewerTemplate(src, alt) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            ${src}
        </div>
    `;
}

// Open Modal

function viewHandler(event) {

    if (event.target.tagName !== "IMG") {
        return;
    }

    const img = event.target;

    const fullImage = img.src.replace(
        "norris-sm.jpg",
        "norris-full.jpg"
    );

    document.body.insertAdjacentHTML(
        "afterbegin",
        viewerTemplate(fullImage, img.alt)
    );

    const viewer = document.querySelector(".viewer");
    const closeButton = document.querySelector(".close-viewer");

    closeButton.addEventListener("click", closeViewer);

    viewer.addEventListener("click", (event) => {
        if (event.target === viewer) {
            closeViewer();
        }
    });

    document.addEventListener("keydown", escClose);
}

// Close Modal

function closeViewer() {
    const viewer = document.querySelector(".viewer");

    if (viewer) {
        viewer.remove();
    }

    document.removeEventListener("keydown", escClose);
}

// ESC Key

function escClose(event) {
    if (event.key === "Escape") {
        closeViewer();
    }
}

// Gallery Click Event

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);
