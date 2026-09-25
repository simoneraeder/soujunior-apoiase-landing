import { Container } from "@/components/ui/container/container";
import { Reveal } from "@/components/reveal/reveal";

import { ParticipateCta } from "./participate-cta";
import { ParticipateHeader } from "./participate-header";
import { ParticipateSection } from "./participate-section";
import { RoleCard } from "./role-card";
import { ROLES } from "./participate.data";
import styles from "./participate.module.css";

export function Participate() {
  return (
    <ParticipateSection>
      <Container className={styles.content}>
        <ParticipateHeader />

        <div className={styles.roles}>
          {ROLES.map((role, i) => (
            <Reveal key={role.id} delay={i * 80}>
              <RoleCard role={role} index={i} />
            </Reveal>
          ))}
        </div>

        <ParticipateCta />
      </Container>
    </ParticipateSection>
  );
}
