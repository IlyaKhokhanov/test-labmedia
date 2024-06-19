import addElement from '../../utils/utilits';
import './Sort.css';

export default function Sort() {
  const sortElem = addElement('div', 'sort');

  const sortText = addElement('div', 'sort-text', 'Сортировка:');

  const sortRegistration = addElement('div', 'sort-item', 'Дата регистрации');

  const sortRating = addElement('div', 'sort-item', 'Рейтинг');

  sortElem.append(sortText, sortRegistration, sortRating);
  return sortElem;
}
