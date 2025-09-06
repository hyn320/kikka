import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const userName = "鈴木花子";
  const [tab, setTab] = useState<"received" | "sent">("received");
  const [cardsData, setCardsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("card").select("*");
      if (error) {
        console.error(error);
        return;
      }
      setCardsData(data || []);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className="text-xl font-bold mb-4">ギャラリー</h1>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.button} ${tab === "received" ? styles.buttonReceived : styles.buttonNotReceived}`}
          onClick={() => setTab("received")}
        >
          受信
        </button>
        <button
          className={`${styles.button} ${tab === "sent" ? styles.buttonSent : styles.buttonNotSent}`}
          onClick={() => setTab("sent")}
        >
          送信
        </button>
      </div>

      <div className={styles.cardsWrapper}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={tab}
            initial={{ x: tab === "received" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: tab === "received" ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardList type={tab} userName={userName} cards={cardsData} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
