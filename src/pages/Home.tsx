"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [to, setTo] = useState("");
  const [from,setfrom] = useState("");
  const [praised_comment, setpraisedComment] = useState("");
  const [advice_comment, setadviceComment] = useState("");
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { to, from, praised_comment, advice_comment };
    console.log("送信するデータ:", data);

    await supabase .from("card").insert({to_name: to, from_name: from, praised_comment: praised_comment, advice_comment: advice_comment});
    
  };

  // const fetchData = async () => {
  //   const cards = await supabase.from("card").select("*");
  //   console.log(cards.data);
    
  // }

  return (
    <div>
      <p>データを入力してください</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="to">宛先：</label>
          <input
            id="to"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comment">送り主：</label>
          <input
            id="from"
            value={from}
            onChange={(e) => setfrom(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comment">ほめ：</label>
          <textarea
            id="praised_comment"
            value={praised_comment}
            onChange={(e) => setpraisedComment(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="comment">アドバイス：</label>
          <textarea
            id="advice_comment"
            value={advice_comment}
            onChange={(e) => setadviceComment(e.target.value)}
          />
        </div>
        <button type="submit" >保存</button>
      </form>

    {/* <button onClick={fetchData}>fetch</button> */}
    </div>
  );
}