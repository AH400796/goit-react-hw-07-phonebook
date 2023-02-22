import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Wrapper, Title, ContactsWrapper, LoaderWrapper } from './App.styled';
import Loader from '../Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts:</Title>
      <ContactsWrapper>
        <Filter />

        <ContactList />
        {isLoading && !error && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
      </ContactsWrapper>
    </Wrapper>
  );
}
