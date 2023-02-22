import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Wrapper, Title, ContactsWrapper } from './App.styled';

export default function App() {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts:</Title>
      <ContactsWrapper>
        <Filter />
        <ContactList />
      </ContactsWrapper>
    </Wrapper>
  );
}
