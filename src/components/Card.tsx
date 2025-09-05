import React, { useState } from "react";

interface CardProps {
  praiseText: string;
  adviceText?: string;
  toName: string;
  fromName: string;
  date: string;
}

export default function Card({ praiseText, adviceText, toName, fromName, date }: CardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="border rounded-xl shadow p-4 bg-white cursor-pointer transition-transform duration-300"
         onClick={() => setFlipped(!flipped)}
    >
      {flipped ? (
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
      )}
    </div>
  );
}
