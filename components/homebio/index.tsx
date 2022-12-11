
import styles from "./bio.module.css";
export type Props = {
 
};

const HomeBio: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
    <h2>
    Some Bio here. 🚀
    </h2>
    </div>
  );
};

export default HomeBio;
