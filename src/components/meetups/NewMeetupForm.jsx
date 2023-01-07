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
    <div className="flex justify-center">
      <form className="p-5 border w-[30rem] bg-white" onSubmit={submitHandler}>
        <div className="flex flex-col mb-1">
          <label htmlFor="title">Meetup Title</label>
          <input className="border border-black " type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className="flex flex-col mb-1">
          <label htmlFor="image">Meetup Image</label>
          <input className="border border-black " type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className="flex flex-col mb-1">
          <label htmlFor="address">Meetup address</label>
          <input className="border border-black " type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className="flex flex-col mb-1">
          <label htmlFor="description">Meetup description</label>
          <textarea className="border border-black" id="description" required rows="5" ref={descInputRef}></textarea>
        </div>
        <div className="p-5 text-center">
          <button className="px-5 py-2 text-white bg-red-600 border rounded-full">Add Meetup</button>
        </div>
      </form>
    </div>
  );
};

export default NewMeetupForm;
