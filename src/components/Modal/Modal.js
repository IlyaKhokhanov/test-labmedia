import { addElement } from '../../utils/utilits';
import './Modal.css';

export default function Modal(id, deleteItem) {
  const overlay = addElement('div', 'overlay');
  overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
      overlay.remove();
      document.body.style.overflow = '';
    }
  });

  const modal = addElement('div', 'modal');
  const modalText = addElement(
    'div',
    'modal__text',
    'Вы уверены, что хотите удалить пользователя?',
  );

  const modalBtnWrapper = addElement('div', 'modal-btn__wrapper');

  const modalBtnDelete = addElement('button', 'modal-btn__delete', 'Да');
  modalBtnDelete.addEventListener('click', () => {
    deleteItem(id);
    overlay.remove();
    document.body.style.overflow = '';
  });

  const modalBtnClose = addElement('button', 'modal-btn__close', 'Нет');
  modalBtnClose.addEventListener('click', () => {
    overlay.remove();
    document.body.style.overflow = '';
  });

  modalBtnWrapper.append(modalBtnDelete, modalBtnClose);
  modal.append(modalText, modalBtnWrapper);
  overlay.append(modal);
  document.body.append(overlay);
  document.body.style.overflow = 'hidden';
}
