import React from "react";
import Card from "./Card";
import styles from "./CardList.module.css";

interface CardListProps {
  type: "received" | "sent";
  userName: string;
  cards: any[];
}

export default function CardList({ type, userName, cards }: CardListProps) {
  const receivedCards = cards.filter((c) => c.to_name === userName);
  const sentCards = cards.filter((c) => c.from_name === userName);
  const displayCards = type === "received" ? receivedCards : sentCards;

  return (
    <div className={styles.container}>
      {displayCards.map((c) => (
        <Card
          key={c.id}
          praiseText={c.praised_comment}
          adviceText={c.advice_comment}
          toName={c.to_name}
          fromName={c.from_name}
          date={c.created_at}
        />
      ))}
    </div>
  );
}
