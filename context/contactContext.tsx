import React, { createContext, FC, useContext, useReducer } from "react";
import contactReducer, { ContactAction } from "./contactsReducer";

export interface ContactItem {
  contactId: string;
  contactName: string;
  phoneNumber: string;
}

interface ContextValue {
  favouriteContacts: ContactItem[];
  dispatch: React.Dispatch<ContactAction>;
}

const ContactContext = createContext<ContextValue>({} as any);

const ContactsProvider: FC = ({ children }) => {
  
  //Define state
  const [favouriteContacts, dispatch] = useReducer(contactReducer, []);
  return (
    <ContactContext.Provider
      value={{
        favouriteContacts,
        dispatch,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
export const useContacts = () => useContext(ContactContext);
export default ContactsProvider;
