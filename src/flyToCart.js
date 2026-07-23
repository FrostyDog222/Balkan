// Spawns a small element that animates from the clicked button to the cart icon.
export default function flyToCart(sourceEl) {
  if (typeof window === "undefined" || !sourceEl) return;
  const target = document.getElementById("cart-target");
  if (!target) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) {
    bumpCart(target);
    return;
  }

  const start = sourceEl.getBoundingClientRect();
  const end = target.getBoundingClientRect();

  const dot = document.createElement("span");
  dot.className = "fly-dot";
  const startX = start.left + start.width / 2;
  const startY = start.top + start.height / 2;
  const endX = end.left + end.width / 2;
  const endY = end.top + end.height / 2;

  dot.style.left = `${startX}px`;
  dot.style.top = `${startY}px`;
  document.body.appendChild(dot);

  const dx = endX - startX;
  const dy = endY - startY;

  // Force a reflow so the initial position is applied before we animate.
  // eslint-disable-next-line no-unused-expressions
  dot.getBoundingClientRect();

  requestAnimationFrame(() => {
    dot.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(0.2)`;
    dot.style.opacity = "0.35";
  });

  const cleanup = () => {
    dot.remove();
    bumpCart(target);
  };
  dot.addEventListener("transitionend", cleanup, { once: true });
  setTimeout(cleanup, 900); // safety net
}

function bumpCart(target) {
  target.classList.remove("cart-bump");
  // Restart the animation.
  // eslint-disable-next-line no-unused-expressions
  void target.offsetWidth;
  target.classList.add("cart-bump");
  target.addEventListener(
    "animationend",
    () => target.classList.remove("cart-bump"),
    { once: true }
  );
}
