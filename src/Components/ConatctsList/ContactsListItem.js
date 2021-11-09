import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

function ContactsListItem({ contacts, deleteContact }) {
  return contacts.map(el => {
    return (
      <li key={el.id}>
        {el.name}: {el.number}
        <button
          className="button"
          type="button"
          id={el.id}
          onClick={e => {
            deleteContact(e.target.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
}

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactsListItem);
