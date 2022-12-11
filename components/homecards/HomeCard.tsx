import React from "react";
import { IContenido } from "../../store/schema";
import IconSwitcher from "../common/IconSwitcher";
import styles from "./homecard.module.css";

export type Props = {
  contenido: IContenido;
};

const HomeCard: React.FC<Props> = ({ contenido }) => {
  return (
    <article className={styles.card}>

      
      <div className={styles.glass}>
        <div className={styles.icon}>
          <IconSwitcher name={contenido.icon}/>
        </div>
        <div className={styles.copy}>
          <h2>{contenido.titulo}</h2>
          <p>{contenido.subtitulo}</p>
        </div>
      </div>

      <div className={styles.video}>
        <video 
          loop
          muted
          autoPlay
          playsInline
        style={{ width: "300px", height: "420px" }}>
          <source src={contenido.clip} />
        </video>
      </div>
    </article>
  );
};

export default HomeCard;
