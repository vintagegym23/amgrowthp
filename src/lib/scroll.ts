// Smooth-scrolls to a section and mirrors it in the URL (/#faq), so every section is linkable.
// replaceState keeps the back button from filling up with in-page jumps.
export const scrollToSection = (hash: string) => {
  const element = document.querySelector(hash);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth' });
  history.replaceState(null, '', hash);
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', window.location.pathname);
};
