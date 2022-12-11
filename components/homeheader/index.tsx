import styles from "./homeheader.module.css";
import Pic from "./Pic";

export interface Props {}
const HomeHeader: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.portada}>
        <div className={styles.portadaGlass}>
          <p>
            {/* Leading our community to sustain open source innovation. */}
          </p>
        </div>
      </div>
      <div className={styles.meta}>
        <Pic />
        <h2>Spreati</h2>
      </div>
    </div>
  );
};
export default HomeHeader;
