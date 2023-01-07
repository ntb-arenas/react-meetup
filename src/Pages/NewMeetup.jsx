import NewMeetupForm from "../components/meetups/NewMeetupForm";
import React from "react";
import { useHistory } from "react-router-dom";

const NewMeetupPage = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://react-meetup-7372e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetupData),
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
