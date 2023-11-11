import styles from './Ticket.module.scss';
import S7Logo from '../../S7_logo.png'

export default function Ticket() {
  return (
    <div className={styles.ticket}>
      <div className={styles.title}>
        <span className={styles.price}>13 400 P</span>
        <img src={S7Logo} alt="" />
      </div>
      <div className={styles.trace}>
        <div className={styles.header}>
          <p>MOW – HKT</p>
          <p>В пути</p>
          <p>2 пересадки</p>
        </div>
        <div className={styles.body}>
          <p>10:45 – 08:00</p>
          <p>21ч 15м</p>
          <p>HKG, JNB</p>
        </div>
      </div>
      <div className={styles.trace}>
        <div className={styles.header}>
          <p>MOW – HKT</p>
          <p>В пути</p>
          <p>1 пересадка</p>
        </div>
        <div className={styles.body}>
          <p>11:20 – 00:50</p>
          <p>13ч 30м</p>
          <p>HKG</p>
        </div>
      </div>
    </div>
  );
}
