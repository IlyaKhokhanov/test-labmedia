function addElement(tagName, className, text) {
  const elem = document.createElement(tagName);
  if (className) elem.classList.add(className);
  if (text) elem.textContent = text;
  return elem;
}

function fetchData() {
  return fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/user')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
}

function formatDate(date) {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();

  return `${String(day).padStart(2, '0')}.${String(month).padStart(
    2,
    '0',
  )}.${String(year).substring(2)}`;
}

export { addElement, fetchData, formatDate };
