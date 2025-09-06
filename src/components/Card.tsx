import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
  praiseText: string;
  adviceText?: string;
  toName: string;
  fromName: string;
  date: string;
  initialSide?: "front" | "back";
}

export default function Card({ praiseText, adviceText, toName, fromName, date, initialSide = "front" }: CardProps) {
  const [flipped, setFlipped] = useState(initialSide === "back");

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-full h-40 cursor-pointer perspective"
    >
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

      {/* {flipped ? (
        <div>
          <p>To. {toName}</p>
          <p className="font-semibold text-blue-700 mb-2">💡 アドバイス</p>
          <p>{adviceText ? adviceText : "アドバイスなし"}</p>
          <p>From. {fromName}</p>
          <p>{date}</p>
        </div>
      ) : (
        <div>
          <p>To. {toName}</p>
          <p className="font-semibold text-green-700 mb-2">✨ 褒め ✨</p>
          <p>{praiseText}</p>
          <p>From. {fromName}</p>
          <p>{date}</p>
        </div>
      )} */}

    </div>
  );
}
