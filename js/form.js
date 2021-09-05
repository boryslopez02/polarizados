const form = document.getElementById('contact-form');
let text = document.getElementById('ui-text'),
textSend = document.getElementById('ui-text2'),
textError = document.getElementById('ui-text3'),
textErrorEmail = document.getElementById('ui-text4'),
name = document.getElementById('namef'),
email = document.getElementById('emailf'),
msg = document.getElementById('mensajef'),
emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

form.addEventListener('submit', e => {
    e.preventDefault();
    text.style.display = 'none';
    if (emailRegex.test(email.value)) {
        if (name.value.trim() && email.value.trim() && msg.value.trim()) {
            textSend.style.display = 'block';
            setInterval(() => {
                form.submit();
            }, 3500);
        } else {
            name.value='';
            email.value='';
            msg.value = '';
            textError.style.display = 'block';
        }
    } else {
        name.value='';
        email.value='';
        msg.value = '';
        textErrorEmail.style.display = 'block';
    }
});
