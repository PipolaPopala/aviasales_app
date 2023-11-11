import styles from './Tabs.module.scss';

export default function Tabs() {
  return (
    <div className={styles.tabs}>
      <button className={styles.button} type="button">Самый дешевый</button>
      <button className={styles.button} type="button">Самый быстрый</button>
      <button className={styles.button} type="button">Оптимальный</button>
    </div>
  );
}
