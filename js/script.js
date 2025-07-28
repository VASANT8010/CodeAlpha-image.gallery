let currentImageIndex = 0;
    let images = [];

    function openLightbox(element) {
      images = Array.from(document.querySelectorAll('.gallery-item'));
      currentImageIndex = images.indexOf(element);
      document.getElementById('lightbox-img').src = element.src;
      document.getElementById('lightbox').style.display = 'flex';
    }

    function closeLightbox() {
      document.getElementById('lightbox').style.display = 'none';
    }

    function changeImage(direction) {
      currentImageIndex += direction;
      if (currentImageIndex < 0) currentImageIndex = images.length - 1;
      if (currentImageIndex >= images.length) currentImageIndex = 0;
      document.getElementById('lightbox-img').src = images[currentImageIndex].src;
    }

    function filterImages(category) {
      const allImages = document.querySelectorAll('.gallery-item');
      allImages.forEach(img => {
        if (category === 'all' || img.classList.contains(category)) {
          img.style.display = 'inline';
        } else {
          img.style.display = 'none';
        }
      });
    }