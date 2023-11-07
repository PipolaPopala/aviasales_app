import style from './Filter.module.scss';

export default function Filter() {
  return (
    <>
    <form className={style.filterContainer}>
      <p className={style.filterTitle}>Количество пересадок</p>
      <label className={style.filterItem} ><input type="checkbox" name="filter" id="" />Все</label>
      <label className={style.filterItem} ><input type="checkbox" name="filter" id="" />Без пересадок</label>
      <label className={style.filterItem} ><input type="checkbox" name="filter" id="" />1 пересадка</label>
      <label className={style.filterItem} ><input type="checkbox" name="filter" id="" />2 пересадки</label>
      <label className={style.filterItem} ><input type="checkbox" name="filter" id="" />3 пересадки</label>
    </form>
    </>
  );
}
