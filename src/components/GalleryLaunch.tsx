"use client";

import React, { useEffect, useState } from "react";

type Props = {
  visible: boolean;
  onAnimationComplete: () => void;
};

export default function GalleryLaunch({ visible, onAnimationComplete }: Props) {
  // 0 = no cut, 1 = first cut, 2 = second cut
  const [cutStage, setCutStage] = useState(0);

  useEffect(() => {
    if (!visible) return;
    // schedule two cuts with a small pause between them
    const timers: Array<number> = [];
    timers.push(window.setTimeout(() => setCutStage(1), 700));
    // reset briefly so the second cut feels distinct
    timers.push(window.setTimeout(() => setCutStage(0), 1200));
    timers.push(window.setTimeout(() => setCutStage(2), 1500));
    // after 5 seconds, signal that animation is complete (open gallery)
    timers.push(window.setTimeout(() => {
      onAnimationComplete();
      setCutStage(0);
    }, 5000));

    return () => timers.forEach((t) => clearTimeout(t));
  }, [visible, onAnimationComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url('/2.jpg')`, filter: "brightness(0.45)" }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        <div className="max-w-4xl w-full flex flex-col items-center gap-8">
          <div className="w-full flex items-center justify-center">
            <div className="ribbon-wrapper">
              <div className="ribbon-left" />
              <div className="ribbon-right" />
              <div className={`ribbon-center ${cutStage === 1 ? "cut-1" : ""} ${cutStage === 2 ? "cut-2" : ""}`} />
                <div className={`scissors ${cutStage === 1 ? "cut-1" : ""} ${cutStage === 2 ? "cut-2" : ""}`} aria-hidden>
                {/* Cartoon-style scissors inspired by attachment */}
                <svg viewBox="0 0 200 120" width="140" height="84" className="scissors-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                  <defs>
                    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.25" />
                    </filter>
                  </defs>
                  {/* handles */}
                  <g fill="#fff" stroke="#111" strokeWidth="4" filter="url(#soft)">
                    <ellipse className="handle-left" cx="40" cy="30" rx="22" ry="20" />
                    <ellipse className="handle-right" cx="40" cy="90" rx="22" ry="20" />
                  </g>
                  {/* blades */}
                  <g stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                    <path className="blade-left" d="M52 36 L180 6" stroke="#666" fill="none" />
                    <path className="blade-right" d="M52 84 L180 114" stroke="#666" fill="none" />
                    {/* small smiling face on pivot */}
                    <circle cx="52" cy="60" r="6" fill="#111" />
                    <path d="M47 56 q2 3 5 3 q3 0 5 -3" stroke="#fff" strokeWidth={1.2} fill="none" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="text-center text-white">
            <h3 className="text-3xl md:text-4xl font-semibold">Opening the Gallery</h3>
            <p className="mt-2 text-lg opacity-90">Please wait while we unveil the exhibits...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
