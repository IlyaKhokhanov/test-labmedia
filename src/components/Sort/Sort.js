import { addElement } from '../../utils/utilits';
import './Sort.css';

export default function Sort(sort, sortList) {
  const sortElem = addElement('div', 'sort');

  const sortText = addElement('div', 'sort__text', 'Сортировка:');

  const sortRegistration = addElement('div', 'sort__item', 'Дата регистрации');
  if (sort === 'ascDate' || sort === 'descDate') {
    sortRegistration.classList.add('sort__item--active');
  }
  sortRegistration.addEventListener('click', () => {
    if (sort === 'ascDate') {
      sortList('descDate');
    } else {
      sortList('ascDate');
    }
  });

  const sortRating = addElement('div', 'sort__item', 'Рейтинг');
  if (sort === 'ascRating' || sort === 'descRating') {
    sortRating.classList.add('sort__item--active');
  }
  sortRating.addEventListener('click', () => {
    if (sort === 'ascRating') {
      sortList('descRating');
    } else {
      sortList('ascRating');
    }
  });

  sortElem.append(sortText, sortRegistration, sortRating);
  return sortElem;
}
