import { Reveal } from "@/components/reveal/reveal";
import { IconArrow } from "@/components/ui/icons/icon-arrow";
import { IconHeartFill } from "@/components/ui/icons/icon-heart-fill";

import { Brand3D } from "./brand-3d";
import styles from "./closing-head.module.css";

/**
 * Coluna esquerda da section: título com Brand3D + coração pulsando,
 * parágrafo e o hint manuscrito "escolhe um jeito de ajudar".
 */
export function ClosingHead() {
  return (
    <div className={styles.head}>
      <Reveal delay={60}>
        <h2 className={styles.title}>
          Apoie a <Brand3D text="SouJunior" />
          <span className={styles.heart} aria-hidden="true">
            <IconHeartFill className={styles.heartSvg} />
          </span>
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <p className={styles.sub}>
          Sua contribuição mantém{" "}
          <strong className={styles.subStrong}>
            projetos, mentoria e comunidade
          </strong>{" "}
          vivos para quem está dando os primeiros passos na tecnologia.
        </p>
      </Reveal>

      <Reveal delay={180}>
        <span className={styles.hint}>
          escolhe um jeito de ajudar <IconArrow className={styles.hintIcon} />
        </span>
      </Reveal>
    </div>
  );
}
