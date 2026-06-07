/**
 * Sushi Charo — Galería
 * Masonry filters & Lightbox
 */

(function () {
  'use strict';

  var galleryData = [
    { id: 1, category: 'sushi', src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80', alt: 'Sashimi de salmón fresco' },
    { id: 2, category: 'sushi', src: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1c56e?w=800&q=80', alt: 'Roll especial horneado' },
    { id: 3, category: 'sushi', src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80', alt: 'Charola de sushi premium' },
    { id: 4, category: 'sushi', src: 'https://images.unsplash.com/photo-1563612116985-0b1a1b9c4ec0?w=800&q=80', alt: 'Tempura de camarón' },
    { id: 5, category: 'sushi', src: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80', alt: 'Poke bowl de atún' },
    { id: 6, category: 'sushi', src: 'https://images.unsplash.com/photo-1611146251195-874e38d0d7b1?w=800&q=80', alt: 'Takoyaki japonés' },
    { id: 7, category: 'local', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: 'Interior del restaurante' },
    { id: 8, category: 'local', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', alt: 'Área de comensales' },
    { id: 9, category: 'local', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', alt: 'Barra de sushi' },
    { id: 10, category: 'local', src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80', alt: 'Ambiente nocturno' },
    { id: 11, category: 'local', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Mesa servida' },
    { id: 12, category: 'equipo', src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80', alt: 'Chef preparando sushi' },
    { id: 13, category: 'equipo', src: 'https://images.unsplash.com/photo-1600565193348-f74bd3647f91?w=800&q=80', alt: 'Equipo de cocina' },
    { id: 14, category: 'equipo', src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80', alt: 'Chef en acción' },
    { id: 15, category: 'equipo', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Sous chef' },
    { id: 16, category: 'sushi', src: 'https://images.unsplash.com/photo-1583621833999-0c8914cde08e?w=800&q=80', alt: 'Nigiri variado' },
    { id: 17, category: 'local', src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80', alt: 'Entrada del restaurante' },
    { id: 18, category: 'sushi', src: 'https://images.unsplash.com/photo-1617196034683-71e8ac8e0f83?w=800&q=80', alt: 'Dragon roll' }
  ];

  var filters = [
    { id: 'all', label: 'Todos' },
    { id: 'sushi', label: 'Sushi' },
    { id: 'local', label: 'Local' },
    { id: 'equipo', label: 'Equipo' }
  ];

  var masonry = document.getElementById('gallery-masonry');
  var filterContainer = document.getElementById('gallery-filters');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxClose = document.getElementById('lightbox-close');
  var lightboxPrev = document.getElementById('lightbox-prev');
  var lightboxNext = document.getElementById('lightbox-next');

  var activeFilter = 'all';
  var currentIndex = 0;
  var visibleItems = [];

  function renderFilters() {
    if (!filterContainer) return;

    filterContainer.innerHTML = filters.map(function (f) {
      var active = f.id === activeFilter ? ' gallery-filter--active' : '';
      return '<button class="gallery-filter' + active + '" data-filter="' + f.id + '" type="button">' + f.label + '</button>';
    }).join('');

    filterContainer.querySelectorAll('.gallery-filter').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeFilter = this.dataset.filter;
        filterContainer.querySelectorAll('.gallery-filter').forEach(function (b) {
          b.classList.toggle('gallery-filter--active', b.dataset.filter === activeFilter);
        });
        renderGallery();
      });
    });
  }

  function getFilteredItems() {
    if (activeFilter === 'all') return galleryData;
    return galleryData.filter(function (item) {
      return item.category === activeFilter;
    });
  }

  function renderGallery() {
    if (!masonry) return;

    visibleItems = getFilteredItems();

    masonry.innerHTML = visibleItems.map(function (item, index) {
      return (
        '<div class="gallery-item" data-index="' + index + '" data-aos="zoom-in">' +
          '<img src="' + item.src + '" alt="' + item.alt + '" loading="lazy" width="800" height="600">' +
          '<div class="gallery-item__overlay">' +
            '<div class="gallery-item__icon">' +
              '<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"/></svg>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    masonry.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        openLightbox(parseInt(this.dataset.index, 10));
      });
    });
  }

  function openLightbox(index) {
    if (!lightbox || !lightboxImg) return;
    currentIndex = index;
    lightboxImg.src = visibleItems[currentIndex].src;
    lightboxImg.alt = visibleItems[currentIndex].alt;
    lightbox.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('lightbox--open');
    document.body.style.overflow = '';
  }

  function navigateLightbox(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = visibleItems.length - 1;
    if (currentIndex >= visibleItems.length) currentIndex = 0;
    lightboxImg.src = visibleItems[currentIndex].src;
    lightboxImg.alt = visibleItems[currentIndex].alt;
  }

  function init() {
    renderFilters();
    renderGallery();

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', function () { navigateLightbox(-1); });
    if (lightboxNext) lightboxNext.addEventListener('click', function () { navigateLightbox(1); });

    if (lightbox) {
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (!lightbox || !lightbox.classList.contains('lightbox--open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
