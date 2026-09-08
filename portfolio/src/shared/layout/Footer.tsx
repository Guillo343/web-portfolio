import styles from './Footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {currentYear} — Guillo</p>

      {/* Links a GitHub/LinkedIn se agregan cuando definamos esos datos */}
    </footer>
  );
}