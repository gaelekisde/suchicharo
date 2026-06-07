/**
 * Sushi Charo — Menu Data & Filters
 */

(function () {
  'use strict';

  var menuData = [
    /* ENTRADAS */
    { id: 1, category: 'entradas', name: 'Edamame', description: 'Vainas de soya salteadas con sal de mar y aceite de sésamo.', price: 89, image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80' },
    { id: 2, category: 'entradas', name: 'Gyoza (6 pzas)', description: 'Empanaditas japonesas rellenas de cerdo y verduras, doradas a la plancha.', price: 129, image: 'https://images.unsplash.com/photo-1609501676725-e2123a7a0f86?w=400&q=80' },
    { id: 3, category: 'entradas', name: 'Agedashi Tofu', description: 'Tofu frito en caldo dashi con jengibre y cebollín.', price: 119, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80' },
    { id: 4, category: 'entradas', name: 'Carpaccio de Atún', description: 'Finas láminas de atún con aceite de trufa, alcaparras y parmesano.', price: 189, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 5, category: 'entradas', name: 'Takoyaki (8 pzas)', description: 'Bolitas de pulpo crujientes con salsa okonomiyaki y katsuobushi.', price: 149, image: 'https://images.unsplash.com/photo-1611146251195-874e38d0d7b1?w=400&q=80' },
    { id: 6, category: 'entradas', name: 'Tempura de Camarón', description: 'Camarones en masa ligera con salsa tentsuyu y daikon rallado.', price: 169, image: 'https://images.unsplash.com/photo-1563612116985-0b1a1b9c4ec0?w=400&q=80' },

    /* ARROZ */
    { id: 7, category: 'arroz', name: 'Arroz Blanco', description: 'Arroz japonés al vapor, esponjoso y aromático.', price: 49, image: 'https://images.unsplash.com/photo-1516684732162-798a0062beb8?w=400&q=80' },
    { id: 8, category: 'arroz', name: 'Arroz Frito Yakimeshi', description: 'Arroz salteado con verduras, huevo y salsa de soya.', price: 99, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80' },
    { id: 9, category: 'arroz', name: 'Arroz con Camarón', description: 'Arroz salteado con camarones frescos y verduras de temporada.', price: 149, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80' },
    { id: 10, category: 'arroz', name: 'Chahan Especial', description: 'Arroz frito con pollo, camarón, huevo y chile serrano.', price: 139, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80' },

    /* BOWLS */
    { id: 11, category: 'bowls', name: 'Poke Bowl Salmón', description: 'Salmón marinado sobre arroz con aguacate, edamame y salsa ponzu.', price: 219, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80' },
    { id: 12, category: 'bowls', name: 'Poke Bowl Atún', description: 'Atún fresco con arroz, mango, pepino y salsa de sésamo.', price: 229, image: 'https://images.unsplash.com/photo-1625938145744-e380515247af?w=400&q=80' },
    { id: 13, category: 'bowls', name: 'Bowl Teriyaki', description: 'Pollo teriyaki glaseado con arroz, brócoli y zanahoria.', price: 179, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80' },
    { id: 14, category: 'bowls', name: 'Bowl Veggie', description: 'Arroz con tofu marinado, aguacate, edamame y vegetales asados.', price: 169, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80' },
    { id: 15, category: 'bowls', name: 'Bowl Charo Especial', description: 'Combinación de salmón, atún y camarón con arroz y toppings premium.', price: 279, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80' },

    /* ENSALADAS */
    { id: 16, category: 'ensaladas', name: 'Ensalada Sunomono', description: 'Pepino, wakame y cebolla en vinagreta de arroz dulce.', price: 89, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80' },
    { id: 17, category: 'ensaladas', name: 'Ensalada Wakame', description: 'Alga marina con sésamo tostado y aderezo de soya.', price: 99, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80' },
    { id: 18, category: 'ensaladas', name: 'Ensalada de Atún', description: 'Atún fresco con lechuga, aguacate y aderezo wasabi.', price: 169, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80' },
    { id: 19, category: 'ensaladas', name: 'Ensalada Charo', description: 'Mix de greens con camarón tempura, mango y vinagreta de jengibre.', price: 189, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80' },

    /* TEPPANYAKI */
    { id: 20, category: 'teppanyaki', name: 'Teppanyaki de Res', description: 'Corte de res a la plancha con verduras y salsa teriyaki.', price: 289, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
    { id: 21, category: 'teppanyaki', name: 'Teppanyaki de Pollo', description: 'Pechuga de pollo marinada con vegetales salteados.', price: 219, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80' },
    { id: 22, category: 'teppanyaki', name: 'Teppanyaki de Camarón', description: 'Camarones jumbo a la plancha con mantequilla de ajo.', price: 269, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80' },
    { id: 23, category: 'teppanyaki', name: 'Teppanyaki Mixto', description: 'Res, pollo y camarón con arroz y verduras de la estación.', price: 349, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },

    /* WON TON */
    { id: 24, category: 'wonton', name: 'Won Ton Frito (8 pzas)', description: 'Dumplings crujientes rellenos de camarón con salsa agridulce.', price: 129, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1d416f?w=400&q=80' },
    { id: 25, category: 'wonton', name: 'Won Ton al Vapor (6 pzas)', description: 'Dumplings al vapor con relleno de cerdo y camarón.', price: 119, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1d416f?w=400&q=80' },
    { id: 26, category: 'wonton', name: 'Sopa Won Ton', description: 'Caldo claro con won ton, verduras y cebollín.', price: 139, image: 'https://images.unsplash.com/photo-1569718212165-3a8278dfe5db?w=400&q=80' },

    /* YAKISOBA */
    { id: 27, category: 'yakisoba', name: 'Yakisoba Clásico', description: 'Fideos salteados con verduras y salsa yakisoba tradicional.', price: 149, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80' },
    { id: 28, category: 'yakisoba', name: 'Yakisoba de Pollo', description: 'Fideos con pollo teriyaki, repollo y zanahoria.', price: 169, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80' },
    { id: 29, category: 'yakisoba', name: 'Yakisoba de Camarón', description: 'Fideos salteados con camarones frescos y vegetales.', price: 189, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80' },
    { id: 30, category: 'yakisoba', name: 'Yakisoba Charo', description: 'Fideos con mariscos, res y verduras en salsa especial de la casa.', price: 219, image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80' },

    /* HANDROLLS */
    { id: 31, category: 'handrolls', name: 'Handroll Salmón', description: 'Cono de nori con salmón fresco, arroz y aguacate.', price: 89, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 32, category: 'handrolls', name: 'Handroll Atún Picante', description: 'Atún con salsa spicy, pepino y cebollín.', price: 99, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 33, category: 'handrolls', name: 'Handroll Camarón Tempura', description: 'Camarón empanizado crujiente con salsa chipotle.', price: 109, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 34, category: 'handrolls', name: 'Handroll Pulpo', description: 'Pulpo a la parrilla con arroz y salsa ponzu.', price: 119, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 35, category: 'handrolls', name: 'Handroll Charo Especial', description: 'Combinación de salmón, atún y queso crema con tobiko.', price: 129, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },

    /* ROLLOS FRÍOS */
    { id: 36, category: 'rollos-frios', name: 'California Roll', description: 'Cangrejo, aguacate y pepino con sésamo.', price: 129, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 37, category: 'rollos-frios', name: 'Philadelphia Roll', description: 'Salmón ahumado con queso crema y pepino.', price: 149, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 38, category: 'rollos-frios', name: 'Spicy Tuna Roll', description: 'Atún picante con pepino y cebollín.', price: 159, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 39, category: 'rollos-frios', name: 'Rainbow Roll', description: 'California roll cubierto con variedad de pescados.', price: 189, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 40, category: 'rollos-frios', name: 'Dragon Roll', description: 'Camarón tempura con aguacate y anguila glaseada.', price: 199, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 41, category: 'rollos-frios', name: 'Sashimi Roll', description: 'Atún y salmón envueltos en pepino sin arroz.', price: 169, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },
    { id: 42, category: 'rollos-frios', name: 'Alaska Roll', description: 'Salmón, aguacate y masago con salsa ponzu.', price: 159, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80' },

    /* ROLLOS CALIENTES */
    { id: 43, category: 'rollos-calientes', name: 'Volcano Roll', description: 'Camarón tempura con topping de atún picante horneado.', price: 209, image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1c56e?w=400&q=80' },
    { id: 44, category: 'rollos-calientes', name: 'Baked Salmon Roll', description: 'Salmón horneado con mayonesa spicy y salsa unagi.', price: 189, image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1c56e?w=400&q=80' },
    { id: 45, category: 'rollos-calientes', name: 'Tiger Roll', description: 'Camarón tempura con cangrejo y salsa chipotle horneada.', price: 199, image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1c56e?w=400&q=80' },
    { id: 46, category: 'rollos-calientes', name: 'Dynamite Roll', description: 'Camarón y cangrejo con topping gratinado picante.', price: 189, image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1c56e?w=400&q=80' },
    { id: 47, category: 'rollos-calientes', name: 'Godzilla Roll', description: 'Anguila, aguacate y queso crema horneados con unagi.', price: 219, image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1c56e?w=400&q=80' },

    /* BEBIDAS */
    { id: 48, category: 'bebidas', name: 'Té Verde', description: 'Té verde japonés servido caliente o frío.', price: 45, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80' },
    { id: 49, category: 'bebidas', name: 'Sake Caliente', description: 'Sake premium servido en tokkuri tradicional.', price: 89, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80' },
    { id: 50, category: 'bebidas', name: 'Ramune', description: 'Refresco japonés con bolita de vidrio, varios sabores.', price: 55, image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80' },
    { id: 51, category: 'bebidas', name: 'Limonada de Yuzu', description: 'Limonada artesanal con yuzu fresco y menta.', price: 65, image: 'https://images.unsplash.com/photo-1523677011783-c91d1bbe2e9d?w=400&q=80' },
    { id: 52, category: 'bebidas', name: 'Agua Mineral', description: 'Agua mineral con o sin gas.', price: 35, image: 'https://images.unsplash.com/photo-1548839140-5a059f41c5c0?w=400&q=80' },
    { id: 53, category: 'bebidas', name: 'Refresco', description: 'Coca-Cola, Sprite o Fanta.', price: 40, image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=80' },

    /* CERVEZAS */
    { id: 54, category: 'cervezas', name: 'Asahi', description: 'Cerveza japonesa lager, ligera y refrescante.', price: 65, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80' },
    { id: 55, category: 'cervezas', name: 'Sapporo', description: 'Cerveza premium de Hokkaido, sabor maltoso.', price: 65, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80' },
    { id: 56, category: 'cervezas', name: 'Kirin Ichiban', description: 'Cerveza de malta 100% primer uso.', price: 70, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80' },
    { id: 57, category: 'cervezas', name: 'Corona', description: 'Cerveza mexicana con rodaja de limón.', price: 55, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80' },
    { id: 58, category: 'cervezas', name: 'Michelada', description: 'Cerveza preparada con limón, sal, salsa y chile.', price: 75, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80' },

    /* SUSHI CHAROLAS */
    { id: 59, category: 'sushi-charolas', name: 'Charola Básica (24 pzas)', description: 'Selección de rollos clásicos: California, Philadelphia y Spicy Tuna.', price: 349, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80' },
    { id: 60, category: 'sushi-charolas', name: 'Charola Premium (36 pzas)', description: 'Rollos fríos y calientes con nigiri de salmón y atún.', price: 549, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80' },
    { id: 61, category: 'sushi-charolas', name: 'Charola Familiar (48 pzas)', description: 'Gran variedad de rollos, handrolls y nigiri para compartir.', price: 749, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80' },
    { id: 62, category: 'sushi-charolas', name: 'Charola Ejecutiva (30 pzas)', description: 'Selección del chef con los mejores ingredientes del día.', price: 649, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80' },
    { id: 63, category: 'sushi-charolas', name: 'Charola Fiesta (60 pzas)', description: 'La experiencia completa Sushi Charo para eventos especiales.', price: 999, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80' },

    /* SUSHI CHARITO */
    { id: 64, category: 'sushi-charito', name: 'Charito Individual (12 pzas)', description: 'Porción personal con 4 rollos variados del chef.', price: 179, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80' },
    { id: 65, category: 'sushi-charito', name: 'Charito Pareja (24 pzas)', description: 'Ideal para dos personas con rollos fríos y un handroll.', price: 329, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80' },
    { id: 66, category: 'sushi-charito', name: 'Charito Niños (8 pzas)', description: 'Rollos suaves sin picante, perfectos para los pequeños.', price: 129, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80' },
    { id: 67, category: 'sushi-charito', name: 'Charito Veggie (12 pzas)', description: 'Rollos vegetarianos con aguacate, pepino y vegetales.', price: 159, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80' },

    /* POSTRES */
    { id: 68, category: 'postres', name: 'Mochi (3 pzas)', description: 'Postre japonés de arroz glutinoso, sabores variados.', price: 79, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80' },
    { id: 69, category: 'postres', name: 'Helado Tempura', description: 'Bola de helado de vainilla en tempura crujiente.', price: 99, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80' },
    { id: 70, category: 'postres', name: 'Cheesecake de Matcha', description: 'Cheesecake cremoso con té verde matcha japonés.', price: 109, image: 'https://images.unsplash.com/photo-1524351199428-1e4cc7a7e2c6?w=400&q=80' },
    { id: 71, category: 'postres', name: 'Dorayaki', description: 'Panque japones relleno de pasta de frijol rojo dulce.', price: 69, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80' },
    { id: 72, category: 'postres', name: 'Brownie con Helado', description: 'Brownie de chocolate caliente con helado de vainilla.', price: 119, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476e?w=400&q=80' }
  ];

  var categories = [
    { id: 'all', label: 'Todos' },
    { id: 'entradas', label: 'Entradas' },
    { id: 'arroz', label: 'Arroz' },
    { id: 'bowls', label: 'Bowls' },
    { id: 'ensaladas', label: 'Ensaladas' },
    { id: 'teppanyaki', label: 'Teppanyaki' },
    { id: 'wonton', label: 'Won Ton' },
    { id: 'yakisoba', label: 'Yakisoba' },
    { id: 'handrolls', label: 'Handrolls' },
    { id: 'rollos-frios', label: 'Rollos Fríos' },
    { id: 'rollos-calientes', label: 'Rollos Calientes' },
    { id: 'bebidas', label: 'Bebidas' },
    { id: 'cervezas', label: 'Cervezas' },
    { id: 'sushi-charolas', label: 'Sushi Charolas' },
    { id: 'sushi-charito', label: 'Sushi Charito' },
    { id: 'postres', label: 'Postres' }
  ];

  var menuGrid = document.getElementById('menu-grid');
  var filterContainer = document.getElementById('menu-filters');
  var searchInput = document.getElementById('menu-search');
  var activeCategory = 'all';

  function formatPrice(price) {
    return '$' + price.toLocaleString('es-MX') + ' MXN';
  }

  function createMenuCard(item) {
    return (
      '<article class="menu-card" data-category="' + item.category + '" data-aos="fade-up">' +
        '<div class="menu-card__image-wrap">' +
          '<img class="menu-card__image" src="' + item.image + '" alt="' + item.name + '" loading="lazy" width="400" height="300">' +
          '<div class="menu-card__overlay"></div>' +
        '</div>' +
        '<div class="menu-card__body">' +
          '<span class="menu-card__category">' + getCategoryLabel(item.category) + '</span>' +
          '<h3 class="menu-card__title">' + item.name + '</h3>' +
          '<p class="menu-card__desc">' + item.description + '</p>' +
          '<p class="menu-card__price">' + formatPrice(item.price) + '</p>' +
        '</div>' +
      '</article>'
    );
  }

  function getCategoryLabel(catId) {
    var cat = categories.find(function (c) { return c.id === catId; });
    return cat ? cat.label : catId;
  }

  function renderFilters() {
    if (!filterContainer) return;

    filterContainer.innerHTML = categories.map(function (cat) {
      var activeClass = cat.id === activeCategory ? ' menu-filter--active' : '';
      return '<button class="menu-filter' + activeClass + '" data-filter="' + cat.id + '" type="button">' + cat.label + '</button>';
    }).join('');

    filterContainer.querySelectorAll('.menu-filter').forEach(function (btn) {
      btn.addEventListener('click', function () {
        activeCategory = this.dataset.filter;
        filterContainer.querySelectorAll('.menu-filter').forEach(function (b) {
          b.classList.toggle('menu-filter--active', b.dataset.filter === activeCategory);
        });
        renderMenu();
      });
    });
  }

  function getFilteredItems() {
    var searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    return menuData.filter(function (item) {
      var matchCategory = activeCategory === 'all' || item.category === activeCategory;
      var matchSearch = !searchTerm ||
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm);
      return matchCategory && matchSearch;
    });
  }

  function renderMenu() {
    if (!menuGrid) return;

    var items = getFilteredItems();

    if (items.length === 0) {
      menuGrid.innerHTML = '<p class="menu-empty">No se encontraron platillos con esos criterios.</p>';
      return;
    }

    menuGrid.innerHTML = items.map(createMenuCard).join('');

    if (typeof window.initScrollAnimations === 'function') {
      window.initScrollAnimations();
    }

    var newElements = menuGrid.querySelectorAll('[data-aos]');
    if (window.IntersectionObserver) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      newElements.forEach(function (el) {
        el.classList.remove('aos-animate');
        observer.observe(el);
      });
    } else {
      newElements.forEach(function (el) {
        el.classList.add('aos-animate');
      });
    }
  }

  function init() {
    renderFilters();
    renderMenu();

    if (searchInput) {
      searchInput.addEventListener('input', renderMenu);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
