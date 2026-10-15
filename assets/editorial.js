/* Progressive enhancement only: navigation, product links and details work without JS. */
(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  const reveal = (element) => {
    element.classList.remove('reveal-pending');
    element.classList.add('reveal-visible');
    observer?.unobserve(element);
  };
  const revealAll = () => {
    observer?.disconnect();
    document.querySelectorAll('[data-reveal]').forEach(reveal);
  };
  const initialize = () => {
    if (!document.body.hasAttribute('data-reveals-enabled') || preference.matches || window.Shopify?.designMode || !('IntersectionObserver' in window)) {
      revealAll();
      return;
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal(entry.target);
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('[data-reveal]').forEach((element) => {
      // Avoid animating anything already visible on first paint or anchor navigation.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('reveal-pending');
      observer.observe(element);
    });
  };
  try { initialize(); } catch { revealAll(); }
  preference.addEventListener('change', revealAll);
  // Keyboard users must never focus an invisible product link.
  document.addEventListener('focusin', (event) => {
    const target = event.target.closest('[data-reveal]');
    if (target) reveal(target);
  });
  document.addEventListener('shopify:section:load', revealAll);
  document.addEventListener('shopify:block:select', (event) => {
    const details = event.target.closest('details');
    if (details) details.open = true;
  });
})();
