import styles from './TicketList.module.scss';
import Ticket from '../ticket/Ticket'

export default function TicketList() {
  const arr = [
    <Ticket />,
    <Ticket />,
    <Ticket />,
    <Ticket />,
    <Ticket />
  ]
  return (
    <>
      {arr.map((el) => {
        return el
      })}
    </>
  );
}
