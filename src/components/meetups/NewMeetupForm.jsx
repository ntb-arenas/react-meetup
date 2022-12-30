import React from "react";
import Card from "../ui/Card";

const NewMeetupForm = () => {
  return (
    <Card>
      <form className="p-1">
        <div className="mb-1">
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className="mb-1">
          <label htmlFor="address">Meetup address</label>
          <input type="url" required id="address" />
        </div>
        <div className="mb-1">
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" />
        </div>
        <div className="mb-1">
          <label htmlFor="description">Meetup description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className="mb-1">
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
