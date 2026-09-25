import { NAV_LINKS } from "./footer.data";
import styles from "./footer-links.module.css";

/**
 * Bloco direito do Footer: links de navegação que rolam até cada section.
 * Usa as mesmas âncoras do menu do header.
 */
export function FooterLinks() {
  return (
    <nav className={styles.links} aria-label="Rodapé">
      {NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} className={styles.link}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
