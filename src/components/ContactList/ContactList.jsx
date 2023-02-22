import ContactListItem from 'components/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  console.log(filterValue);
  const visibleContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <List>
      {visibleContacts.length !== 0 &&
        visibleContacts.map(contact => {
          const { name, id, number } = contact;
          return (
            <ContactListItem key={id} id={id} name={name} number={number} />
          );
        })}
    </List>
  );
}
