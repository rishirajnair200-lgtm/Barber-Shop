// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// =========================
// FADE ANIMATION
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card,.review,.gallery img,.about").forEach(el => {

    el.classList.add("fade");

    observer.observe(el);

});

// =========================
// REVIEW FORM
// =========================

const reviewButton = document.querySelector(".review-form button");

reviewButton.addEventListener("click", () => {

    const name = document.querySelector(".review-form input");

    const text = document.querySelector(".review-form textarea");

    if (name.value === "" || text.value === "") {

        alert("Please fill in all fields.");

        return;

    }

    const reviewBox = document.createElement("div");

    reviewBox.className = "review fade show";

    reviewBox.innerHTML = `
        ★★★★★
        <p>${text.value}</p>
        <h4>- ${name.value}</h4>
    `;

    document.querySelector(".reviews").prepend(reviewBox);

    name.value = "";
    text.value = "";

    alert("Thank you for your review!");

});

// =========================
// GALLERY LIGHTBOX
// =========================

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.cursor = "pointer";
        overlay.style.zIndex = "99999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.border = "4px solid #d4af37";
        image.style.borderRadius = "15px";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.onclick = () => {
            overlay.remove();
        };

    });

});

// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log("Royal Cuts Website Loaded Successfully");
