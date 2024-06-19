import { addElement } from '../../utils/utilits';
import './Pagination.css';

const pages = 10;

export default function Pagination() {
  const paginationWrapper = addElement('div', 'pagination');
  const activePage = 1;

  let count = 1;
  while (count <= pages) {
    const paginationNumber = addElement('div', 'pagination-number', count);
    if (count === activePage) {
      paginationNumber.classList.add('pagination-nubmer-active');
    }
    paginationWrapper.append(paginationNumber);
    count += 1;
  }

  return paginationWrapper;
}
