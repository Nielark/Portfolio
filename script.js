document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const navIcons = document.querySelectorAll(".nav-icons a");
    const sections = document.querySelectorAll("section");
    const hamburger = document.querySelector(".hamburger");
    const hamburgerIcon = hamburger.querySelector("i");
    const navIconsContainer = document.querySelector(".nav-icons");
    const navBar = document.querySelector(".nav-bar");

    // Function to update active link on click
    function updateActiveLink(activeLink) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove("active"));
        navIcons.forEach(icon => icon.classList.remove("active"));

        // Add active class to clicked link
        activeLink.classList.add("active");
    }

    // Click event for text links
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            updateActiveLink(this);
        });
    });

    // Click event for icon links
    navIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            updateActiveLink(this);
        });
    });

    // Scroll event to highlight active section
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;

        // Change nav background on scroll
        if (scrollPosition > document.querySelector("#home").offsetHeight - 45) {
            // navBar.style.backgroundColor = "#011526";
            // navLinks.forEach(navLink => {
            //     navLink.style.color = "#EFF1E6";
            // });
        }
        else {
            // navBar.style.backgroundColor = "#EFF1E6";
            // navLinks.forEach(navLink => {
            //     navLink.style.color = "#011526";
            // });
        }

        // Update active link based on section in view
        sections.forEach(section => {
            if (
                section.offsetTop <= scrollPosition + 100 &&
                section.offsetTop + section.offsetHeight > scrollPosition + 100
            ) {
                let id = section.getAttribute("id");

                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });

                navIcons.forEach(icon => {
                    icon.classList.remove("active");
                    if (icon.getAttribute("href") === `#${id}`) {
                        icon.classList.add("active");
                    }
                });
            }
        });
    });

    //* HAMBURGER MENU

    // Toggle Hamburger Menu
    hamburger.addEventListener("click", function() {
        navIconsContainer.classList.toggle("open");

        if (navIconsContainer.classList.contains("open")) {
            hamburgerIcon.classList.replace("fa-bars", "fa-times");
        } else {
            hamburgerIcon.classList.replace("fa-times", "fa-bars");
        }
    });

    // Close menu when an icon is clicked
    navIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            navIconsContainer.classList.remove("open");
            hamburgerIcon.classList.replace("fa-times", "fa-bars");
        });
    });

    // Automatically reset menu when resizing
    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            navIconsContainer.classList.remove("open");
            hamburgerIcon.classList.replace("fa-times", "fa-bars");
        }
    });


    //* TYPING EFFECT
    
    const text = "Hello World!";
    let index = 0;
    const speed = 150; // Typing speed in milliseconds
    const typingText = document.getElementById("typing-text");

    function typeEffectGreet() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffectGreet, speed);
        }
    }

    typeEffectGreet(); // Start typing effect

    const phrases = [
        "a Computer Engineer",
        "Passionate about programming",
        "and learning new technologies."
    ];
    let currentPhraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;  // Typing speed in ms
    const erasingSpeed = 50;   // Erasing speed in ms
    const delayBetweenPhrases = 2000;  // Pause before next phrase
    const typedText = document.querySelector(".typed");

    function typeEffectSelfDescription() {
        const currentPhrase = phrases[currentPhraseIndex];

        if (!isDeleting) {
            // Typing letters
            typedText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffectSelfDescription, delayBetweenPhrases);
            }
            else {
                setTimeout(typeEffectSelfDescription, typingSpeed);
            }
        }
        else {
            // Erasing letters
            typedText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            }
            setTimeout(typeEffectSelfDescription, erasingSpeed);
        }
    }

    typeEffectSelfDescription();

    //* INTEREST CARD'S SOUND EFFECTS

    document.querySelectorAll(".interest-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            const audio = card.querySelector("audio");
            if (audio) {// Check if the card has an audio element
                audio.currentTime = 0; // Reset audio to start
                audio.play();
            }
        });

        // Pause the audio when mouse leaves the card
        card.addEventListener("mouseleave", () => {
            const audio = card.querySelector("audio");
            if (audio) {// Check if the card has an audio element
                audio.currentTime = 0; // Reset audio to start
                audio.pause(); // Pause the audio
            }
        });
    });

    //* CERTIFICATE MODAL

    document.querySelectorAll(".certificate-overlay").forEach((overlay) => {
        overlay.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event bubbling

            // Get the closest certificate card
            const card = event.target.closest(".certificate-card");
            if (!card) return;

            const imgSrc = card.querySelector("img").getAttribute("src");

            const modalImg = document.querySelector(".modal-image");

            modalImg.setAttribute("src", imgSrc);
            document.querySelector(".certificate-modal").classList.toggle("certificate-open");
        });
    });

    document.querySelectorAll(".award-card").forEach((card) => {
        card.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event bubbling

            // Get the closest certificate card
            const card = event.target.closest(".award-card");
            if (!card) return;

            const imgSrc = card.querySelector("img").getAttribute("src");

            const modalImg = document.querySelector(".modal-image");

            modalImg.setAttribute("src", imgSrc);
            document.querySelector(".certificate-modal").classList.toggle("certificate-open");
        });
    });

    document.querySelectorAll(".project-card img").forEach((card) => {
        card.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event bubbling

            // Get the closest certificate card
            const card = event.target.closest(".project-card");
            if (!card) return;

            const imgSrc = card.querySelector("img").getAttribute("src");

            const modalImg = document.querySelector(".modal-image");

            modalImg.setAttribute("src", imgSrc);
            document.querySelector(".certificate-modal").classList.toggle("certificate-open");
        });
    });

    // Close the modal when clicking the close button
    document.querySelector(".close-btn").addEventListener("click", () => {
        document.querySelector(".certificate-modal").classList.toggle("certificate-open");
    });

    const prompt = document.querySelector(".chatbot-prompt");

    // Function to show prompt with reset logic
    function showPrompt() {
        // Reset text to default every time it's shown
        prompt.innerHTML = "Hi there! Need help?";
        prompt.style.opacity = "1";
        prompt.style.visibility = "visible";

        // Hide it again after 6 seconds
        setTimeout(() => {
            prompt.style.opacity = "0";
            prompt.style.visibility = "hidden";
        }, 6000);
    }

    // Initial appearance after 2 seconds
    setTimeout(showPrompt, 2000);

    // Re-show prompt every 15 seconds
    setInterval(showPrompt, 15000);

    // On chatbot click, show alternate message
    document.querySelector(".chatbot").addEventListener("click", () => {
        prompt.innerHTML = "Sorry, this feature is not available yet!";
        prompt.style.opacity = "1";
        prompt.style.visibility = "visible";

        // Hide again after 6 seconds, and reset in the next interval
        setTimeout(() => {
            prompt.style.opacity = "0";
            prompt.style.visibility = "hidden";
        }, 6000);
    });


    document.querySelector("#date").innerHTML = new Date().getFullYear();
});
