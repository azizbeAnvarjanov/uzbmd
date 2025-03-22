"use client";
import { useEffect } from "react";

export default function CEFR() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/fayl.pdf"; // Mahalliy fayl yo‘li
    link.download = "certificate.pdf"; // Yuklab olinadigan nom
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return <p>Fayl yuklanmoqda...</p>;
}
