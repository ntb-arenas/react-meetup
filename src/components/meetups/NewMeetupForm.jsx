import React, { useRef } from "react";
import Card from "../ui/Card";

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descInputRef.current.value,
    };

    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className="p-5" onSubmit={submitHandler}>
        <div className="mb-1">
          <label htmlFor="title">Meetup Title</label>
          <input className="ml-5 border border-black" type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className="mb-1">
          <label htmlFor="image">Meetup Image</label>
          <input className="ml-5 border border-black" type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className="mb-1">
          <label htmlFor="address">Meetup address</label>
          <input className="ml-5 border border-black" type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className="mb-1">
          <label htmlFor="description">Meetup description</label>
          <textarea className="border border-black" id="description" required rows="5" ref={descInputRef}></textarea>
        </div>
        <div className="mb-1">
          <button className="px-5 py-2 border ">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
