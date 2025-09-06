import { useEffect } from "react";
import { motion } from "framer-motion";

interface SpecialScreenProps {
  onFinish: () => void;
}

export default function SpecialScreen({ onFinish }: SpecialScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-100">
      {/* スキップボタン */}
      <button
        onClick={onFinish}
        className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded"
      >
        スキップ
      </button>

      {/* アニメーション例 */}
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-40 h-40 bg-yellow-400 rounded shadow-lg flex items-center justify-center"
      >
        🎉 アニメーション 🎉
      </motion.div>
    </div>
  );
}















// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { cards } from "../data/sampleData";
// import Card from "../components/Card";
// import CardList from "../components/CardList";


// interface SpecialScreenProps {
//   onFinish: () => void;
// }

// export default function SpecialScreen({ onFinish }: SpecialScreenProps) {
//     const [step, setStep] = useState(0);
//     const [flipped, setFlipped] = useState<Record<number, boolean>>({}); // カードごとに表裏
//     const [show, setShow] = useState(false);

//     useEffect(() => {
//         // const now = new Date();
//         // const lastShown = localStorage.getItem("lastSpecialShown");
//         // const isAfter1830 =
//         //     now.getHours() > 18 || (now.getHours() === 18 && now.getMinutes() >= 30);
    
//         //     if (isAfter1830 && lastShown !== now.toDateString()) {
//         //         setShow(true);
//         //         localStorage.setItem("lastSpecialShown", now.toDateString());
//         //     } else {
//         //         onFinish(); // 18:30前または既に表示済みなら即終了
//         //     }

//         setShow(true);
//     }, []);

//     const handleSkip = () => {
//         onFinish();
//     };
//     // const handleCardClick = () => {
//     //     setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
//     // };
//     const userName = "鈴木花子";
//     const [tab] = useState<"received" | "sent">("received");
    

//     if (!show) return null;

//     return (
//         <div className="relative h-screen flex items-center justify-center bg-gray-100">
//             <button
//                 onClick={handleSkip}
//                 className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded"
//             >
//                 スキップ
//             </button>

//             <AnimatePresence>
//                 {step === 0 && (
//                     <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         // exit={{ scale: 0 }}
//                         transition={{ duration: 0.8 }}
//                         onClick={() => setStep(1)} // クリックで次へ進む
//                         className="w-40 h-28 bg-yellow-400 rounded shadow-lg cursor-pointer"
//                     >
//                     ✉️ 封筒
//                     </motion.div>
//                 )}

//                 {step === 1 && (
//                     <motion.div
//                         initial={{ y: 100, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         // exit={{ opacity: 0 }}
//                         transition={{ duration: 0.8 }}
//                         onClick={() => setStep(2)}
//                         className="w-40 h-28 bg-white border rounded shadow-lg cursor-pointer"
//                     >
//                         {/* {cards.map((card) => (
//                             <motion.div
//                                 className="p-4 bg-white rounded shadow cursor-pointer"
//                                 onClick={() => handleCardClick(card.id)}
//                             >
//                                 {flipped[card.id] ? (
//                                 <p>💡 {card.adviceText}</p>
//                                 ) : (
//                                 <p>✨ {card.praiseText} ✨</p>
//                                 )}
//                             </motion.div>
//                         ))} */}

//                         <motion.div
//                             key={tab}
//                             initial={{ x: tab === "received" ? 300 : -300, opacity: 0 }}
//                             animate={{ x: 0, opacity: 1 }}
//                             exit={{ x: tab === "received" ? -300 : 300, opacity: 0 }}
//                             transition={{ duration: 0.3 }}
//                             >
//                             <CardList type={tab} userName={userName} />
//                         </motion.div>

//                         <button
//                             onClick={handleSkip}
//                             className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded"
//                         >
//                             ホームに戻る
//                         </button>

//                     </motion.div>
//                 )}
//             </AnimatePresence>

//         </div>
//     );
// }
