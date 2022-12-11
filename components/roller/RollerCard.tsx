import React from "react";
import { IContenido } from "../../store/schema";
import IconSwitcher from "../common/IconSwitcher";
import styles from "./roller.module.css";

export type Props = {
  contenido: IContenido;
};

const RollerCard: React.FC<Props> = ({ contenido }) => {
  return (
    <article className={styles.card}>
      <div className={styles.glass}>
        <IconSwitcher name={contenido.icon} />
      </div>
      <div className={styles.circle}></div>
    </article>
  );
};

export default RollerCard;
