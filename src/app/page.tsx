import styles from "./page.module.css";
import AddTask from "../../components/todoPage/todoPage";

export default async function Home() {
  return (
    <div className={styles.wrapper}>
      <AddTask />
    </div>
  );
}
