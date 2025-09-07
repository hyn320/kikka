import React, { useState } from "react";
import styles from "./Profile.module.css";
import yukaAvatar from "../assets/yuka.jpg";

export default function Profile() {
  const [name] = useState("田中優香");
  const [community] = useState("開発チーム");
  const [email] = useState("yuka@example.com");
  const [joinedAt] = useState("2023-04-01");
  const [avatar] = useState(yukaAvatar);

  const [showSettings, setShowSettings] = useState(false);
  const [activePage, setActivePage] = useState("profile");

  if (showSettings) {
    // 設定画面（ダミー）
    return (
      <div className={styles.settingsContainer}>
        <h1 className={styles.heading}>設定・アクセシビリティ</h1>
        <div className={styles.settingsButtonGroup}>
          <button
            onClick={() => alert("設定はダミーです")}
            className={styles.settingsButton}
          >
            設定
          </button>
          <button
            onClick={() => alert("アクセシビリティはダミーです")}
            className={styles.settingsButton}
          >
            アクセシビリティ
          </button>
          <button
            onClick={() => alert("コミュニティ追加はダミーです")}
            className={styles.settingsButton}
          >
            コミュニティを追加
          </button>
          <button
            onClick={() => {
              setShowSettings(false);
              setActivePage("profile"); // プロフィール画面に戻る時にステートを更新
            }}
            className={styles.backButton}
          >
            戻る
          </button>
        </div>
      </div>
    );
  }

  // 通常のプロフィール画面
  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.heading}>プロフィール</h1>

      {/* ユーザー情報 */}
      <div className={styles.userInfoSection}>
        <img
          src={avatar}
          alt="user avatar"
          className={styles.avatar}
        />

        <div className={styles.infoTextContainer}>
          <p className={styles.userName}>{name}</p>
          <p className={styles.detailText}>所属: {community}</p>
          <p className={styles.detailText}>社内メール: {email}</p>
          <p className={styles.detailText}>メンバーになった日: {joinedAt}</p>

        </div>
      </div>

      {/* ボタン群 */}
      <div className={styles.buttonGroup}>
        <button
          onClick={() => {
            alert("プロフィール編集はダミーです");
            setActivePage("profile"); // クリック時にステートを更新
          }}
          className={`${styles.button} ${styles.editButton} ${activePage === "profile" ? styles.activeButton : ""}`}
        >
          プロフィール編集
        </button>
        <button
          onClick={() => {
            setShowSettings(true);
            setActivePage("settings"); // クリック時にステートを更新
          }}
          className={`${styles.button} ${styles.settingsButton} ${activePage === "settings" ? styles.activeButton : ""}`}
        >
          設定・アクセシビリティ
        </button>
      </div>
    </div>
  );
}