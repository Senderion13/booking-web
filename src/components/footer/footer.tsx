import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div
        className={`text-5xl mq450:text-xs font-namu 
        ${styles.innerContainer}`}
      >
        <div className={styles.column}>
          <Link href="/">Booking.UA</Link>
        </div>
        <div className={styles.column}>2024 © All rights reserved</div>
        <div className={styles.column}>
          <Link href="/our-team">Наша команда</Link>
        </div>
      </div>
    </div>
  );
}

