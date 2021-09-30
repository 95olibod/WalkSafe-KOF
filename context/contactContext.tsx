import React, { createContext, FC, useContext, useReducer } from "react";
import contactReducer, { ContactAction } from "./contactsReducer";

export interface ContactItem {
  contactId: string;
  contactName: string;
  phoneNumber?: string;
}

interface ContextValue {
  favoriteContacts: ContactItem[];
  dispatch: React.Dispatch<ContactAction>;
}

const ContactContext = createContext<ContextValue>({} as any);

const ContactsProvider: FC = ({ children }) => {
  
  //Define state
  const [favoriteContacts, dispatch] = useReducer(contactReducer, []);
  return (
    <ContactContext.Provider
      value={{
        favoriteContacts,
        dispatch,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
export const useContacts = () => useContext(ContactContext);
export default ContactsProvider;
