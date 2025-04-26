import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './ContactItem.css';

const ContactItem = (props) => {
  return (
    <li className='contact-item'>
      <Card className='contact-item__content'>
        <Link to={`/${props.id}/places`}>
          <div className='contact-item__info'>
            <h2>{props.name}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default ContactItem;
