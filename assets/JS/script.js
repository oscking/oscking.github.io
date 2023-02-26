window.addEventListener('scroll', function() {
    var button = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
  
  var button = document.querySelector('.back-to-top');
  
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });



const form = document.querySelector('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenimos que se envíe el formulario por defecto

  // Obtenemos los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validamos que los campos no estén vacíos
  if (!name || !email || !message) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Creamos un objeto con los datos a enviar
  const data = {
    name,
    email,
    message
  };

  // Creamos una solicitud AJAX con la librería Fetch
  fetch('tu-script-php.php', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.');
    }
    alert('Tu mensaje ha sido enviado con éxito.');
    form.reset(); // Limpiamos el formulario
  })
  .catch(error => alert(error.message));
});
