// =====================================
// copilotai.in Premium Landing Page
// =====================================

// Fade-in
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Floating Glass Card
const card = document.querySelector(".card");

if (card) {

    let direction = 1;

    setInterval(() => {

        card.style.transform = `translateY(${direction * 6}px)`;

        direction *= -1;

    }, 2500);

}

// Mouse Glow Effect
document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    document.body.style.backgroundPosition =
        `${50 + x / 150}px ${50 + y / 150}px`;

});

// Ripple Effect
const buttons = document.querySelectorAll(".buttons a");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow =
            "0 0 25px rgba(0,212,255,.6)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});

// Typewriter Effect
const heading = document.querySelector("h2");

if (heading) {

    const text = heading.innerText;

    heading.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            heading.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 60);

        }

    }

    typing();

}

// Current Year
const footer = document.querySelector(".footer");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} copilotai.in | Secure Domain Transfer`;

}

// Smooth Card Hover
if (card) {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(0,212,255,.25),
            rgba(15,20,35,.60))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(12,18,30,.45)";

    });

}
