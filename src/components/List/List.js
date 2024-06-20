import { addElement } from '../../utils/utilits';
import ListItem from '../ListItem/ListItem';
import './List.css';

const headerFields = [
  'Имя пользователя',
  'E-mail',
  'Дата регистрации',
  'Рейтинг',
];

export default function List(currentData, page, deleteItem) {
  const start = (page - 1) * 5;
  const end = start + 5;
  const data = currentData.slice(start, end);

  const listElem = addElement('div', 'list');
  const listHeader = addElement('div', 'list-header');

  headerFields.forEach((el) => {
    const headerField = addElement('div');
    headerField.textContent = el;
    listHeader.append(headerField);
  });

  listElem.append(listHeader);

  if (data) {
    data.forEach((el) => {
      listElem.append(ListItem(el, deleteItem));
    });
  }

  return listElem;
}
