const words = "Initialising";

const ANIMATION_DURATION = 2000; // Define your animation duration in milliseconds
const ANIMATION_TIMEOUT = 2900; // Define the duration after which animation will end (in milliseconds)

function createElements(offset) {
    const characters = words.split("");
    characters.forEach((char, i) => {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

        if (offset >= 0) {
            document.getElementById("spiral").appendChild(div);
        } else {
            document.getElementById("spiral2").appendChild(div);
        }
    });
}

createElements(0);
createElements(-1 * (ANIMATION_DURATION / 2 ));

// Timer to end animation after a certain duration
setTimeout(() => {
    endAnimation();
}, ANIMATION_TIMEOUT);

function endAnimation() {
    const animationContainers = document.querySelectorAll('.spiral-container');
    animationContainers.forEach(container => {
        container.style.transition = 'opacity 0.5s ease-out'; // Apply smooth fade-out transition
        container.style.opacity = '0'; // Set opacity to 0 for fade-out effect
    });

    const wordsContainer = document.getElementById("words-container");
    wordsContainer.style.transition = 'opacity 0.5s ease-out'; // Apply smooth fade-out transition
    wordsContainer.style.opacity = '0'; // Set opacity to 0 for fade-out effect

    // Show main content after animation fades out
    setTimeout(() => {
        const mainContent = document.getElementById("main-content");
        mainContent.style.opacity = '1'; // Set opacity to 1 for fade-in effect
        document.body.style.overflowY = 'auto'; // Enable scrolling after loader fades out
    }, 600); // Adjust the delay as needed to match the duration of the fade-out animation
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// JavaScript for scrolling to the contact section
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  }
  
  // JavaScript for scrolling to the top of the page when clicking the logo
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  