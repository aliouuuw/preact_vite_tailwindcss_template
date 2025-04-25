import React from "preact/compat";
export default function Header({routes}) {
  return (
    <header className="sticky z-50 bg-neutral-950/50 top-0 left-0 right-0 flex items-center justify-center gap-4 p-4 border-b border-neutral-700 backdrop-blur-lg">
      <nav className="flex items-center justify-center gap-4">
        {routes.map((route) => (
          <a href={route.path} className="text-sm hover:underline">
            {route.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
