
import React, { useState } from "react";
import styles from "./Card.module.css";


interface CardProps {
  praiseText: string;
  adviceText?: string;
  toName: string;
  fromName: string;
  date: string;
  type: "received" | "sent";
}

export default function Card({ praiseText, adviceText, toName, fromName, date, type }: CardProps) {
  const [flipped, setFlipped] = useState(false);
  const cardClassName = flipped ? styles.adviceCard : styles.praiseCard;
  const adviceTextClassName = type === "received" ? styles.adviceTextReceived : styles.adviceTextSent;
  const isReceived = type === "received" ? styles.recievedCard : "";
  const splitedDate = date.split('T');


  return (
    <div
      className={`${styles.card} ${cardClassName} ${isReceived}`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* 日付は絶対配置なので、ここには表示しない */}

      {flipped ? (
        <div className={styles.cardContent}>
          {type === "sent" && <p>To. {toName}</p>}
          <div className={styles.categoryAndText}>
            <p className={styles.titleBack}>💡 アドバイス</p>
            <p>To. {toName}</p>
            <p>{adviceText || "アドバイスはありません"}</p>
            <p>From. {fromName}</p>
            <p className={styles.date}>{splitedDate[0]}</p>
          </div>
        </div>
      ) : (
        <div className={styles.cardContent}>
          {type === "sent" && <p>To. {toName}</p>}
          <div className={styles.categoryAndText}>
            <p className={styles.titleFront}>✨ 褒め ✨</p>
            <p>To. {toName}</p>
            <p>{praiseText}</p>
            <p>From. {fromName}</p>
            <p className={styles.date}>{splitedDate[0]}</p>
          </div>
        </div>
      )}
    </div>
  );
}