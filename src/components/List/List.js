import addElement from '../../utils/utilits';
import ListItem from '../ListItem/ListItem';
import './List.css';

const headerFields = [
  'Имя пользователя',
  'E-mail',
  'Дата регистрации',
  'Рейтинг',
];

const listItems = [
  {
    id: 5150,
    username: 'sfsdfsdfsdf sdfsdf',
    email: 'sdfsdf@kjkj.fdg',
    registration_date: '21.04.1994',
    rating: 5,
  },
  {
    id: 3545,
    username: 'sfsdfsdfsdf sdfsdf',
    email: 'sdfsdf@kjkj.fdg',
    registration_date: '21.04.1994',
    rating: 5,
  },
  {
    id: 345345,
    username: 'sfsdfsdfsdf sdfsdf',
    email: 'sdfsdf@kjkj.fdg',
    registration_date: '21.04.1994',
    rating: 5,
  },
];

export default function List() {
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
