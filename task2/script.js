function showImages() {
    const fileInput = document.getElementById('fileInput').value.trim();
    let files;

    try {
        files = JSON.parse(fileInput);

        if (!Array.isArray(files)) {
            throw new Error('Введіть масив файлів у форматі JSON');
        }

        const gallery = document.getElementById('imageGallery');
        gallery.innerHTML = '';

        files.forEach(file => {
            const img = document.createElement('img');
            img.src = file.trim();
            img.classList.add('thumbnail');


            img.addEventListener('click', () => {
                const lightbox = document.getElementById('lightbox');
                const fullImg = document.getElementById('fullImage');
                fullImg.src = file.trim();
                lightbox.style.display = 'flex';
            });

            gallery.appendChild(img);
        });
    } catch (error) {
        alert(error.message);
    }
}


window.addEventListener('click', (event) => {
    const lightbox = document.getElementById('lightbox');
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});