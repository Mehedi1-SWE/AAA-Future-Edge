"use client";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  useEffect(() => {
    if (window.location.hostname === "www.aaa-fe.com") {
      window.location.replace(
        "https://aaa-fe.com" + window.location.pathname + window.location.search + window.location.hash
      );
    }
    import("aos").then(({ default: AOS }) => AOS.init());
  }, []);

  return <><Toaster />{children}</>;
}
