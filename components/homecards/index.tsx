"use client";
import { Col, Row } from "antd";
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
      <Row gutter={[12,12]} style={{width:'100%'}}>
        {data.map((item) => (
          <Col xs={12}  key={item.id} >
            <HomeCard contenido={item}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeCards;
