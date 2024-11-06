import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-stone-700 min-h-screen overflow-hidden">
      <div
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-orange-400/30   mix-blend-normal filter blur-3xl animate-blob"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-amber-500/40 mix-blend-normal filter blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-orange-500/30   mix-blend-normal filter blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
};

export default Background;
