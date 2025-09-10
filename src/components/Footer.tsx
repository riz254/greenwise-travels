"use client"; // make this a client component

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // This runs only in the browser → avoids SSR/client mismatch
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {year ?? ""} Greenwise Travels. All rights reserved.</p>
        <p className="mt-2">Designed with ❤️ in Africa</p>
      </div>
    </footer>
  );
}
