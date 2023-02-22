import PropTypes from 'prop-types';
import {
  ListItem,
  UserWrapper,
  Wrapper,
  NumberWrapper,
  ListItemButton,
} from './ContactListItem.styled';
import { TiUser, TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function ContactListItem({ name, phone, id }) {
  const dispatch = useDispatch();

  return (
    <UserWrapper>
      <Wrapper>
        <TiUser size={25} color={'darkpurple'} />
        <ListItem>{name}:</ListItem>
      </Wrapper>
      <NumberWrapper>
        <ListItem>{phone}</ListItem>
        <ListItemButton
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          <TiDelete size={25} color={'black'} />
        </ListItemButton>
      </NumberWrapper>
    </UserWrapper>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
