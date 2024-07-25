import { FC } from "react";
import styles from "./loadingLoader.module.css";

const LoadingLoader: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingLoader;
