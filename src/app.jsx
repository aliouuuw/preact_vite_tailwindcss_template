import { Router } from "preact-router";
import Home from "./pages/home";
import ExtraPage from "./pages/extrapage";

export function App() {
  return (
    <div className="flex flex-col h-screen min-h-screen px-4 py-2">
      <header className="flex items-center justify-center gap-4">
        <nav className="flex items-center justify-center gap-4">
          <a href="/" className="text-blue-500 hover:text-blue-600 text-sm">
            Home
          </a>
          <a
            href="/extrapage"
            className="text-blue-500 hover:text-blue-600 text-sm"
          >
            Extra page
          </a>
        </nav>
      </header>

      <Router>
        <Home path="/" />
        <ExtraPage path="/extrapage" />
      </Router>
    </div>
  );
}
