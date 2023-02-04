import React from "react";
import RepoItem from "./RepoItem";

function Repolist({ repos }) {
  return (
    <div>
      <div className="sm:grid sm:grid-cols-2">
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
}

export default Repolist;
