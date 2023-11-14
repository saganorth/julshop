import Link from 'next/link';
import styles from '../styles/Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <div className={styles.homeLink}>Home</div>
        </Link>
        <h1 className={styles.header}>JulShoppen</h1>
        <Link href="/cart">
          <div className={styles.cartLink}>Cart</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
