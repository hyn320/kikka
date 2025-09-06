import React, { useState, } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Movie ({onFinish}: { onFinish: () => void}) {
    const navigate = useNavigate();
    // const [showVideo, setShowVideo] = useState(true);
    // const autoEnd = () => {
    //     navigate("/");
    // };

    const [fadeOut, setFadeOut] = useState(false);

    const handleFinish = () => {
        if (fadeOut) return;
        setFadeOut(true); // フェード開始
        setTimeout(() => {
            navigate("/");
            onFinish(); // フェード終わったら遷移
        }, 800); // フェード時間に合わせる（0.8s）
    };

    return (
        <div
            className={`fixed inset-0 bg-black flex items-center justify-center
                transition-all duration-1000 ease-in-out
                ${fadeOut ? "opacity-0" : "opacity-100"}`}
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