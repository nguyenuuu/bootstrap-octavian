window.addEventListener("load", ()=> {
    // display large image portfolio
    const boxLargeImage = document.querySelector(".large__image");
    const largeImage = document.querySelector(".large__image img");
    const smallImages = document.querySelectorAll(".portfolio img");
    smallImages.forEach((smallImage) => {
        smallImage.addEventListener("click", ()=> {
            boxLargeImage.style.opacity = 1;
            boxLargeImage.style.pointerEvents = "auto";
            largeImage.src = smallImage.src;
        });
    });
    boxLargeImage.addEventListener("click", (e)=> {
        if(e.target !== largeImage) {
            boxLargeImage.style.opacity = 0;
            boxLargeImage.style.pointerEvents = "none";
        }
    });
    // appear team images
    const windowHeight = window.innerHeight;
    const teamImage = document.querySelector(".team__image");
    window.addEventListener("scroll", () => {
        const teamImageTop = teamImage.getBoundingClientRect().top;
        if(-windowHeight / 2.5 < teamImageTop && teamImageTop < windowHeight / 1.4) {
            teamImage.style.opacity = 1;
            teamImage.style.transform = `translateX(0px)`;
        } else {
            teamImage.style.opacity = 0;
            teamImage.style.transform = `translateX(50px)`;
        }
    });
});