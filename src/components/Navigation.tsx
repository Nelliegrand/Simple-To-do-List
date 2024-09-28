import Link from "next/link";
import styles from "./Navigation.module.css"

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link href="/">Hem</Link>
        </li>
        <li>
          <Link href="/todo">Att göra</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;