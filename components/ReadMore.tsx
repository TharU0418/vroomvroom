'use client';

import { useState } from "react";

export default function ReadMore({ text, maxLength = 150 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => setIsExpanded(!isExpanded);

  // If text is short, show it fully with no toggle
  if (text.length <= maxLength) return <p>{text}</p>;

  return (
    <p className="text-xl text-cyan-100 mb-8">
      {isExpanded ? text : text.substring(0, maxLength) + "..."}
      <button
        onClick={toggle}
        className="text-white ml-2 hover:underline"
      >
        {isExpanded ? "See Less" : "See More"}
      </button>
    </p>
  );
}
