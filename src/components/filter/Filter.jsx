import styles from './Filter.module.scss';

export default function Filter() {
  return (
    <>
    <form className={styles.filterContainer}>
      <p className={styles.filterTitle}>Количество пересадок</p>
      <label className={styles.filterItem} ><input type="checkbox" name="filter" id="" />Все</label>
      <label className={styles.filterItem} ><input type="checkbox" name="filter" id="" />Без пересадок</label>
      <label className={styles.filterItem} ><input type="checkbox" name="filter" id="" />1 пересадка</label>
      <label className={styles.filterItem} ><input type="checkbox" name="filter" id="" />2 пересадки</label>
      <label className={styles.filterItem} ><input type="checkbox" name="filter" id="" />3 пересадки</label>
    </form>
    </>
  );
}
