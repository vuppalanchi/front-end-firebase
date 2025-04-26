import React, { useEffect, useState } from 'react';

import ContactsList from '../components/ContactsList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Contacts =() => {

const { isLoading, error, sendRequest, clearError } = useHttpClient();
const [loadedContacts, setLoadedContacts] = useState();

useEffect(() => {
    const fetchContacts = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/contacts/getAllContacts`
        );

        setLoadedContacts(responseData.contacts);
      } catch (err) {}
    };

    fetchContacts();
  }, [sendRequest]);

/*
const loadedContacts = [{"name":"Upender"},
                        {"name":"Keerthi"},
                        {"name":"Thrishika"},
                        {"name":"Siwapriyaa"},
                       ];
*/
                       

   // return (<h1>
   //     <div>Contact 1 </div>
   //     <div>Contact 2 </div>

   // </h1>
   // )


    return (
        <React.Fragment>
          <ErrorModal error={error} onClear={clearError} />
          {isLoading && (
            <div className='center'>
              <LoadingSpinner />
            </div>
          )}
          {!isLoading && loadedContacts && <ContactsList items={loadedContacts} />}
        </React.Fragment>
      );
    


    
};

export default Contacts;