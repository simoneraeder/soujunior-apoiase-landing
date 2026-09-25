import styles from "./brand-3d.module.css";

const DEPTH = 6;
const STEPS = 4;
const STEP = DEPTH / STEPS;

type Brand3DLetterProps = {
  char: string;
};

function Brand3DLetter({ char }: Brand3DLetterProps) {
  const faces = [];

  for (let j = STEPS; j >= 0; j--) {
    const z = DEPTH / 2 - STEP * j;
    const isFront = j === 0;
    const isBack = j === STEPS;
    const lightness = 72 - (j / STEPS) * 32;
    const color = `hsl(45, 95%, ${lightness}%)`;

    const faceClass = isFront
      ? styles.faceFront
      : isBack
        ? styles.faceBack
        : styles.faceSlice;

    faces.push(
      <span
        key={`face-${j}`}
        className={`${styles.face} ${faceClass}`}
        style={{
          transform: `translateZ(${z}px)`,
          color: isFront ? undefined : color,
        }}
        aria-hidden="true"
      >
        {char}
      </span>,
    );
  }

  return (
    <span className={styles.letter} aria-hidden="true">
      <span className={styles.spinner}>{faces}</span>
    </span>
  );
}

type Brand3DProps = {
  text?: string;
};

/**
 * Renderiza um texto com efeito 3D animado (letras pulando e girando).
 * Usado no título da section "Apoie a SouJunior".
 *
 * Cada letra é composta por várias faces empilhadas em Z (efeito 3D),
 * com animações CSS de "pulo" e "giro" sincronizadas por nth-child.
 */
export function Brand3D({ text = "SouJunior" }: Brand3DProps) {
  return (
    <span className={styles.brand3d} aria-label={text}>
      {text.split("").map((char, i) => (
        <Brand3DLetter key={`letter-${i}`} char={char} />
      ))}
    </span>
  );
}
