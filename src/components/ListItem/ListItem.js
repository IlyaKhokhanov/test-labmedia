import { addElement, formatDate } from '../../utils/utilits';
import deleteIcon from '../../assets/images/delete-icon.svg';
import './ListItem.css';
import Modal from '../Modal/Modal';

export default function ListItem(item, deleteItem) {
  if (item) {
    const itemWrapper = addElement('div', 'item');

    const nameItem = addElement('div', 'item-name', item.username);
    const emailItem = addElement('div', 'item-field', item.email);
    const dateItem = addElement(
      'div',
      'item-field',
      formatDate(item.registration_date),
    );
    const ratingItem = addElement('div', 'item-rating', item.rating);

    const deleteBtn = addElement('button', 'item-delete-btn');
    const deleteImg = addElement('img', 'item-delete-img');
    deleteImg.src = deleteIcon;
    deleteImg.alt = 'Delete';

    deleteBtn.addEventListener('click', () => Modal(item.id, deleteItem));

    deleteBtn.append(deleteImg);
    ratingItem.append(deleteBtn);
    itemWrapper.append(nameItem, emailItem, dateItem, ratingItem);

    return itemWrapper;
  }
}
