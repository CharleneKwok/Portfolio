import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import TimeProgress from "./TimeProgress";
import WorkIcon from "@mui/icons-material/Work";
import styles from "./Timeline.module.css";

const MyTimeline = () => {
  return (
    <div className={styles.allProgress}>
      <TimeProgress
        time="02/2020"
        description="Started bachelor of computer science at UNSW"
      >
        <SchoolIcon fontSize="large" />
      </TimeProgress>
      <TimeProgress
        time="12/2022"
        description="Software Engineer Intern at Macquarie Group"
      >
        <WorkIcon fontSize="large" />
      </TimeProgress>
      <TimeProgress time="05/2023" description="Graduated from UNSW">
        <SchoolIcon fontSize="large" />
      </TimeProgress>
    </div>
  );
};

export default MyTimeline;
