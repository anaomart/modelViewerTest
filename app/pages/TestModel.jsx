"use client";
import "@google/model-viewer";
import React, { useEffect, useState } from "react";

export default function TestModel() {
  const [pageURL, setPageURL] = useState("");
  const [isNativeShare, setNativeShare] = useState(false);
  useEffect(() => {
    setPageURL(window.location.href);
    if (navigator.share) {
      setNativeShare(true);
    }
  }, []);
  return (
    <>
      {typeof navigator && (
        <model-viewer
          ar
          src="./Cup.glb"
          poster="./Cup.glb"
          tone-mapping="commerce"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
          alt="A 3D model carousel"
        >
          <button slot="ar-button" id="ar-button">
            View in your space
          </button>
          <button id="ar-failure">AR is not tracking!</button>
        </model-viewer>
      )}
    </>
  );
}
