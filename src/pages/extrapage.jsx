import React from "preact/compat";

export default function ExtraPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-white mb-4 text-lg">Extra Page</h1>
      <button className="rounded-md bg-foreground text-background px-4 py-2 hover:cursor-pointer active:scale-95 transition-all duration-50">Click me</button>
    </div>
  );
}
