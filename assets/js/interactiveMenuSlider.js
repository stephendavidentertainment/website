window.addEventListener('load', function () {
	setTimeout(function () {
		// Initialize Swiper with custom effects and navigation settings
		const swiper = new Swiper('.hero-section__slider', {
			effect: 'creative',
			speed: 1600,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			creativeEffect: {
				prev: {
					shadow: true,
					translate: [0, 0, -1],
				},
				next: {
					translate: ['100%', 0, 0],
				},
			},
			navigation: {
				prevEl: '.hero-section__button.swiper-button-prev',
				nextEl: '.hero-section__button.swiper-button-next',
			},
		});

		const heroSlides = document.querySelectorAll('.hero-section__slide');

		if (heroSlides.length) {
			heroSlides.forEach((slide) => {
				const quotes = slide.querySelectorAll('.quotes-hero__item');

				if (quotes.length) {
					const step = 0.2;
					quotes.forEach((quote, index) => {
						const delay = index * step;
						quote.style.setProperty('--quote-item-animation-delay', `${delay}s`);
					});
				}
			});
		}

		const menuBtn = document.querySelector('.burger');

		if (menuBtn) {
			menuBtn.addEventListener('click', function () {
				const currentItems = document.querySelectorAll('.menu-item.show-indicator');

				// Toggle 'show-indicator' class based on menu button state
				currentItems.forEach((element) => {
					element.classList.remove('show-indicator');
				});

				if (!menuBtn.classList.contains('active')) {
					const activeMenuItem = document.querySelector('.menu-item.active');
					if (activeMenuItem) {
						activeMenuItem.classList.add('show-indicator');
					}
				}
				menuBtn.classList.toggle('active');
			});
		}
		const overlayMenu = document.querySelector('.overlay-menu');
		const menuItems = document.querySelectorAll('.menu-item');

		if (menuItems && overlayMenu) {
			overlayMenu.addEventListener('click', function (e) {
				menuItems.forEach((item) => {
					item.classList.remove('active');
					item.classList.remove('show-indicator');
				});
			});
		}
	}, 0);
});

document.addEventListener('DOMContentLoaded', function () {
	const menuLinks = document.querySelectorAll('.overlay-menu .menu-item-name a');

	// Retrieve sections based on href attribute from menu links
	const sections = Array.from(menuLinks)
		.map((link) => {
			const sectionId = link.getAttribute('href').substring(1);
			const section = document.getElementById(sectionId);

			if (!section) {
				console.warn(`Section with ID "${sectionId}" not found in the document.`);
			}

			return section;
		})
		.filter(Boolean);

	// Function to toggle 'active' class for the current menu link
	function setActiveMenu(linkId) {
		menuLinks.forEach((link) => {
			const menuItem = link.closest('.menu-item');
			if (link.getAttribute('href') === `#${linkId}`) {
				menuItem.classList.add('active');
			} else {
				menuItem.classList.remove('active');
			}
		});
	}

	// Configure IntersectionObserver for section visibility
	const observerOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3,
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setActiveMenu(entry.target.id);
			}
		});
	}, observerOptions);

	// Observe each section for intersection events
	sections.forEach((section) => observer.observe(section));
});
