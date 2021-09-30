import { ContactItem } from "./contactContext";

interface AddToContactsAction {
  type: "add-to-contacts";
  payload: ContactItem;
}
interface RemoveFromContactsAction {
  type: "remove-from-contacts";
  payload: ContactItem;
}
interface ClearContactsAction {
  type: "clear-contacts";
}

export type ContactAction =
  | AddToContactsAction
  | RemoveFromContactsAction
  | ClearContactsAction;

function contactReducer(state: ContactItem[], action: ContactAction) {
  switch (action.type) {
    case "add-to-contacts": {
      const nextContact = [...state];
      const contactItem = action.payload;
      //console.log("VI är inne i add. Wooop Wooop")

      const index = state.findIndex(
        (contact) => contact.contactId === contactItem.contactId
      );
      if (index === -1) {
        nextContact.push(contactItem);
      }
      //else {
      //   const newContact = { ...state[index] };
      //   newContact.contactName += contactItem.contactName;
      //   nextContact.splice(index, 1, newContact);
      // }

      return nextContact;
    }
    case "remove-from-contacts": {
      const nextContact = [...state];
      const contactItem = action.payload;
      //console.log("VI är inne i remove.")

      const index = state.findIndex(
        (contact) => contact.contactId === contactItem.contactId
      );

      if (index >= 0) {
        nextContact.filter(
          (contact) => contact.contactId === contactItem.contactId
        );
      }

      return nextContact;
    }
    case "clear-contacts": {
      return [];
    }
    default: {
      exhaustiveCheck(action);
      return state;
    }
  }
}

export default contactReducer;

function exhaustiveCheck(param: never) {}
