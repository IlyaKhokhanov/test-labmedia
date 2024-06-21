import { addElement } from '../../utils/utilits';
import './Error.css';

export default function Error() {
  const error = addElement('div', 'error');
  const headerError = addElement(
    'div',
    'error__header',
    'Упс... что-то пошло не так',
  );
  const textError = addElement(
    'div',
    'error__text',
    'Приносим свои извенеия, уже работаем над ошибкой.',
  );
  const descError = addElement(
    'div',
    'error__text',
    'Попробуйте зайти через некоторое время!',
  );

  error.append(headerError, textError, descError);

  return error;
}
