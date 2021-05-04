import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { createContact, selectContact} from './contactSlice';

export function ContactCard() {
    const contact = useAppSelector(selectContact);
    const dispatch = useAppDispatch();

    return (
        <div>
            <p> First name : { contact.firstName } </p>
            <p> Last name: { contact.lastName } </p>
            <p> Telephone: { contact.phone }</p>
            <p> Business: { contact.work ? "Yes" : "No"}</p>
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
