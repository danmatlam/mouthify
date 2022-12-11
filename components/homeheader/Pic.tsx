import React from "react";
import IconSwitcher from "../common/IconSwitcher";

import styles from "./homeheader.module.css";

export type Props = {};
const Pic: React.FC<Props> = (props) => {
  return (
    <div className={styles.picContainer}>
      <div className={styles.picGlass}>
        <IconSwitcher name="applogo" />
      </div>
    </div>
  );
};

export default Pic;
