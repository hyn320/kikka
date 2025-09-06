import React from "react";
import { cards } from "../data/sampleData";
import Card from "./Card";

interface CardListProps {
  type: "received" | "sent";
  userName: string;
}

export default function CardList({ type, userName }: CardListProps) {
  // type によってカードをフィルター
  const receivedCards = cards.filter((c) => c.toName === userName);
  const sentCards = cards.filter((c) => c.fromName === userName);
  const displayCards = type === "received" ? receivedCards : sentCards;


//   const filteredCards = cards; // 一旦フィルターなし

/**
 * {
    id: 1,
    fromId: 1,
    toId: 2,
    praiseText: "いつも丁寧に教えてくれて助かってます！",
    adviceText: "次は資料をもう少し早めに共有できると安心です 👍",
  },
  の形式でuserIdがfromIdかtoIdかどちらでもないかで別のリストに格納
 */

  return (
    <div className="grid grid-cols-2 gap-4 h-screen overflow-y-auto">
      {/* {filteredCards.map((c) => (
        <Card
          key={c.id}
          praiseText={c.praiseText}
          adviceText={c.adviceText}
        />
      ))} */}
        {displayCards.map((c) => (
            <Card
            key={c.id}
            praiseText={c.praiseText}
            adviceText={c.adviceText}
            toName={c.toName}
            fromName={c.fromName}
            date={c.date}
            />
        ))}
    </div>
  );
}
