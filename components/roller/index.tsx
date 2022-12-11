
import React from "react";
import { IContenido } from "../../store/schema";
import RollerCard from "./RollerCard";
import styles from "./roller.module.css";

export type Props = {
  data: IContenido[];
};

const Roller: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
          <RollerCard key={item.id} contenido={item} />
      ))}
    </div>
  );
};

export default Roller;
