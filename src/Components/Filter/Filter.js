import { connect } from 'react-redux';

function Filter({ contacts, filter }) {
  const findUsers = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return findUsers().map(el => {
    return (
      <li key={el.id}>
        {el.name}: {el.number}
        <button
          className="button"
          type="button"
          id={el.id}
          onClick={this.props.deleteContact}
        >
          Delete
        </button>
      </li>
    );
  });
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    // filter: state.contacts.filter,
  };
};

export default connect(mapStateToProps, null)(Filter);
