"use client";
import React from "react";
import { IContenido } from "../../store/schema";
import HomeCard from "./HomeCard";
import styles from "./homecard.module.css";

export type Props = {
  data: IContenido[];
};

const HomeCards: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <HomeCard contenido={item} key={item.id} />
      ))}
    </div>
  );
};

export default HomeCards;
