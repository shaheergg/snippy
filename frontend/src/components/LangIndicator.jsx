import React from "react";

export default function LangIndicator({ language }) {
  const langColors = {
    python: "#3572A5",
    javascript: "#F1E05A",
    typescript: "#2B7489",
    swift: "#F05138",
    go: "#00ADD8",
    rust: "#000000",
    ruby: "#701516",
    java: "#B07219",
    csharp: "#178600",
    c: "#555555",
    cpp: "#f34b7d",
  };
  return (
    <div
      className="p-[6px] border rounded-full"
      style={{
        backgroundColor: langColors[language],
      }}
    ></div>
  );
}
