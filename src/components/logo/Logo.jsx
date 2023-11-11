import styles from './Logo.module.scss';
import LogoIcon from '../../Logo.svg'

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoImage} src={LogoIcon} alt="" />
    </div>
  );
}
