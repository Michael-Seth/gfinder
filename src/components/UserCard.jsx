import React from "react";
//import { Link } from "react-router-dom";

function UserCard({user: { login, avatar_url } }) {
  return (
    <div className="userCard">
      <img src={avatar_url} alt="github user" />
      <div className="viewProfile">
        <h4>{login}</h4>
        <p>View profile</p>
      </div>
    </div>
  );
}

export default UserCard;
