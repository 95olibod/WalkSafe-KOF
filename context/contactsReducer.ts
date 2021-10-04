import { ContactItem } from "./contactContext";

interface AddToContactsAction {
    type: "add-to-contacts";
    payload: ContactItem;
}
interface RemoveFromContactsAction {
    type: "remove-from-contacts";
    payload: ContactItem;
}

export type ContactAction = AddToContactsAction | RemoveFromContactsAction;

function contactReducer(contact: ContactItem[], action: ContactAction) {
    switch (action.type) {
        case "add-to-contacts": {
            const nextContact = [...contact];
            const contactItem = action.payload;

            const index = contact.findIndex(
                (contact) => contact.contactId === contactItem.contactId
            );
            if (index === -1) {
                nextContact.push(contactItem);
            }

            return nextContact;
        }
        case "remove-from-contacts": {
            const nextContact = [...contact];
            const contactItem = action.payload;

            const searchedContact = contact.find(
                (contact) => contact.contactId === contactItem.contactId
            );

            if (searchedContact) {
                return nextContact.filter(
                    (contact) => contact.contactId !== contactItem.contactId
                );
            }
        }
        default: {
            return contact;
        }
    }
}

export default contactReducer;
