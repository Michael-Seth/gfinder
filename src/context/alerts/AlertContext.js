import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //SET ALERT
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    // setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 2000);
  };

  const setRemoveAlert = () => {
    dispatch({ type: "REMOVE_ALERT" });
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert, setRemoveAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
