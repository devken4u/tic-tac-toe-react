import { twMerge } from "tailwind-merge";
import { useState } from "react";
import clsx from "clsx";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({ children, className }) {
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [isDead, setIsDead] = useState(true);

  return (
    <button
      onClick={() => setIsSubscribe((prev) => !prev)}
      className={cn(
        "bg-red-500 px-4 py-2 text-white font-semibold rounded-md",
        className,
        {
          "bg-green-500": isSubscribe,
          "bg-black text-white": isDead,
        }
      )}
    >
      {children}
    </button>
  );
}
