import { Container } from "@/components/ui/container/container";

import { FooterBrand } from "./footer-brand";
import { FooterLinks } from "./footer-links";
import { FooterSocials } from "./footer-socials";
import styles from "./footer.module.css";

/**
 * Rodapé institucional da landing page.
 * Fica logo após a section "Apoie a SouJunior" (Closing).
 *
 * Composição em 3 blocos: logo, redes sociais e links de navegação.
 * No desktop ficam lado a lado; no mobile ficam empilhados e centralizados.
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <FooterBrand />
          <FooterSocials />
          <FooterLinks />
        </div>
      </Container>
    </footer>
  );
}
