"use client";
import { Col, Row, Tabs } from "antd";
import { useEffect } from "react";
import FeatureList from "../components/featurelist";
import HomeBio from "../components/homebio";
import HomeCards from "../components/homecards";

import ProfileTabs from "../components/hometabs";
import { IContenido } from "../store/schema";
import styles from "./page.module.css";

const contenidos: IContenido[] = [
  {
    id: 0,
    titulo: "Negocio Digital",
    subtitulo: "Sitio institucional, vitrina de servicios. Facebook ADS",
    clip: "/videos/beef.mp4",
    descripcion: `Analizamos tu negocio digital, exploramos tus servicios y creamos circuitos de compra que te ayuden a vender más.`,
    acciones: [
      { id: 1, buttonText: "Adquirir", url: "/", isForward: true },
      { id: 2, buttonText: "Otros servicios", url: "/", isForward: false },
    ],
    slug: "/",
    icon: "digitalproduct",
  },
  {
    id: 1,
    titulo: "Micro Historias",
    subtitulo: "Pedidos, reservas, pagos, comunicados (whatsapp, email)",
    clip: "/videos/menu.mp4",
    descripcion: `Analizamos tu negocio digital, exploramos tus servicios y creamos circuitos de compra que te ayuden a vender más.`,
    acciones: [
      { id: 1, buttonText: "Adquirir", url: "/", isForward: true },
      { id: 2, buttonText: "Otros servicios", url: "/", isForward: false },
    ],
    slug: "/",
    icon: "flow",
  },
  {
    id: 2,
    titulo: "Infraescrtuctura y DevOps",
    subtitulo: "Orquesto tu proyecto con Git, Docker, Kubernetes.",
    descripcion: `Analizamos tu negocio digital, exploramos tus servicios y creamos circuitos de compra que te ayuden a vender más.`,
    clip: "/videos/docker.mp4",
    acciones: [
      { id: 1, buttonText: "Adquirir", url: "/", isForward: true },
      { id: 2, buttonText: "Otros servicios", url: "/", isForward: false },
    ],
    slug: "/",
    icon: "docker",
  },
];

export default function Home({}) {
  useEffect(() => {}, []);
  return (
    <div className={styles.app}>
      <Row justify="center">
        <Col xs={24} sm={21} md={15} lg={12}>
          <main className={styles.main}>
            <div className={styles.header}>
            <FeatureList data={contenidos} />
            </div>
            <ProfileTabs
              profileTabs={[
                {
                  label: "Bienvenido",
                  key: "1",
                  children: (
                    <div className={styles.contenido}>
                      <HomeCards data={contenidos} />
                    </div>
                  ),
                },
                {
                  label: "Contacto",
                  key: "2",
                  children: (
                    <div className={styles.contenido}>
                      <HomeBio />
                    </div>
                  ),
                },
              ]}
            />
          </main>
          <footer className={styles.base}></footer>
        </Col>
      </Row>
    </div>
  );
}
