import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Movie.module.css";

export default function Movie({ onFinish }: { onFinish: () => void }) {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleFinish = () => {
    if (fadeOut) return; // 二重発火防止
    setFadeOut(true);
    setTimeout(() => {
      navigate("/");   // ホームに遷移
      onFinish();      // App側の状態も更新
    }, 800); // CSSのtransitionに合わせる
  };

  return (
    <div
      className={`${styles.movieContainer} ${fadeOut ? styles.fadeOut : ""}`}
      onClick={handleFinish}
    >
      <video
        src="/animation.mp4"
        autoPlay
        muted
        onEnded={handleFinish}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
