import styles from "../styles/Home.module.s";
import InstructionsComponent from "../components/InstructionsComponent";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
  );
}
