/**
 * Sushi Charo — Reservaciones
 * Form validation
 */

(function () {
  'use strict';

  var form = document.getElementById('reservation-form');
  var successMessage = document.getElementById('form-success');

  if (!form) return;

  var fields = {
    nombre: {
      input: document.getElementById('nombre'),
      validate: function (value) {
        if (!value.trim()) return 'El nombre es obligatorio.';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres.';
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value.trim())) return 'El nombre solo puede contener letras.';
        return '';
      }
    },
    telefono: {
      input: document.getElementById('telefono'),
      validate: function (value) {
        if (!value.trim()) return 'El teléfono es obligatorio.';
        var cleaned = value.replace(/\s|-/g, '');
        if (!/^\d{10}$/.test(cleaned)) return 'Ingresa un teléfono válido de 10 dígitos.';
        return '';
      }
    },
    correo: {
      input: document.getElementById('correo'),
      validate: function (value) {
        if (!value.trim()) return 'El correo es obligatorio.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Ingresa un correo electrónico válido.';
        return '';
      }
    },
    fecha: {
      input: document.getElementById('fecha'),
      validate: function (value) {
        if (!value) return 'Selecciona una fecha.';
        var selected = new Date(value + 'T00:00:00');
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) return 'La fecha no puede ser anterior a hoy.';
        return '';
      }
    },
    hora: {
      input: document.getElementById('hora'),
      validate: function (value) {
        if (!value) return 'Selecciona una hora.';
        var parts = value.split(':');
        var hour = parseInt(parts[0], 10);
        if (hour < 12 || hour >= 22) return 'Horario disponible: 12:00 PM - 10:00 PM.';
        return '';
      }
    },
    personas: {
      input: document.getElementById('personas'),
      validate: function (value) {
        if (!value) return 'Selecciona el número de personas.';
        if (value === '11' || value === '16') return '';
        var num = parseInt(value, 10);
        if (num < 1 || num > 20) return 'Máximo 20 personas por reservación.';
        return '';
      }
    },
    comentarios: {
      input: document.getElementById('comentarios'),
      validate: function (value) {
        if (value.length > 500) return 'Los comentarios no pueden exceder 500 caracteres.';
        return '';
      }
    }
  };

  function showError(fieldName, message) {
    var group = fields[fieldName].input.closest('.form-group');
    var errorEl = group.querySelector('.form-error');
    if (message) {
      group.classList.add('form-group--error');
      errorEl.textContent = message;
    } else {
      group.classList.remove('form-group--error');
      errorEl.textContent = '';
    }
  }

  function validateField(fieldName) {
    var field = fields[fieldName];
    var error = field.validate(field.input.value);
    showError(fieldName, error);
    return !error;
  }

  function validateAll() {
    var isValid = true;
    Object.keys(fields).forEach(function (name) {
      if (!validateField(name)) isValid = false;
    });
    return isValid;
  }

  function setMinDate() {
    var fechaInput = fields.fecha.input;
    if (!fechaInput) return;
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    fechaInput.setAttribute('min', yyyy + '-' + mm + '-' + dd);
  }

  Object.keys(fields).forEach(function (name) {
    var field = fields[name];
    field.input.addEventListener('blur', function () {
      validateField(name);
    });
    field.input.addEventListener('input', function () {
      if (field.input.closest('.form-group').classList.contains('form-group--error')) {
        validateField(name);
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateAll()) {
      var firstError = form.querySelector('.form-group--error input, .form-group--error select, .form-group--error textarea');
      if (firstError) firstError.focus();
      return;
    }

    form.classList.add('reservation-form--hidden');
    if (successMessage) {
      successMessage.classList.add('form-success--visible');
    }
  });

  setMinDate();
})();
