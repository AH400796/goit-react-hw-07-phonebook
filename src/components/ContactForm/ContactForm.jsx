import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {
  AddingForm,
  InputLabel,
  Button,
  Input,
  ErrWrapper,
} from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const initialsValues = {
  name: '',
  phone: '',
};

const FormSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  phone: yup.string().min(13).max(13).phone('UA').required(),
});

export default function ContactForm() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmitForm = (values, { resetForm }) => {
    const existingUsers = contacts.map(contact => contact.name);

    if (existingUsers.includes(values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialsValues}
      onSubmit={handleSubmitForm}
      validationSchema={FormSchema}
    >
      {props => (
        <AddingForm>
          <InputLabel>
            Name
            <Input type="text" name="name" placeholder="Andrii Hokhman" />
            <ErrWrapper>
              <ErrorMessage name="name" />
            </ErrWrapper>
          </InputLabel>
          <InputLabel>
            Phonenumber
            <Input type="tel" name="phone" placeholder="+380XXXXXXXXX" />
            <ErrWrapper>
              <ErrorMessage name="phone" />
            </ErrWrapper>
          </InputLabel>
          <Button
            type="submit"
            disabled={
              (props.values.name !== '') & (props.values.phone !== '')
                ? false
                : true
            }
          >
            Add contact
          </Button>
        </AddingForm>
      )}
    </Formik>
  );
}
