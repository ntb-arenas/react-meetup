import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="flex justify-around p-5 text-white bg-red-800">
      <div className="flex items-center text-2xl font-bold">React Meetups</div>

      <nav className="flex items-center">
        <ul className="flex">
          <li className="px-2">
            <Link to="/">All Meetups</Link>
          </li>
          <li className="px-2">
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li className="px-2">
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
