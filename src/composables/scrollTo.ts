export function scrollTo(selector: string) {
  const elem = document.querySelector(selector);

  if (!elem) return;

  elem.scrollIntoView({ behavior: 'smooth' });
}
