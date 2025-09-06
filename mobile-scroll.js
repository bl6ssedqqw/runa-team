function updateScroll() {
  document.body.style.overflow = window.innerWidth <= 640 ? 'auto' : 'hidden';
}
window.addEventListener('resize', updateScroll);
updateScroll();
