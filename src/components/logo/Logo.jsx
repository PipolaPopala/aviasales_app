import style from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={style.logoContainer}>
      <img className={style.logoImage} src="../../utilits/logo.svg" alt="" />
    </div>
  );
}
