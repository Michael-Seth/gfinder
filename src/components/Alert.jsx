import { useContext } from "react";
import AlertContext from "../context/alerts/AlertContext";

function Alert() {
  const { alert, setRemoveAlert } = useContext(AlertContext);
  const handleClick = () => {
    setRemoveAlert();
  };
  return (
    alert !== null && (
      <div>
        <div className="modal-bg">
          <div className="center-div">
            <div className="modal-flex">
              <h3>{alert.msg}</h3>
              <div className="modal-btns">
                <button className="btn1" onClick={handleClick}>
                  Ok
                </button>
                <button className="btn2" onClick={handleClick}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Alert;
