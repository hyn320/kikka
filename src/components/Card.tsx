import React, { useState } from "react";
import styles from "./Card.module.css";

interface CardProps {
  praiseText: string;
  adviceText?: string;
  toName: string;
  fromName: string;
  date: string;
}

export default function Card({
  praiseText,
  adviceText,
  toName,
  fromName,
  date,
}: CardProps) {
  const [flipped, setFlipped] = useState(false);

  const splitedDate = date.split('T');


  return (
    <div className={styles.cardContainer} onClick={() => setFlipped(!flipped)}>
      <div
        className={styles.cardInner}
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* 表 */}
        <div className={styles.cardFront}>
          <p className={styles.titleFront}>✨ 褒め ✨</p>
          <p>To. {toName}</p>
          <p>{praiseText}</p>
          <p>From. {fromName}</p>
          <p className={styles.date}>{splitedDate[0]}</p>
        </div>

        {/* 裏 */}
        <div className={styles.cardBack}>
          <p className={styles.titleBack}>💡 アドバイス</p>
          <p>To. {toName}</p>
          <p>{adviceText || "アドバイスはありません"}</p>
          <p>From. {fromName}</p>
          <p className={styles.date}>{splitedDate[0]}</p>
        </div>
      </div>
    </div>
  );
}
