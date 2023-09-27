import logo from '../assets/rocket.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt='' />
        <h1>
          to<span>do</span>
        </h1>
      </div>
    </header>
  );
}
