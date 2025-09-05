import React, { useState } from "react";
//import { cards } from "../data/sampleData";
//import Card from "../components/Card";
//import { Routes, Route, Link } from "react-router-dom";
import CardList from "../components/CardList";
import { motion, AnimatePresence } from "framer-motion";


export default function Gallery() {

    const userName = "鈴木花子";
    const userId = 2;
    const [tab, setTab] = useState<"received" | "sent">("received");

    return (
    <div className="p-4 h-screen overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">ギャラリー</h1>
        <div className="flex mb-4 gap-4">
        <button
            className={`px-4 py-2 rounded ${
            tab === "received" ? "bg-blue-300" : "bg-blue-100"
            }`}
            onClick={() => setTab("received")}
        >
            受信
        </button>
        <button
            className={`px-4 py-2 rounded ${
            tab === "sent" ? "bg-green-300" : "bg-green-100"
            }`}
            onClick={() => setTab("sent")}
        >
            送信
        </button>
        </div>

        {/*<div className="grid grid-cols-2 gap-4">
        {cards.map((c) => (
            <Card
            key={c.id}
            praiseText={c.praiseText}
            adviceText={c.adviceText}
            />
        ))}
        </div>
        <Routes>
        <Route path="receive" element={<CardList type="received" />} />
        <Route path="send" element={<CardList type="sent" />} />
        </Routes>*/}

        <div className="overflow-hidden">
        <AnimatePresence exitBeforeEnter>
            <motion.div
            key={tab}
            initial={{ x: tab === "received" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: tab === "received" ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
            <CardList type={tab} userName={userName} />
            </motion.div>
        </AnimatePresence>
        </div>
    </div>
    );
}
