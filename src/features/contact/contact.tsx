import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { createContact, selectContact} from './contactSlice';

export function ContactCard() {
    const contact = useAppSelector(selectContact);
    const dispatch = useAppDispatch();
    const [contactData, setContactData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        phone: '',
        work: false,
    });

    return (
        <div>
            <p> first name : { contact.firstName } </p>
            <p> last name: { contact.lastName } </p>
            <p></p>
            <button onClick={() => dispatch(createContact(
                {
                    id: '1',
                    firstName: 'Lewis',
                    lastName: 'Rogers',
                    phone: '07943588596',
                    work: false
                }
            ))}>
                Click to update
            </button>
        </div>
    );
}
