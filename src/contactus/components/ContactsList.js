import React from 'react';

import ContactItem from './ContactItem';
import Card from '../../shared/components/UIElements/Card';
import './ContactsList.css';

const ContactsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No contacts found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className='contacts-list'>
      {props.items.map((contacts) => (
        <ContactItem
          //key={user.id}
          //id={user.id}
          //image={user.image}
          name={contacts.name}
          //placeCount={user.places.length}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
