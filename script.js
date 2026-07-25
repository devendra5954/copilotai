// ======================================
// copilotai.in Premium Landing Page
// ======================================

// Fade In
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Smooth Background Effect
document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    document.body.style.backgroundPosition =
        `${50 + x / 200}px ${50 + y / 200}px`;

});

// Button Glow
const buttons = document.querySelectorAll(".buttons a");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.boxShadow = "0 0 20px rgba(0,212,255,.45)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.boxShadow = "none";

    });

});

// Typewriter Heading
const heading = document.querySelector("h2");

if (heading) {

    const text = heading.innerText;

    heading.innerHTML = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            heading.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter, 55);

        }

    }

    typeWriter();

}
