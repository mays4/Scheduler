import { useEffect, useState } from "react";
import "components/Application.scss";
import axios from "axios";

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => setState((prev) => ({ ...prev, day }));
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    let days = updateSpots(state, appointments);
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      setState({ ...state, appointments, days });
    });
  }
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    let days = updateSpots(state, appointments);
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({ ...state, appointments, days });
    });
  }
  const updateSpots = (state, appointments) => {
    const index = state.days.findIndex((d) => d.name === state.day);
    const day = state.days[index];
    let spots = 0;
    for (const id of day.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }
    const newDay = { ...day, spots };
    const newDays = [...state.days];
    newDays[index] = newDay;
    return newDays;
  };

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  return { state, setDay, bookInterview, cancelInterview };
}
