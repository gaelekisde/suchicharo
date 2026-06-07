/**
 * Sushi Charo — Animaciones
 * AOS-style scroll animations, counters, parallax
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Scroll Animations (AOS-style) --- */
  function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-aos]');
    if (!elements.length || prefersReducedMotion) {
      elements.forEach(function (el) {
        el.classList.add('aos-animate');
      });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.aosDelay || 0;
          setTimeout(function () {
            entry.target.classList.add('aos-animate');
          }, parseInt(delay, 10));
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Animated Counters --- */
  function animateCounter(element, target, duration) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * eased);
      element.textContent = current.toLocaleString('es-MX');

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target.toLocaleString('es-MX');
        if (element.dataset.suffix) {
          element.textContent += element.dataset.suffix;
        }
      }
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.counter, 10);
          const duration = parseInt(el.dataset.duration || '2000', 10);
          animateCounter(el, target, duration);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  /* --- Soft Parallax --- */
  function initParallax() {
    if (prefersReducedMotion) return;

    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;

    function updateParallax() {
      parallaxElements.forEach(function (el) {
        const speed = parseFloat(el.dataset.parallax) || 0.3;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const offset = (rect.top - windowHeight / 2) * speed;
          el.style.transform = 'translateY(' + offset + 'px)';
        }
      });
    }

    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();
  }

  /* --- Fade In on Scroll (generic) --- */
  function initFadeElements() {
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    if (!fadeElements.length) return;

    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(function (el) {
      fadeObserver.observe(el);
    });
  }

  /* --- Reviews Carousel --- */
  function initReviewsCarousel() {
    var track = document.querySelector('.reviews-track');
    var dotsContainer = document.querySelector('.carousel-dots');
    if (!track) return;

    var slides = track.querySelectorAll('.review-slide');
    var totalSlides = slides.length;
    var currentSlide = 0;
    var autoplayInterval;
    var slidesPerView = 1;

    function getSlidesPerView() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function createDots() {
      if (!dotsContainer) return;
      var maxDots = Math.ceil(totalSlides / slidesPerView);
      dotsContainer.innerHTML = '';
      for (var i = 0; i < maxDots; i++) {
        var dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' carousel-dot--active' : '');
        dot.setAttribute('aria-label', 'Ir a reseña ' + (i + 1));
        dot.dataset.index = i;
        dot.addEventListener('click', function () {
          goToSlide(parseInt(this.dataset.index, 10));
          resetAutoplay();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateCarousel() {
      slidesPerView = getSlidesPerView();
      var slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(track).gap || '16', 10);
      track.style.transform = 'translateX(-' + (currentSlide * slideWidth) + 'px)';

      if (dotsContainer) {
        dotsContainer.querySelectorAll('.carousel-dot').forEach(function (dot, i) {
          dot.classList.toggle('carousel-dot--active', i === currentSlide);
        });
      }
    }

    function goToSlide(index) {
      var maxSlide = Math.max(0, totalSlides - slidesPerView);
      currentSlide = Math.min(index, maxSlide);
      updateCarousel();
    }

    function nextSlide() {
      var maxSlide = Math.max(0, totalSlides - slidesPerView);
      currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
      updateCarousel();
    }

    function startAutoplay() {
      if (prefersReducedMotion) return;
      autoplayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }

    createDots();
    updateCarousel();
    startAutoplay();

    window.addEventListener('resize', function () {
      createDots();
      currentSlide = 0;
      updateCarousel();
    });
  }

  /* --- Init --- */
  function init() {
    initScrollAnimations();
    initCounters();
    initParallax();
    initFadeElements();
    initReviewsCarousel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
