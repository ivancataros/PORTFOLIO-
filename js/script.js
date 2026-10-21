document.addEventListener("DOMContentLoaded", () => {
    
    // ---------------------------------------------------------
    // 1. JavaScript Application Feature: Welcome Message
    // ---------------------------------------------------------
    const welcomeMsg = document.getElementById("welcome-msg");
    const hours = new Date().getHours();
    let greeting = "Welcome to my portfolio!";
    
    if (hours < 12) {
        greeting = "Good Morning! Welcome to my portfolio.";
    } else if (hours < 18) {
        greeting = "Good Afternoon! Welcome to my portfolio.";
    } else {
        greeting = "Good Evening! Welcome to my portfolio.";
    }
    if (welcomeMsg) welcomeMsg.textContent = greeting;

    // ---------------------------------------------------------
    // 2. JavaScript Application Feature: Real-time Live Clock
    // ---------------------------------------------------------
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const dateString = now.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
        const clockElem = document.getElementById("live-clock");
        if (clockElem) {
            clockElem.innerHTML = `<i class="far fa-clock"></i> ${dateString} | ${timeString}`;
        }
    }
    setInterval(updateClock, 1000);
    updateClock();

    // ---------------------------------------------------------
    // 3. JavaScript Application Feature: Dark / Light Mode Toggle
    // ---------------------------------------------------------
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const icon = themeBtn.querySelector("i");
        if (document.body.classList.contains("light-mode")) {
            icon.className = "fas fa-sun";
        } else {
            icon.className = "fas fa-moon";
        }
    });

    // ---------------------------------------------------------
    // 4. JavaScript Application Feature: Show / Hide (Read More)
    // ---------------------------------------------------------
    const readMoreBtn = document.getElementById("read-more-btn");
    const moreInfo = document.getElementById("more-info");

    readMoreBtn.addEventListener("click", () => {
        moreInfo.classList.toggle("open");
        if (moreInfo.classList.contains("open")) {
            readMoreBtn.textContent = "Read Less";
        } else {
            readMoreBtn.textContent = "Read More";
        }
    });

    // ---------------------------------------------------------
    // 5. JavaScript Application Feature: Alert on Button Click
    // ---------------------------------------------------------
    const alertBtns = document.querySelectorAll(".alert-btn");
    alertBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const projectName = e.target.getAttribute("data-project");
            alert(`Opening activity details for: "${projectName}"`);
        });
    });

    // ---------------------------------------------------------
    // 6. JavaScript Application Feature: Back to Top Button
    // ---------------------------------------------------------
    const backToTopBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ---------------------------------------------------------
    // Active Navigation Highlight on Scroll
    // ---------------------------------------------------------
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${current}`) {
                item.classList.add("active");
            }
        });
    });
});