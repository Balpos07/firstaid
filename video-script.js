// JavaScript to handle modal video playing
document.querySelectorAll('.video-thumbnail').forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    const videoUrl = this.getAttribute('href');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    modalVideo.src = videoUrl.replace('watch?v=', 'embed/');
    videoModal.style.display = 'block';
  });
});

// Close the modal
document.querySelector('.close').addEventListener('click', function() {
  const videoModal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');

  videoModal.style.display = 'none';
  modalVideo.src = ''; // Stop the video
});