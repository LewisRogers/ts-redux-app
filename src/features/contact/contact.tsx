import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { createContact, selectContact, initialState} from './contactSlice';

export function ContactCard() {
    const count = useAppSelector(selectContact);
    const dispatch = useAppDispatch();
    const [contactData, setContactData] = useState(initialState);

    return (
        <div>

        </div>
    );
}
