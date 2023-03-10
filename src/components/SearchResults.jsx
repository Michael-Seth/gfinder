import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/alerts/AlertContext";
import UserCard from "./UserCard";
//import Alert from "./Alert";
import Preloader from "./Preloader";

function SearchResults() {
  const [search, setSearch] = useState("");
  const { users, loading, searchUsers, clearUsers } = useContext(GithubContext);

  const { setAlert } = useContext(AlertContext);

  //console.log(users);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    clearUsers();

    if (search === "") {
      setAlert("Please enter a github username.");
      // <Alert />;
    } else {
      searchUsers(search);
      setSearch("");
    }
  };

  let display;

  if (loading) {
    display = <Preloader />;
  }

  if (users.length > 0) {
    display = (
      <div>
        <br />
        <br />
        <h2
          style={{
            margin: "30px auto",
            textAlign: "center",
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          Search Result!
        </h2>
        <div className="user-result">
          {users.map((user) => (
            <Link to={`/user/${user.login}`} key={user.id}>
              <UserCard key={user.id} user={user} />
            </Link>
          ))}
        </div>
        <br />
        <div className="center-btn">
          <button
            className="bg-yellow px-6 py-4 rounded-sm hover:bg-black text-white hover:text-white"
            onClick={clearUsers}
          >
            Clear
          </button>
        </div>
      </div>
    );
  } else {
  }
  // if (!loading && users.length === 0) {
  //   display = <h1>Please search for a user</h1>;
  // }

  return (
    <div>
      <br />
      <br />
      <div className=" section-container flex h-[40vh] justify-around w-full">
        <div className=" ">
          <h1 className="mt-8 text-3xl md:text-5xl font-bold mb-4">
            Search <span style={{ color: "#0d35eb" }}>Your</span> Github User
          </h1>
          <p className="mb-8">Please enter your github username bellow </p>
          <form onSubmit={onSubmit}>
            <div className="mt-4 sm:flex sm:flex-row sm:gap-8 w-full">
              <div className="mb-8 sm:mb-0">
                <input
                  type="text"
                  required=""
                  value={search}
                  onChange={handleChange}
                  placeholder="Michael-Seth"
                  className=" p-4 text-black text-lg rounded outline outline-2 outline-black shadow-md bg-white w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow px-6 py-4 rounded-sm hover:bg-black hover:text-white"
                style={{ color: "#fff" }}
              >
                View result
              </button>
            </div>
          </form>
        </div>
      </div>
      {display}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default SearchResults;
