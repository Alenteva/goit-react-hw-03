import Contact from '../contact/contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};
export default ContactList;
