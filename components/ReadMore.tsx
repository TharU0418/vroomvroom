'use client';

import { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}

export default function ReadMore({ text, maxLength = 150 }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => setIsExpanded(!isExpanded);

  if (text.length <= maxLength) return <p>{text}</p>;

  return (
    <p className="text-l text-white mb-8">
      {isExpanded ? text : text.substring(0, maxLength) + "..."}
      <button
        onClick={toggle}
        className="text-white ml-2 hover:underline text-l"
      >
        {isExpanded ? "See Less" : "See More"}
      </button>
    </p>
  );
}
