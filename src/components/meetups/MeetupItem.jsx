import React from "react";
import Card from "../ui/Card";

const MeetupItem = (props) => {
  return (
    <li className="max-w-[40rem] p-5">
      <Card>
        <img src={props.image} className="rounded-t-lg" alt="" />
        <div className="p-3">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className="p-5 text-center">
          <button className="px-5 py-2 text-white bg-red-600 border rounded-full">To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
