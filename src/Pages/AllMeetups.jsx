import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupsData, setMeetupsData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://react-meetup-7372e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`)
      .then((res) => res.json())
      .then((data) => {
        const meetup = [];

        for (const key in data) {
          meetup.push({ id: key, ...data[key] });
        }

        setIsLoading(false);
        setMeetupsData(meetup);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1 className="p-5 text-3xl font-bold text-center text-gray-700">All Meetups</h1>
      <MeetupList meetups={meetupsData} />
    </section>
  );
};

export default AllMeetupsPage;
