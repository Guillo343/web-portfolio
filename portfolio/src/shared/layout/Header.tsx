import type { NavLink } from '@/core/types/nav.types';
import styles from './Header.module.scss';

const NAV_LINKS: NavLink[] = [
  { label: 'Journey', href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#hero" className={styles.logo}>
        {/* Tu nombre o iniciales — placeholder por ahora */}
        GM
      </a>

      <nav aria-label="Navegación principal">
        <ul className={styles.navList}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* El ThemeToggle se agrega acá cuando lleguemos a esa parte */}
    </header>
  );
}