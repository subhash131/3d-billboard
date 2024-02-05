import PixelTransition from "@/components/PixelTransition";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.cube_container}>
      <div className={styles.cube}>
        <figure className={`${styles.fron} absolute`}></figure>
        <figure className={`${styles.side} ${styles.back}`}>
          <PixelTransition />
        </figure>
        <figure className={`${styles.side} ${styles.left}`}>
          <PixelTransition />
        </figure>
        <figure className={`${styles.side} ${styles.right}`}>
          <PixelTransition />
        </figure>
        <figure className={`${styles.side} ${styles.top}`}>
          <PixelTransition />
        </figure>
        <figure className={`${styles.side} ${styles.bottom}`}>
          <PixelTransition />
        </figure>
      </div>
    </main>
  );
}
