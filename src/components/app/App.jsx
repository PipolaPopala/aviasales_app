import styles from './App.module.scss';
import Logo from '../logo/Logo'
import Filter from '../filter/Filter'
import Tabs from '../tabs/Tabs'
import TiсketList from '../ticketList/TicketList'
import ButtonMore from '../buttonMore/ButtonMore'

export default function App() {
  return (
    <>
      <Logo />
      <main className={styles.main}>
        <div>
          <Filter />
        </div>
        <div className={styles.tabs}>
          <Tabs />
          <TiсketList />
          <ButtonMore />
        </div>
      </main>
    </>
  );
}
