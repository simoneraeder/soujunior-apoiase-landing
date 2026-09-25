"use client";

import { useEffect, useState } from "react";

import styles from "./cookie-consent.module.css";

const COOKIE_CONSENT_KEY = "soujunior-cookie-consent";

type CookieConsentValue = "accepted" | "rejected";

// Isso é o pedaço que faltava: sem isso, o GTM nunca fica sabendo
// da escolha do usuário e o analytics_storage continua "denied" pra sempre.
const updateConsentMode = (value: CookieConsentValue): void => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push([
    "consent",
    "update",
    {
      ad_storage: value === "accepted" ? "granted" : "denied",
      analytics_storage: value === "accepted" ? "granted" : "denied",
      ad_user_data: value === "accepted" ? "granted" : "denied",
      ad_personalization: value === "accepted" ? "granted" : "denied",
    },
  ]);
};

const saveConsent = (value: CookieConsentValue): void => {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  updateConsentMode(value);
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(
      COOKIE_CONSENT_KEY,
    ) as CookieConsentValue | null;

    // Visitante que já tinha decidido antes: reaplica o consentimento
    // dele nesse carregamento de página (o script default sempre nega
    // primeiro, então isso é o que "libera" de novo).
    if (storedConsent) {
      updateConsentMode(storedConsent);
      return;
    }

    const id = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(id);
  }, []);

  const handleConsent = (value: CookieConsentValue): void => {
    saveConsent(value);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      className={styles.banner}
      role="region"
      aria-label="Consentimento de cookies"
    >
      <div className={styles.icon} aria-hidden="true">
        <svg
          className={styles.iconSvg}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.5 25.2C37.2 25.8 35.7 26.1 34.2 26.1C28.3 26.1 23.5 21.3 23.5 15.4C23.5 13.9 23.8 12.4 24.4 11.1C23.6 10.9 22.8 10.8 22 10.8C13.5 10.8 6.6 17.7 6.6 26.2C6.6 34.7 13.5 41.6 22 41.6C30.5 41.6 37.4 34.7 37.4 26.2C37.4 25.9 37.4 25.5 37.4 25.2H38.5Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="27" r="2" fill="currentColor" />
          <circle cx="23" cy="34" r="2" fill="currentColor" />
          <circle cx="13" cy="34" r="1.5" fill="currentColor" />
          <circle cx="18" cy="20" r="1.5" fill="currentColor" />
          <circle cx="31" cy="17" r="1.5" fill="currentColor" />
        </svg>
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>Sua privacidade importa</span>
        <h2 className={styles.title}>Podemos usar cookies?</h2>
        <p className={styles.description}>
          Utilizamos cookies para melhorar sua experiência e entender como o
          site é utilizado. Você pode aceitar ou recusar os não essenciais.
        </p>

        <div className={styles.actions}>
          <button
            className={`${styles.button} ${styles.buttonSecondary}`}
            type="button"
            onClick={() => handleConsent("rejected")}
          >
            Recusar
          </button>

          <button
            className={`${styles.button} ${styles.buttonPrimary}`}
            type="button"
            onClick={() => handleConsent("accepted")}
          >
            Aceitar
            <span className={styles.buttonArrow} aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
