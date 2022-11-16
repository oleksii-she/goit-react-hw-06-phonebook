import { ContactsItem } from './contactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { List } from './contacts.styled';
import { deleteTask } from 'redux/phoneBookSlice';

export const ContactsList = () => {
  const dataList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  const FindContact = () => {
    const normalizedfilter = filter.toLowerCase();

    return dataList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  const contactsData = FindContact();

  return (
    <List>
      {contactsData.map(data => (
        <ContactsItem
          key={data.id}
          name={data.name}
          number={data.number}
          onClick={() => dispatch(deleteTask(data.id))}
        />
      ))}
    </List>
  );
};
