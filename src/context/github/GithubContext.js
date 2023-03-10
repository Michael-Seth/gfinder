import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //To Search All users keyword
  const searchUsers = async (search) => {
    setLoading();
    const params = new URLSearchParams({
      q: search,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();
    setTimeout(() => {
      dispatch({
        type: "GET_USERS",
        payload: items,
      });
    }, 2500);
  };

  //To Search Single User
  const searchUser = async (singleSearch) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${singleSearch}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    //Redirect for 404 response
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      //Dispatch for Reducer
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  //search Nested route
  const searchRepo = async (repoSearch) => {
    setLoading();

    const response = await fetch(
      `${GITHUB_URL}/users/${repoSearch}/repos?per_page=5&sort=created:asc`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    //Redirect for 404 response
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const repos = await response.json();
      //console.log(repos);
      //Dispatch for Reducer
      dispatch({
        type: "GET_REPOS",
        payload: repos,
      });
    }
  };

  //Clear Users from state
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  //Set Loading
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        searchUser,
        searchRepo,
        setLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
