<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const userName = import.meta.env.VITE_USER_NAME;
  const userId = import.meta.env.VITE_USER_ID;
  const [cardsData, setCardsData] = useState<any[]>([]);
  const [tab, setTab] = useState<"received" | "sent">("received");

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
    <div className={styles.galleryContainer}>
      <h1 className={styles.heading}>ギャラリー</h1>
      
      <div className="navLinks">
        <button
          className={tab === "received" ? "active" : ""}
          onClick={() => setTab("received")}
        >
          受取済
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
            <CardList type={tab} userName={userName} cards={cardsData} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
