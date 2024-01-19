import React from "react";
import "../PopUp/PopUp.css";
const Popup = ({ eventInfo }) => {
  return (
    <div>
      <div className="popupStyle">
        <div className="popup-content text-black h-70">
          <h1 className="text-lg text-beige-light p-.5 bg-beige-dark rounded mb-7">
            {eventInfo._def.title}
          </h1>
          <div className="text-left">
            <p className="pb-5">
              <strong>Email: </strong> {eventInfo._def.extendedProps.email}
            </p>
            <p className="pb-5">
              <strong>Message: </strong>

              {eventInfo._def.extendedProps.message}
            </p>
            <p className="pb-5">
              {" "}
              <strong>Phone: </strong>
              {eventInfo._def.extendedProps.phoneNumber}
            </p>
            <p className="pb-5">
              {" "}
              <strong>Appointment Date & Time:</strong> <br></br>
              {new Date(
                eventInfo._def.extendedProps.appointmentDate
              ).toLocaleString("de-DE", { timeZone: "UTC" })}
            </p>
            <div className="text-right flex justify-between pointer">
              <button className="bg-white pl-2 pr-2 rounded">delete</button>
              <button className="bg-white pl-2 pr-2 rounded">edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
