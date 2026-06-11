// contact.js — Contact form validation for Ralph Cange's portfolio

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  if (!form) return;

  // Helper: show an error message under a field
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + 'Error');
    field.classList.add('input-error');
    error.textContent = message;
    error.style.display = 'block';
  }

  // Helper: clear error for a field
  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + 'Error');
    field.classList.remove('input-error');
    error.style.display = 'none';
  }

  // Clear errors on input so feedback is immediate
  ['name', 'email', 'subject', 'message'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', function () {
      clearError(id);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    // Name
    if (name === '') {
      showError('name', 'Please enter your name.');
      valid = false;
    } else if (name.length < 2) {
      showError('name', 'Name must be at least 2 characters.');
      valid = false;
    } else {
      clearError('name');
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      showError('email', 'Please enter your email address.');
      valid = false;
    } else if (!emailRegex.test(email)) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError('email');
    }

    // Subject
    if (subject === '') {
      showError('subject', 'Please enter a subject.');
      valid = false;
    } else {
      clearError('subject');
    }

    // Message
    if (message === '') {
      showError('message', 'Please write a message.');
      valid = false;
    } else if (message.length < 10) {
      showError('message', 'Message must be at least 10 characters.');
      valid = false;
    } else {
      clearError('message');
    }

    // If all valid, show success and reset
    if (valid) {
      form.reset();
      form.style.display = 'none';
      successMsg.style.display = 'block';
    }
  });
});
