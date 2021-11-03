import React from "react";
// import classNames from 'classnames';
import PropTypes from "prop-types";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  InterviewerList.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };
  const interviewPrase = props.interviewers.map((interviewer) => (
    <InterviewerListItem
      key={interviewer.id}
      {...interviewer}
      selected={interviewer.id === props.value}
      setInterviewer={() => props.onChange(interviewer.id)}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewPrase}</ul>
    </section>
  );
}
