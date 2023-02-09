import React, { useContext } from "react";
import { Link } from "react-router-dom";
import frame from "../assets/frame.svg";
import profile from "../assets/github.com_Michael-Seth.png";
//import Footer from "../components/Footer";
import Nav from "../components/Nav";
import GithubContext from "../context/github/GithubContext";

function Home() {
  const { clearUsers } = useContext(GithubContext);

  return (
    <div>
      <section className="h-screen bg-hero w-full bg-cover bg-center">
        <Nav />
        <div className="section-container flex flex-col-reverse md:flex-row md:items-center h-[70vh] justify-around w-full">
          <div className="mt-8 md:mt-0 md:w-1/2 ">
            <h1 className="text-4xl md:text-6xl font-bold ">
              Github <br />
              Profile Finder
            </h1>
            <h2 className="mt-4 md:mt-8 text-xl md:text-2xl mb-8">
              Generate and share a descriptive <br />
              summary of your github repositories
            </h2>
            <Link
              className="bg-yellow px-6 py-4 rounded-sm hover:bg-black hover:text-white"
              to="/search"
              onClick={clearUsers}
              style={{ color: "#fff" }}
            >
              Try It Now
            </Link>
          </div>
          <div className="mt-4 md:mt-0 md:w-1/2 relative -rotate-6 items-center drop-shadow-2xl">
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0",
                margin: "0",
                padding: "0",
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
                  maxWidth: "100%",
                }}
              >
                <img
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                  }}
                  alt=""
                  aria-hidden="true"
                  src={frame}
                />
              </span>
              <img
                alt="github profile summary generator"
                src={profile}
                data-nimg="intrinsic"
                className="absolute object-cover object-center z-1 w-64 h-36 rounded-md"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  bottom: "0",
                  right: "0",
                  boxSizing: "border-box",
                  padding: "0",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0",
                  height: "0",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
              {/* <img
                alt="github profile summary generator"
                srcSet={profile}
                src={profile}
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  bottom: "0",
                  right: "0",
                  boxSizing: "border-box",
                  padding: "0",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0",
                  height: "0",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
                className="absolute object-cover object-center z-1 w-64 h-36 rounded-md"
                loading="lazy"
              /> */}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
