import { useContext } from "react";
import AlertContext from "../context/alerts/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  return alert !== null && <div>{alert.msg}</div>;
}

export default Alert;
