import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import GithubContext from "../context/github/GithubContext";
import Repolist from "../components/Repolist";

function Result() {
  // Import useContxt and use effect to get single user
  const { searchUser, user, repos, loading, searchRepo } =
    useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    searchUser(params.login);
    searchRepo(params.login);
  }, []);

  console.log(repos);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  //console.log(user);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Nav />
      <main>
        <section className="h-screen w-full bg-cover bg-center">
          <div className="section-container mt-8 ">
            <div>
              <div className="flex flex-col md:flex-row md:gap-8 md:items-center mb-16">
                <div className="relative mt-4 object-cover object-center w-32 h-32 border-4 border-black rounded-full ">
                  <span
                    style={{
                      boxSizing: "borderBox",
                      display: "block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: "1",
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "absolute",
                      inset: "0px",
                    }}
                  >
                    <img
                      alt="Profile"
                      sizes="100vw"
                      srcSet={user.avatar_url}
                      src={user.avatar_url}
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full p-4 "
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "border-box",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  </span>
                </div>
                <div className="md:mt-0 md:w-1/2 ">
                  <h1 className="mt-4 text-3xl ont-bold ">
                    {user.login} &nbsp;
                    <span className="mt-4 text-xl ">
                      (
                      <a
                        className=" text-black hover:text-yellow"
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {twitter_username}
                      </a>
                      )
                    </span>
                  </h1>
                  <p className="mt-2">{bio}</p>
                </div>
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-yellow px-6 py-4 rounded-sm hover:bg-black hover:text-white"
                >
                  Visit Github Profile
                </a>
              </div>
              <h2 className="my-8 text-xl ">Recent Repositories</h2>
              <Repolist repos={repos} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Result;
