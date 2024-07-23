document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
    
    document.getElementById('addPhotoButton').addEventListener('click', function() {
        const imageUrl = prompt('Enter the URL of the image:');
        const altText = prompt('Enter the alt text for the image:');

        if (imageUrl && altText) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = altText;
            document.querySelectorAll('.gallery').forEach(gallery => {
                gallery.appendChild(img.cloneNode());
            });
        } else {
            alert('Both the image URL and alt text are required.');
        }
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}
