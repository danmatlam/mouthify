"use client";
import React from "react";
import { IContenido } from "../../store/schema";
import FeatureCard from "./FeatureCard";
import styles from "./featurecard.module.css";

export type Props = {
  data: IContenido[];
};

const FeatureList: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <FeatureCard contenido={item} key={item.id} />
      ))}
    </div>
  );
};

export default FeatureList;
