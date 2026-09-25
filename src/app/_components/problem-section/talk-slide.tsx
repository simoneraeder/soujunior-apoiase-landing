import { ArrowIcon, ChatIcon, ChatLangIcon, GlobeIcon, MicIcon } from "./icons";
import styles from "./iniciativas-section.module.css";
import { SITE } from "@/lib/site-config";

type TalkSlideProps = {
  onCtaClick?: () => void;
};

export function TalkSlide({ onCtaClick }: TalkSlideProps) {
  return (
    <>
      <div className={styles.slideHead}>
        <h3 className={`${styles.slideTitle} ${styles.slideTitleTalk}`}>
          SouJunior <span className={styles.mark}>Talk</span>
          <span className={styles.slideIcon} aria-hidden="true">
            <ChatLangIcon />
          </span>
        </h3>
        <p className={styles.slideSub}>
          Se você está procurando uma maneira de{" "}
          <strong>aprimorar seu inglês com pessoas reais</strong>, temos uma
          excelente notícia! A SouJunior Talk é um{" "}
          <span className={`${styles.accent} ${styles.accentPurple}`}>
            ambiente de treino
          </span>{" "}
          que oferece uma plataforma interativa para você praticar suas
          habilidades linguísticas.
        </p>
      </div>

      <div className={styles.talkBlock}>
        <span className={styles.talkStamp} aria-hidden="true">
          EN
        </span>

        <div className={styles.talkContent}>
          <p className={styles.talkTitle}>
            Falar inglês não deveria ser um{" "}
            <span className={styles.em}>privilégio</span>.
          </p>
          <p className={styles.talkSub}>
            Muita gente entende gramática, mas trava na hora de falar. A
            SouJunior Talk oferece um{" "}
            <strong>ambiente seguro e interativo</strong> para treinar
            conversação com pessoas reais, no seu ritmo e sem julgamentos.
          </p>
          <a
            href={SITE.talkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.talkCta}
            onClick={onCtaClick}
          >
            Quero praticar no Talk <ArrowIcon />
          </a>
        </div>

        <div className={styles.talkCards}>
          <div className={styles.talkCard}>
            <span className={styles.talkCardIcon}>
              <ChatIcon />
            </span>
            <div className={styles.talkCardBody}>
              <div className={styles.talkCardTitle}>Conversação real</div>
              <p className={styles.talkCardDesc}>
                Pratique com pessoas de verdade em encontros ao vivo, sem
                pressão e no seu ritmo.
              </p>
            </div>
          </div>
          <div className={styles.talkCard}>
            <span className={styles.talkCardIcon}>
              <MicIcon />
            </span>
            <div className={styles.talkCardBody}>
              <div className={styles.talkCardTitle}>Sem julgamentos</div>
              <p className={styles.talkCardDesc}>
                Ambiente acolhedor para errar, tentar de novo e ganhar confiança
                para falar.
              </p>
            </div>
          </div>
          <div className={styles.talkCard}>
            <span className={styles.talkCardIcon}>
              <GlobeIcon />
            </span>
            <div className={styles.talkCardBody}>
              <div className={styles.talkCardTitle}>Portas que se abrem</div>
              <p className={styles.talkCardDesc}>
                Inglês fluente amplia seu alcance no mercado de tecnologia e no
                mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
