import { IoCall, IoPersonSharp } from 'react-icons/io5';
const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <div>
      <ul>
        <li>
          <IoPersonSharp size="18" />
          {name}
        </li>
        <li>
          <IoCall size="18" />
          {number}
        </li>
      </ul>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
