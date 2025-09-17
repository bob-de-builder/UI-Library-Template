"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  children: React.ReactNode;
  className?: string;
  language?: string;
};

export function Code({
  children,
  className = "",
  language = "typescript",
}: Props) {
  const [copied, setCopied] = useState(false);

  const baseClasses =
    "block overflow-x-auto rounded-lg font-mono bg-slate-800 rounded-md p-10";
  const responsiveClasses = "text-xs sm:text-sm max-w-full";
  const paddingClasses = "p-2 sm:p-3 md:p-4";

  const processChildren = (children: React.ReactNode): string => {
    if (typeof children === "string") {
      return children;
    }

    if (Array.isArray(children)) {
      return children
        .map((child) => {
          if (typeof child === "string") {
            return child;
          }
          return String(child);
        })
        .join("");
    }

    return String(children);
  };

  const content = processChildren(children);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={`relative ${baseClasses} ${responsiveClasses} ${paddingClasses} ${className}`}
    >
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-slate-700 hover:bg-slate-600 transition-colors"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4 text-slate-400" />
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: 0,
          fontSize: "inherit",
          background: "transparent",
        }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}
