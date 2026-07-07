const currentPage = document.body.dataset.page;

document.querySelectorAll('[data-nav]').forEach((link) => {
  if (link.dataset.nav === currentPage) {
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'page');
  }
});

document.querySelectorAll('video[data-fallback]').forEach((video) => {
  const fallback = document.getElementById(video.dataset.fallback);
  const hideFallback = () => {
    if (fallback && video.currentSrc) fallback.style.display = 'none';
  };
  const showFallback = () => {
    if (fallback) fallback.style.display = 'grid';
  };

  video.addEventListener('loadedmetadata', hideFallback);
  video.addEventListener('error', showFallback, true);
});
