import styles from "./bio.module.css";
export type Props = {};

const HomeBio: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <p>
          Información de contacto 📍
      </p>
    </div>
  );
};

export default HomeBio;
