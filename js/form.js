const form = document.getElementById('contact-form');
let text = document.getElementById('ui-text'),
name = document.getElementById('namef'),
email = document.getElementById('emailf'),
msg = document.getElementById('mensajef'),
emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

form.addEventListener('submit', e => {
    e.preventDefault();
    if (emailRegex.test(email.value)) {
        if (name.value.trim() && email.value.trim() && msg.value.trim()) {
            text.innerText = "Mensaje enviado satisfactoriamente, nos pondremos en contacto contigo a la brevedad !";
            setInterval(() => {
                form.submit();
            }, 3500);
        } else {
            text.innerText = "Ingrese los datos correctamente, todos los campos son obligatorios !";
        }
    } else {
        text.innerText = "Ingrese un Email válido !";
    }
});
