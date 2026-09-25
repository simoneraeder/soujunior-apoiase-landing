import styles from "./closing-waves.module.css";

/**
 * Ondas decorativas no topo e na base da section "Apoie a SouJunior".
 * Topo usa a cor do fundo da página; base usa a cor do rodapé.
 */
export function ClosingWaves() {
  return (
    <>
      <div className={`${styles.wave} ${styles.waveTop}`} aria-hidden="true">
        <svg
          className={styles.waveSvg}
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C240,50 480,10 720,28 C960,46 1200,8 1440,26 L1440,0 L0,0 Z"
            fill="#F5F2E9"
          />
        </svg>
      </div>
      <div className={`${styles.wave} ${styles.waveBottom}`} aria-hidden="true">
        <svg
          className={styles.waveSvg}
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C240,50 480,10 720,28 C960,46 1200,8 1440,26 L1440,0 L0,0 Z"
            fill="#0A1662"
          />
        </svg>
      </div>
    </>
  );
}
