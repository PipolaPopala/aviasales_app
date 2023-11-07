import style from './Tabs.module.scss';

export default function Tabs() {
  return (
    <div className={style.tabs}>
      <button className={style.button} type="button">Самый дешевый</button>
      <button className={style.button} type="button">Самый быстрый</button>
      <button className={style.button} type="button">Оптимальный</button>
    </div>
  );
}
