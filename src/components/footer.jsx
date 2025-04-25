import React from "preact/compat";
export default function Footer({links}) {
  return (
    <footer className="flex items-center justify-center gap-4 p-4 border-t border-neutral-700">
      {links.map((link) => (
        <a href={link.path} className="text-sm hover:underline">
          {link.name}
        </a>
      ))}
    </footer>
  );
}
