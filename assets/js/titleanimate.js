document.addEventListener("DOMContentLoaded", () => {
    // Array of image URLs, alt texts, and laurels images corresponding to each title
    const slides = [
        {
            title: "Wyatt Earp & The Cowboy War",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/Wyatt_Landing_02.2.webp",
            heroAlt: "Wyatt Earp hero image",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/Wyatt_Quotes.webp"
        },
        {
            title: "The Titans That Built America",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/TitansNew2.png",
            heroAlt: "The Titans That Built America",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/Titans_Laurels2.webp"
        },
        {
            title: "The Men Who Built America",
            // heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/mwba-header.jpg",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/Elephant-back.jpg",
            heroAlt: "The Men Who Built America",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/MWBA_Laurels.webp"
        },
        // {
        //     title: "Sons of Liberty",
        //     heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/shows/fulls/screenshots/SonsOfLiberty.webp",
        //     heroAlt: "Sons of Liberty",
        //     laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/Sons_Quotes.webp"
        // },
        // {
        //     title: "Roman Empire",
        //     // heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/Rome_106_S6A3084-1.jpg",
        //     heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/RomanEmpire.jpg",
        //     heroAlt: "Roman Empire",
        //     laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/Roman_Quotes.webp"
        // },
        {
            title: "Sugar Town",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/sugartown.jpg",
            heroAlt: "Sugar Town",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/MWBA_Laurels.webp"
        },
        {
            title: "Jonestown: Terror in the Jungle",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/landing/jonestown.jpg",
            heroAlt: "Jonestown: Terror in the Jungle",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/Jonestown_Quotes.gif"
        },
        {
            title: "The World Wars",
            heroSrc: "https://stephendavidentertainment.github.io/sdesite/images/portfolio-6.jpg",
            heroAlt: "The World Wars",
            laurelsSrc: "https://stephendavidentertainment.github.io/sdesite/images/laurels/WorldWars_Laurels.webp"
        }
    ];
    const titlesWrapper = document.querySelector(".slider-title-wrapper");
    const titles = titlesWrapper.querySelectorAll("h1");
    const heroImage = document.querySelector(".hero-image img");
    const laurelsImage = document.querySelector("#laurels");
    let currentTitleIndex = 0;


    // Initially hide all titles except the first one
    titles.forEach((title, index) => {
        if (index !== 0) {
            title.style.display = "none";
        } else {
            title.classList.add("active");
        }
    });

    function updateSlide() {
        const currentTitle = titles[currentTitleIndex];
        const nextTitleIndex = (currentTitleIndex + 1) % titles.length;
        const nextTitle = titles[nextTitleIndex];
        const nextSlide = slides[nextTitleIndex];

        // Animate out the current title, hero image, and laurels image
        gsap.to([currentTitle, heroImage, laurelsImage], {
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            onComplete: () => {
                currentTitle.style.display = "none";
                currentTitle.classList.remove("active");

                // Update the hero image, alt text, and laurels image
                heroImage.src = nextSlide.heroSrc;
                heroImage.alt = nextSlide.heroAlt;
                laurelsImage.src = nextSlide.laurelsSrc;

                // Update the next title text
                nextTitle.textContent = nextSlide.title;

                // Animate in the next title, hero image, and laurels image
                nextTitle.style.display = "block";
                gsap.fromTo([nextTitle, laurelsImage], { opacity: 0, scale: 0.8 }, {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    onComplete: () => {
                        nextTitle.classList.add("active");
                        currentTitleIndex = nextTitleIndex;
                    }
                });

                gsap.fromTo(heroImage, { x: -500, opacity: 0 }, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out"
                });

            }
        });
    }

    // Call updateSlide every 5 seconds
    setInterval(updateSlide, 5000);
});