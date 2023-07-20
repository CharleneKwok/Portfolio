import React from "react";
import styles from "./Timeline.module.css";
import { Divider, IconButton } from "@mui/material";

const TimeProgress = (props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.time}>{props.time}</h2>
      <div className={styles.progress}>
        <IconButton>{props.children}</IconButton>
        <Divider orientation="vertical" style={{ height: "150px" }} />
      </div>
      <div className={styles.description}>
        <p className={styles.text}>{props.description}</p>
      </div>
    </div>
  );
};

export default TimeProgress;
