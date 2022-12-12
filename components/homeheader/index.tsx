import FeatureList from "../featurelist";
import styles from "./homeheader.module.css";
import Picture from "./Picture";

export interface Props {
  children?: React.ReactNode;
}
const HomeHeader: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.meta}>
        <Picture />
        <h2>Spreati</h2>
      </div>
      <div className={styles.banner}>
        <div className={styles.glass}>
          <p>
            Soluciono problemas mediante <br /> Software 🚀
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};
export default HomeHeader;
