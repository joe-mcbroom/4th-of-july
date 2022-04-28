import { useState, Fragment, useEffect, useRef } from 'react';
import RSVPForm from '../components/RSVPForm';
import RSVPConfirmation from '../components/RSVPConfirmation';
const RSVP = () => {
  const [showForm, setShowForm] = useState(true);
  const toggleForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  return (
    <>
      {showForm ? (
        <RSVPForm id="rsvp-form" clickEvent={(e) => toggleForm(e)} />
      ) : (
        <RSVPConfirmation
          id="rsvp-confirmation"
          clickEvent={(e) => toggleForm(e)}
        />
      )}
    </>
  );
};

export default RSVP;
