import style from './App.module.scss';
import Logo from '../logo/Logo'
import Filter from '../filter/Filter'
import Tabs from '../tabs/Tabs'
import TiсketList from '../ticketList/TicketList'

export default function App() {
  return (
    <>
      <Logo />
      <main className={style.main}>
        <div>
          <Filter />
        </div>
        <div className={style.tabs}>
          <Tabs />
          <TiсketList />
        </div>
      </main>
    </>
  );
}
