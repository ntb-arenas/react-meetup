import MeetupItem from "./MeetupItem";
import React from "react";

const MeetupList = (props) => {
  return (
    <ul className="grid grid-cols-3">
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} description={meetup.description} address={meetup.address} />
      ))}
    </ul>
  );
};

export default MeetupList;
