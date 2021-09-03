let galleryTabs = document.querySelectorAll('#gallery img'),
imgModal = document.getElementById('imgModal');

galleryTabs.forEach(tab => {
    tab.addEventListener('click', e => {
        imgModal.src = e.target.getAttribute('src');
    });
});