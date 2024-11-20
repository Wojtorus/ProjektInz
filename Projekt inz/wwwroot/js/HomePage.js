let text = "Welcome to Manufacture";
let index = 0;
let typingText = document.getElementById('typingText');

function typeWriter()
{
    if (index < text.length)
    {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 200);
    }
}

window.onload = function () {
    document.getElementById("tlo").style.backgroundImage = "url('/img/ProbaPrzyciemnienie1.jpg')";
    typeWriter();
};
/* Utrzymuje sie "active" przy przyciskach Szukaj oraz oferty deweloperów*/ 
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".tabs button");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});
/*Stylizacja rozsuwanego menu*/
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function (dropdown) {
        const button = dropdown.querySelector(".dropdown-button");
        const menuItems = dropdown.querySelectorAll(".dropdown-menu li");

        button.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdown.classList.toggle("active"); 
        });

        menuItems.forEach(function (item) {
            item.addEventListener("click", function () {
                button.textContent = item.textContent;
                dropdown.classList.remove("active"); 
            });
        });
    });
    document.addEventListener("click", function () {
        dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove("active"); 
        });
    });
});

/* karuzela */
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".ogloszenia-container");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");

    let scrollAmount = 0;
    const scrollStep = 300; // Ilość przesuwania w px za każdym razem

    // Funkcja przesuwania w lewo
    arrowLeft.addEventListener("click", function () {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    });

    // Funkcja przesuwania w prawo
    arrowRight.addEventListener("click", function () {
        if (scrollAmount < container.scrollWidth - container.clientWidth) {
            scrollAmount += scrollStep;
            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchTab = document.getElementById("searchTab");
    const developerTab = document.getElementById("developerTab");
    const searchSection = document.getElementById("search-section");
    const developerSection = document.getElementById("developer-section");
    const searchContent = document.getElementById("searchContent");
    const developerContent = document.getElementById("developerContent");
    const tlo = document.getElementById("tlo");


    function activateTab(tab) {

        searchSection.classList.remove("active");
        developerSection.classList.remove("active");
        searchContent.classList.remove("active");
        developerContent.classList.remove("active");

        if (tab === "search") {
            searchSection.classList.add("active");
            searchContent.classList.add("active");
            searchTab.classList.add("active");
            developerTab.classList.remove("active");
            tlo.style.backgroundImage = "url('/img/ProbaPrzyciemnienie1.jpg')";
        } else if (tab === "developer") {
            developerSection.classList.add("active");
            developerContent.classList.add("active");
            developerTab.classList.add("active");
            searchTab.classList.remove("active");
            tlo.style.backgroundImage = "url('/img/Gdansk.jpeg')";
        }
    }

    searchTab.addEventListener("click", function () {
        activateTab("search");
    });

    developerTab.addEventListener("click", function () {
        activateTab("developer");
    });
});
