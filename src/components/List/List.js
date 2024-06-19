import { addElement } from '../../utils/utilits';
import ListItem from '../ListItem/ListItem';
import './List.css';

const headerFields = [
  'Имя пользователя',
  'E-mail',
  'Дата регистрации',
  'Рейтинг',
];

export default function List(listItems) {
  const listElem = addElement('div', 'list');

  const listHeader = addElement('div', 'list-header');

  headerFields.forEach((el) => {
    const headerField = addElement('div');
    headerField.textContent = el;
    listHeader.append(headerField);
  });

  listElem.append(listHeader);

  listItems.forEach((el) => {
    listElem.append(ListItem(el));
  });

  return listElem;
}
