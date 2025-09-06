window.addEventListener('resize', () => {
  if (window.innerWidth <= 640) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
});
if (window.innerWidth <= 640) {
  document.body.style.overflow = 'auto';
}