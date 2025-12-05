const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const classSelect = document.getElementById("classType");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const classError = document.getElementById("classError");


document.getElementById("contact").addEventListener("submit", function (e) {
    let isValid = true;

    // NAME CHECK
    if (!/^[A-Za-z ]+$/.test(nameInput.value.trim())) {
        nameInput.classList.add("invalid");
        nameError.style.display = "block";
        nameError.innerText = "Name can contain only alphabets";
        isValid = false;
    } else {
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
        nameError.style.display = "none";
    }

    // EMAIL CHECK
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add("invalid");
        emailError.style.display = "block";
        emailError.innerText = "Please enter a valid email";
        isValid = false;
    } else {
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
        emailError.style.display = "none";
    }

    // DROPDOWN CHECK
    if (classSelect.value === "") {
        classSelect.classList.add("invalid");
        classError.style.display = "block";
        classError.innerText = "Please select a class";
        isValid = false;
    } else {
        classSelect.classList.add("valid");
        classSelect.classList.remove("invalid");
        classError.style.display = "none";
    }

    // STOP FORM SUBMISSION IF ANY ERROR
    if (!isValid) {
        e.preventDefault();
    }
});


// NAME LIVE VALIDATION
nameInput.addEventListener("input", () => {
    if (/^[A-Za-z ]+$/.test(nameInput.value.trim())) {
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
        nameError.style.display = "none";
    } else {
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        nameError.style.display = "block";
        nameError.innerText = "Name can contain only alphabets";
    }
});

// EMAIL LIVE VALIDATION
emailInput.addEventListener("input", () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(emailInput.value.trim())) {
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
        emailError.style.display = "none";
    } else {
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        emailError.style.display = "block";
        emailError.innerText = "Please enter a valid email";
    }
});

// DROPDOWN LIVE VALIDATION
classSelect.addEventListener("change", () => {
    if (classSelect.value !== "") {
        classSelect.classList.add("valid");
        classSelect.classList.remove("invalid");
        classError.style.display = "none";
    } else {
        classSelect.classList.add("invalid");
        classSelect.classList.remove("valid");
        classError.style.display = "block";
        classError.innerText = "Please select a class";
    }
});


        const backToTopBtn = document.getElementById("backToTopBtn");

        // Show button after scrolling 200px
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        };

        // Scroll to top on click
        backToTopBtn.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });


        const classImagesData = {
            beginner: [
                "download.jpeg",
                "download.jpeg",
                "download.jpeg"
            ],
            intermediate: [
                "download.jpeg",
                "download.jpeg",
                "download.jpeg",
                "download.jpeg"
            ],
            advanced: [
                "download.jpeg",
                "download.jpeg",
                "download.jpeg"
            ],
            kids: [
                "download.jpeg",
                "download.jpeg"
            ]
        };

        const buttons = document.querySelectorAll("#classList button");
        const imageContainer = document.getElementById("classImages");

        buttons.forEach(btn => {
            btn.addEventListener("click", () => {


                buttons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                document.getElementById("classPlaceholder").style.display = 'none'

                const type = btn.getAttribute("data-class");
                const images = classImagesData[type];

                imageContainer.innerHTML = "";

                images.forEach(src => {
                    const img = document.createElement("img");
                    img.src = src;
                    imageContainer.appendChild(img);
                });
                startAutoScroll(imageContainer);
            });
        });

        

        const sections = document.querySelectorAll('.about, #our-classes, .form-section, .class-details-container');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

    
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
            
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;


                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                    
                    const navbar = document.querySelector(".navbar");
                    if (navbar.classList.contains('active')) {
                        navbar.classList.remove('active');
                    }
                }
            });
        });        

        const menuToggle = document.getElementById("menuToggle");
        const navbar = document.querySelector(".navbar");

        menuToggle.addEventListener("click", function() {
            navbar.classList.toggle("active");
        });


        let scrollInterval;


function startAutoScroll(container) {
    if (scrollInterval) {
        clearInterval(scrollInterval);
    }
    
    const imageWidth = 270; 

   
    if (container.scrollWidth > container.clientWidth) {
        
        
        scrollInterval = setInterval(() => {
            
            
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
              
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                
                container.scrollLeft += imageWidth;
            }
            
        }, 1000); 
        
    } else {
        clearInterval(scrollInterval);
    }
}


// PHONE CALL
document.getElementById("callCard").addEventListener("click", function () {
    window.location.href = "tel:+919876543210";
});

// EMAIL
document.getElementById("emailCard").addEventListener("click", function () {
    window.location.href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox";
});

// WHATSAPP
document.getElementById("instagramcard").addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/hir.sanghani/";
});

