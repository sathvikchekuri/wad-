document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('status');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = function() {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
              status.innerHTML = 'Message sent successfully!';
              status.style.color = 'green';
              form.reset();
          } else {
              status.innerHTML = 'Failed to send message. Please try again later.';
              status.style.color = 'red';
          }
      };
      xhr.send(formData);
  });
});
