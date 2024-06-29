document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("music-player-on-the-top-modal");
  const closeButton = document.querySelector(".music-player-on-the-top-close-button");
  const playButtons = document.querySelectorAll(".music-player-on-the-top-loader");
  const openButton = document.getElementById("open-music-player-on-the-top");
  let currentAudio = null;
  let isDragging = false;
  let offsetX, offsetY;

  function openModal() {
    modal.classList.remove('music-player-on-the-top-hidden');
  }

  function closeModal() {
    modal.classList.add('music-player-on-the-top-hidden');
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    playButtons.forEach(button => {
      button.classList.remove('playing');
    });
  }

  closeButton.addEventListener('click', closeModal);

  playButtons.forEach(button => {
    button.addEventListener('click', function() {
      const song = this.getAttribute('data-song');
      if (currentAudio) {
        currentAudio.pause();
      }
      currentAudio = new Audio(song);
      currentAudio.play();

      playButtons.forEach(button => {
        button.classList.remove('playing');
      });

      this.classList.add('playing');
    });
  });

  openButton.addEventListener('click', openModal);

  modal.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - modal.getBoundingClientRect().left;
    offsetY = e.clientY - modal.getBoundingClientRect().top;
    modal.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      modal.style.left = `${e.clientX - offsetX}px`;
      modal.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
    modal.style.cursor = 'grab';
  });
});
