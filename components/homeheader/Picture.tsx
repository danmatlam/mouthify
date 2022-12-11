import React from "react";
import IconSwitcher from "../common/IconSwitcher";

import styles from "./homeheader.module.css";

export type Props = {};
const Picture: React.FC<Props> = (props) => {
  return (
    <div className={styles.picture}>
      <div className={styles.glass}>
        <IconSwitcher name="applogo" />
      </div>
    </div>
  );
};

export default Picture;
