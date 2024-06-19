export default function addElement(tagName, className, text) {
  const elem = document.createElement(tagName);
  if (className) elem.classList.add(className);
  if (text) elem.textContent = text;
  return elem;
}
