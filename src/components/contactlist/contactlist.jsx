import Contact from '../contact/contact';
import css from '../contactlist/contactlist.module.css';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css['contactlistBox']}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default ContactList;
