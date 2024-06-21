import { addElement } from '../../utils/utilits';
import './Pagination.css';

export default function Pagination(currentPage, arrLength, changePage) {
  const paginationWrapper = addElement('div', 'pagination');

  let count = 1;
  while (count <= Math.ceil(arrLength / 5)) {
    const paginationNumber = addElement('div', 'pagination__number', count);
    if (count === currentPage) {
      paginationNumber.classList.add('pagination__nubmer--active');
    } else {
      paginationNumber.addEventListener('click', () => {
        changePage(+paginationNumber.textContent);
      });
    }
    paginationWrapper.append(paginationNumber);
    count += 1;
  }

  return paginationWrapper;
}
