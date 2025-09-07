// src/pages/Gallery.tsx
import React, { useState } from "react";
import CardList from "../components/CardList";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Gallery.module.css";
// App.cssのスタイルはApp.tsxでグローバルに読み込まれているため、ここでのインポートは不要です。

export default function Gallery() {
  const userName = import.meta.env.VITE_USER_NAME;
  const userId = import.meta.env.VITE_USER_ID;
  const [tab, setTab] = useState<"received" | "sent">("received");

  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.heading}>ギャラリー</h1>
      
      <div className="navLinks">
        <button
          className={tab === "received" ? "active" : ""}
          onClick={() => setTab("received")}
        >
          受け取り済
        </button>
        <button
          className={tab === "sent" ? "active" : ""}
          onClick={() => setTab("sent")}
        >
          送信済
        </button>
      </div>
      
      <div className={styles.cardListContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ x: tab === "received" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: tab === "received" ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {tab === "received" ? (
              <CardList type="received" userName={userName} />
            ) : (
              <CardList type="sent" userName={userName} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}