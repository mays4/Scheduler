export function getAppointmentsForDay(state, day) {
  const result = [];
  const dayData = state.days.filter((daytime) => daytime.name === day);
  if (dayData.length === 0) return result;
  for (const appointment of dayData[0].appointments) {
    result.push(state.appointments[appointment]);
  };
  return result;
};
export function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer];
    return { ...interview, interviewer };
  } else {
    return null;
  };
};
export function getInterviewersForDay(state, day) {
  const result = [];
  const intData = state.days.filter((inttime) => inttime.name === day);
  if (intData.length === 0) return result;
  for (const interview of intData[0].interviewers) {
    result.push(state.interviewers[interview]);
  };
  return result;
};
