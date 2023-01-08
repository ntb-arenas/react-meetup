import { useContext } from "react";

import React from "react";
import Card from "../ui/Card";

import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className="max-w-[30rem] mx-auto p-5">
      <Card>
        <img src={props.image} className="rounded-t-lg" alt="" />
        <div className="p-3">
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className="p-5 text-center">
          <button className="px-5 py-2 text-white bg-red-600 border rounded-full" onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
