/**
 * Sushi Charo — Main JavaScript
 * Navigation, Header, Footer, Global Interactions
 */

(function () {
  'use strict';

  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* --- Active Nav Link --- */
  function setActiveNav() {
    const navLinks = document.querySelectorAll('.nav__link, .mobile-nav__link');
    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('nav__link--active', 'mobile-nav__link--active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* --- Header Scroll Effect --- */
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  /* --- Mobile Menu Toggle --- */
  function toggleMobileNav() {
    if (!hamburger || !mobileNav) return;

    const isOpen = hamburger.classList.toggle('hamburger--active');
    mobileNav.classList.toggle('mobile-nav--open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileNav() {
    if (!hamburger || !mobileNav) return;
    hamburger.classList.remove('hamburger--active');
    mobileNav.classList.remove('mobile-nav--open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* --- Smooth Scroll for Anchor Links --- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 0;
          const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: top, behavior: 'smooth' });
          closeMobileNav();
        }
      });
    });
  }

  /* --- Lazy Loading Images --- */
  function initLazyLoad() {
    if ('loading' in HTMLImageElement.prototype) {
      document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
      return;
    }

    const lazyImages = document.querySelectorAll('img[data-src]');
    if (!lazyImages.length) return;

    const imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          img.removeAttribute('data-src');
          img.removeAttribute('data-srcset');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    lazyImages.forEach(function (img) {
      imageObserver.observe(img);
    });
  }

  /* --- Event Listeners --- */
  function init() {
    setActiveNav();
    initSmoothScroll();
    initLazyLoad();

    if (hamburger) {
      hamburger.addEventListener('click', toggleMobileNav);
    }

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMobileNav();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
