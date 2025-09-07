// Card.tsx

import React, { useState } from "react";
import styles from "./Card.module.css";
import { motion, AnimatePresence } from "framer-motion";

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
  const isrecieve = type === "received" ? styles.recievedCard : "";

  return (
  <div
    className={`${styles.card} ${cardClassName} ${isrecieve}`}
    onClick={() => setFlipped(!flipped)}
  >
      {/* 日付は絶対配置なので、ここには表示しない */}

      {flipped ? (
        <div className={styles.cardContent}>
          {type === "sent" && <p>To. {toName}</p>}
          <div className={styles.categoryAndText}>
            <p className={adviceTextClassName}>💡 アドバイス 💡</p>
            <p>{adviceText ? adviceText : "アドバイスなし"}</p>
          </div>
          <div className={styles.footer}>
            <p>From. {fromName}</p>
            <p>{date}</p>
          </div>
        </div>
      ) : (
        <div className={styles.cardContent}>
          {type === "sent" && <p>To. {toName}</p>}
          <div className={styles.categoryAndText}>
            <p className={styles.praiseText}>✨ 褒め ✨</p>
            <p>{praiseText}</p>
          </div>
          <div className={styles.footer}>
            <p>From. {fromName}</p>
            <p>{date}</p>

      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute w-full h-full backface-hidden bg-yellow-100 rounded-xl p-4 shadow">
          <p>{praiseText}</p>
        </div>

        <div className="absolute w-full h-full backface-hidden bg-green-100 rounded-xl p-4 shadow rotateY-180">
          <p>{adviceText || "アドバイスはありません"}</p>
        </div>
      </motion.div>

    </div>
  );
}