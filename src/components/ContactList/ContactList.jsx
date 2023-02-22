import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const visibleContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <List>
      {visibleContacts.length !== 0 &&
        visibleContacts.map(contact => {
          const { name, id, phone } = contact;
          return <ContactListItem key={id} id={id} name={name} phone={phone} />;
        })}
    </List>
  );
}
