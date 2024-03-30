import { IoCall, IoPersonSharp } from 'react-icons/io5';
import css from '../contact/contact.module.css';
const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <div className={css['contactCont']}>
      <ul className={css['ul']}>
        <li className={css['contact']}>
          <IoPersonSharp className={css['svg']} size="18" />
          {name}
        </li>
        <li>
          <IoCall className={css['svg']} size="18" />
          {number}
        </li>
      </ul>
      <button
        className={css['buttonDelete']}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
