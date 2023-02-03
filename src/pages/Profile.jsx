import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import GithubContext from "../context/github/GithubContext";

function Result() {
  // Import useContxt and use effect to get single user
  const { searchUser, user, repos, loading } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    searchUser(params.login);
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
  console.log(user);
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
                  Visit Github
                </a>
              </div>
              <h2 className="my-8 text-xl ">
                Recent Projects (Jan 2022 - Present)
              </h2>

              {/* <div className="sm:grid sm:grid-cols-2">
                {repos.map((repo) => (
                  <div className="md:pl-16 my-8">
                    <h3 className="text-xl font-semibold tracking-wide">
                      {repo.name}
                    </h3>
                    <time className="text-xs tracking-wide uppercase">
                      October 3, 2022
                    </time>
                    <p className="mt-2">
                      {" "}
                      This repository does not have a description.. pls add a
                      description{" "}
                    </p>
                    <a
                      className="text-sm mt-4 text-black inline-flex gap-2 group"
                      href={`https://github.com/${twitter_username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="group-hover:fill-yellow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                      View Project
                    </a>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Result;
