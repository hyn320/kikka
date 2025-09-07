import { useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "./Home.module.css";

export default function Home() {

  const userId = import.meta.env.VITE_USER_ID;
  const userName = import.meta.env.VITE_USER_NAME;

  const [to, setTo] = useState("");
  const [praisedComment, setPraisedComment] = useState("");
  const [adviceComment, setAdviceComment] = useState("");
  const fromName = import.meta.env.VITE_USER_NAME;
  console.log(fromName);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataToInsert = { 
      to_name: to,
      from_name: fromName,
      praised_comment: praisedComment,
      advice_comment: adviceComment 
    };
    
    const { data, error } = await supabase.from("card").insert(dataToInsert);
    
    if (error) {
      console.error("データの挿入に失敗しました:", error.message);
    } else {
      console.log("データの挿入に成功しました:", data);
      setTo("");
      setPraisedComment("");
      setAdviceComment("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        

        {/* カードフォームのコンテナ */}
        <form onSubmit={handleSubmit} className={styles.cardForm}>
          {/* to入力欄 */}
          <div className={styles.inputGroup}>
            <span className={styles.toLabel}>to</span>
            <input
              id="to"
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className={styles.formInput}
              placeholder="宛先を入力"
            />
          </div>

          {/* ほめ・アドバイス入力欄 */}
          <div className={styles.textareaGroup}>
            <textarea
              id="praised_comment"
              value={praisedComment}
              onChange={(e) => setPraisedComment(e.target.value)}
              className={styles.formTextarea}
              placeholder="ほめ言葉を入力してください"
            />
            <textarea
              id="advice_comment"
              value={adviceComment}
              onChange={(e) => setAdviceComment(e.target.value)}
              className={styles.formTextarea}
              placeholder="アドバイスを入力してください"
            />
          </div>

          <div className={styles.fromName}>from {fromName}</div>
          
          <div className={styles.submitButtonContainer}>
            <button type="submit" className={styles.submitButton}>送信</button>
          </div>
        </form>
      </div>
    </div>
  );
}