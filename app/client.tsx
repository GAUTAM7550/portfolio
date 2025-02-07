"use client"; // This ensures it runs on the client

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientSide() {
  useEffect(() => {
    AOS.init({ duration: 100, once: true ,delay:-10 });
  }, []);

  return null;
}
