import FeatureList from "../featurelist";
import styles from "./homeheader.module.css";
import Picture from "./Picture";

export interface Props {
  children?: React.ReactNode;
}
const HomeHeader: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      
      <div className={styles.glass}>
        <div className={styles.image}>
          <Picture />
          <h2>Spreati</h2>
        </div>
        <div className={styles.meta}>
          <p>
            Solucionamos problemas mediante<br /> Software 🚀
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomeHeader;
