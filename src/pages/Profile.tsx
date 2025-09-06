import React, { useState } from "react";

export default function Profile() {
  const [name] = useState("Alice");
  const [community] = useState("開発チーム");
  const [email] = useState("alice@example.com");
  const [joinedAt] = useState("2023-04-01");
  const [avatar] = useState("https://via.placeholder.com/80");

  const [showSettings, setShowSettings] = useState(false);

  if (showSettings) {
    // 設定画面（ダミー）
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">設定・アクセシビリティ</h1>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => alert("設定はダミーです")}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            設定
          </button>
          <button
            onClick={() => alert("アクセシビリティはダミーです")}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            アクセシビリティ
          </button>
          <button
            onClick={() => alert("コミュニティ追加はダミーです")}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            コミュニティを追加
          </button>
          <button
            onClick={() => setShowSettings(false)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            戻る
          </button>
        </div>
      </div>
    );
  }

  // 通常のプロフィール画面
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">プロフィール</h1>

      {/* ユーザー情報 */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={avatar}
          alt="user avatar"
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-gray-500">所属: {community}</p>
          <p className="text-gray-500">社内メール: {email}</p>
          <p className="text-gray-500">メンバーになった日: {joinedAt}</p>
        </div>
      </div>

      {/* ボタン群 */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => alert("プロフィール編集はダミーです")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          プロフィール編集
        </button>
        <button
          onClick={() => setShowSettings(true)}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          設定・アクセシビリティ
        </button>
      </div>
    </div>
  );
}
