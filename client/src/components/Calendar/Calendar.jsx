import React, { Component, useState, useContext, useEffect } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import PopUp from "../PopUp/PopUp";
import "@fullcalendar/core"; // Import the main.css file
import "../../App.css";
import { AuthContext } from "../../context/auth.context";
const MyCalendar = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    appointmentDate: "",
    appointmentTime: "",
    message: "",
  });
  console.log("hahahahah", formData);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const getAllAppointments = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/appointments`
        );
        setAppointments(response.data);
        console.log("hellloooo", response.data);
      } catch (err) {
        console.log(err);
      }

      // console.log("Form submitted:", formData);
    };

    getAllAppointments();
  }, [loading]);

  console.log("helol", user);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/appointments/create`,
        formData,
        user._id,
        { config }
      );
      console.log(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }

    console.log("Form submitted:", formData);
  };

  const handleEventClick = (e) => {
    setSelectedEvent(e.event);
    console.log("why am i not getting the time and", e.event);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="screen-xs relative min-h-screen">
      <img
        className="w-full h-full absolute inset-0 z-[-1] opacity-88"
        src="/photos/ann-sophi.jpg"
        alt=""
      />

      <h1 className="p-2">My Schedule</h1>
      <div className="pl-10 pr-10 text-white text-sm">
        <div className="pl-9 pr-9">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col opacity-75 text-beige-dark rounded"
          >
            <label htmlFor="fullName">Full Name:</label>
            <input
              className="rounded-lg pl-2"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              className="rounded-lg pl-2"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              className="rounded-lg pl-2"
              type="tel"
              id="phone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />

            <label htmlFor="appointmentDate">Appointment Date:</label>
            <input
              className="rounded-lg pl-2"
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />

            <label htmlFor="appointmentTime">Appointment Time:</label>
            <input
              className="rounded-lg pl-2"
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Additional Message:</label>
            <textarea
              className="rounded-lg pl-2"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
            <div className="p-2">
              <button
                className="bg-beige-dark p-1 rounded-lg text-white"
                type="submit"
              >
                Schedule Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="pl-3 pr-3">
        <div className="p-2 text-xs bg-beige-dark opacity-80 text-white rounded-lg">
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            events={appointments.map((appointment) => ({
              title: `${appointment.fullName}`,
              message: `${appointment.message}`,
              email: appointment.email,
              phoneNumber: appointment.phoneNumber,
              appointmentDate: new Date(
                appointment.appointmentDate.slice(0, 10) +
                  "T" +
                  appointment.appointmentTime +
                  ":00.000Z"
              ).toISOString(),
              start: new Date(
                appointment.appointmentDate.slice(0, 10) +
                  "T" +
                  appointment.appointmentTime +
                  ":00.000Z"
              ).toISOString(),
            }))}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            timeZone="UTC"
            eventClick={handleEventClick}
          />
        </div>
      </div>
      {selectedEvent && (
        <PopUp eventInfo={selectedEvent} onClose={closePopup} />
      )}
    </div>
  );
};

export default MyCalendar;
