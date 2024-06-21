import ListItem from '../ListItem/ListItem';
import { addElement } from '../../utils/utilits';
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
  const listHeader = addElement('div', 'list__header');

  headerFields.forEach((el) => {
    const headerField = addElement('div');
    headerField.textContent = el;
    listHeader.append(headerField);
  });

  listElem.append(listHeader);

  if (currentData.length) {
    data.forEach((el) => {
      listElem.append(ListItem(el, deleteItem));
    });
  } else {
    const emptyList = addElement('div', 'empty__list', 'Список пустой');
    listElem.append(emptyList);
  }

  return listElem;
}
