import React from "react";
import { Link } from "react-router-dom";

function UserCard({ cardKey, user: { login, avatar_url } }) {
  return (
    <div className="userCard" key={cardKey}>
      <img src={avatar_url} alt="github user" />
      <Link to={`/user/${login}`} className="viewProfile">
        <h4>{login}</h4>
        <p>View profile</p>
      </Link>
    </div>
  );
}

export default UserCard;
